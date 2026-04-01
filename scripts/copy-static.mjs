import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const rootFiles = [
  "index.html",
  "about.html",
  "services.html",
  "departments.html",
  "blog.html",
  "contact.html",
  "style.css",
  "index.js",
  "vercel.json",
];

function ensureDir(target) {
  fs.mkdirSync(target, { recursive: true });
}

function copyDir(source, target) {
  if (!fs.existsSync(source)) return;
  ensureDir(target);
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) copyDir(sourcePath, targetPath);
    else fs.copyFileSync(sourcePath, targetPath);
  }
}

fs.rmSync(dist, { recursive: true, force: true });
ensureDir(dist);

rootFiles.forEach((name) => {
  const src = path.join(root, name);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dist, name));
});

for (const name of fs.readdirSync(root)) {
  if (name.startsWith("blog-") && name.endsWith(".html")) {
    fs.copyFileSync(path.join(root, name), path.join(dist, name));
  }
}

copyDir(path.join(root, "public"), path.join(dist, "public"));
copyDir(path.join(root, "assets"), path.join(dist, "assets"));
