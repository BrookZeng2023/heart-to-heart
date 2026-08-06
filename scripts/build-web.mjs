import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webRoot = path.join(projectRoot, "web");
const files = ["index.html", "app.js", "styles.css", "manifest.webmanifest", "service-worker.js", "icon.svg"];

await rm(webRoot, { recursive: true, force: true });
await mkdir(webRoot, { recursive: true });
await Promise.all(files.map((file) => cp(path.join(projectRoot, file), path.join(webRoot, file))));

console.log(`Prepared ${files.length} web assets in ${path.relative(projectRoot, webRoot)}.`);
