import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const dist = join(root, "dist");
const client = join(dist, "client");
const server = join(dist, "server");

await rm(dist, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await cp(out, client, { recursive: true });

const worker = `
const staticAsset = (request, pathname) => {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    if (!url.pathname.includes(".")) {
      const path = url.pathname.endsWith("/")
        ? url.pathname + "index.html"
        : url.pathname + "/index.html";
      return env.ASSETS.fetch(staticAsset(request, path));
    }

    return response;
  },
};
`.trimStart();

await writeFile(join(server, "index.js"), worker);
await writeFile(
  join(server, "wrangler.json"),
  JSON.stringify({
    name: "arunya-portfolio",
    main: "index.js",
    compatibility_date: "2026-05-15",
    assets: { directory: "../client" },
  }),
);

const hosting = await readFile(
  join(root, ".openai", "hosting.json"),
  "utf8",
);
await mkdir(join(dist, ".openai"), { recursive: true });
await writeFile(join(dist, ".openai", "hosting.json"), hosting);
