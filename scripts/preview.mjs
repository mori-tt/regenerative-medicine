import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("out");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    let file = resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    if (url.pathname.split("/").some((p) => p.startsWith("."))) {
      res.writeHead(403).end();
      return;
    }
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        res.writeHead(308, { Location: url.pathname + "/" + url.search }).end();
        return;
      }
      file = resolve(file, "index.html");
    }
    res.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      await readFile(resolve(root, "404.html")).catch(
        () => "Build first: npm run build",
      ),
    );
  }
}).listen(4173, "127.0.0.1", () =>
  console.log("Static preview: http://127.0.0.1:4173"),
);
