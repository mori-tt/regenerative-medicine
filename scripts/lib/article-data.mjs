import fs from "node:fs";
import ts from "typescript";
import { createHash } from "node:crypto";

// Parse only literal article data; do not execute arbitrary source while auditing.
export function readLiteralBinding(path, binding) {
  const source = ts.createSourceFile(
    path,
    fs.readFileSync(path, "utf8"),
    ts.ScriptTarget.Latest,
    true,
  );
  const bindings = new Map();
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.initializer)
        bindings.set(declaration.name.text, declaration.initializer);
    }
  }
  function literal(node) {
    if (ts.isAsExpression(node) || ts.isSatisfiesExpression(node))
      return literal(node.expression);
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      const args = node.arguments.map(literal);
      if (node.expression.text === "t")
        return {
          en: { title: args[0], description: args[1] },
          zh: { title: args[2], description: args[3] },
        };
      if (node.expression.text === "b")
        return {
          en: {
            points: args[0],
            sections: args[1].map(([title, paragraphs]) => ({
              title,
              paragraphs,
            })),
          },
          zh: {
            points: args[2],
            sections: args[3].map(([title, paragraphs]) => ({
              title,
              paragraphs,
            })),
          },
        };
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))
      return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
    if (ts.isObjectLiteralExpression(node))
      return Object.fromEntries(
        node.properties.map((property) => {
          if (!ts.isPropertyAssignment(property))
            throw new Error("Only literal article fields are supported");
          return [property.name.text, literal(property.initializer)];
        }),
      );
    if (ts.isIdentifier(node) && bindings.has(node.text))
      return literal(bindings.get(node.text));
    throw new Error(
      `Unsupported article data: ${node.getText(source).slice(0, 80)}`,
    );
  }
  const node = bindings.get(binding);
  if (!node) throw new Error(`${binding} was not found in ${path}`);
  return literal(node);
}

export function readRawArticles(path = "src/content/articles.ts") {
  return readLiteralBinding(path, "rawArticles");
}

export function readTranslations() {
  const titles = readLiteralBinding(
    "src/content/article-locales.ts",
    "articleLocales",
  );
  const bodies = {};
  for (const [name, binding] of [
    ["research", "Research"],
    ["treatment", "Treatment"],
    ["stem-cells", "StemCells"],
    ["basics-a", "BasicsA"],
    ["basics-b", "BasicsB"],
    ["extra", "ExtraA"],
    ["columns", "Columns"],
  ]) {
    Object.assign(
      bodies,
      readLiteralBinding(
        `src/content/article-bodies-${name}.ts`,
        `articleBodies${binding}`,
      ),
    );
  }
  const primer = readLiteralBinding(
    "src/content/locales.ts",
    "localizedArticle",
  );
  return Object.fromEntries(
    Object.keys(titles).map((slug) => [
      slug,
      {
        titles: titles[slug],
        bodies: bodies[slug],
        ...(slug === "what-is-regenerative-medicine" ? { primer } : {}),
      },
    ]),
  );
}

export function manuscriptHash(article, evidence, translations) {
  return createHash("sha256")
    .update(JSON.stringify({ article, evidence, translations }))
    .digest("hex");
}

export function readEvidence({ allowIncomplete = false } = {}) {
  const groups = ["basics", "stem-cells", "treatment", "research"];
  const records = {};
  for (const group of groups) {
    const file = `src/content/evidence/${group}.json`;
    if (allowIncomplete && !fs.existsSync(file)) continue;
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const [slug, entry] of Object.entries(data)) {
      if (records[slug]) throw new Error(`Duplicate evidence article: ${slug}`);
      records[slug] = { ...entry, category: group };
    }
  }
  return records;
}
