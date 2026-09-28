import type { ArticleTable as ArticleTableData } from "@/content/article-evidence";

/** 本文中に差し込む比較表（記事データの table フィールドを描画）。 */
export function ArticleTable({ table }: { table: ArticleTableData }) {
  return (
    <div className="article-table-wrap visual-table-wrap">
      <table className="visual-table">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
