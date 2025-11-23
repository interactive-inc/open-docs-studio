#!/usr/bin/env node

import { createServer } from "node:http"
import { parseArgs } from "node:util"
import next from "next"
import packageJson from "./package.json"

/**
 * CLI entry point
 */
const help = `Usage:
  docs [<docs-path>] [options]

Options:
  -p, --port <port>      Port number (default: 3000)
  -d, --dev              Run in development mode
  -h, --help             Show help
  -v, --version          Show version

Examples:
  docs                   Start server with default docs directory
  docs my-docs           Start server with custom docs directory
  docs -p 8080           Start server on port 8080
  docs my-docs -p 8080   Start server with custom docs directory on port 8080
  docs --dev             Start server in development mode`

const args = parseArgs({
  args: process.argv.slice(2),
  options: {
    help: { type: "boolean", short: "h" },
    version: { type: "boolean", short: "v" },
    port: { type: "string", short: "p" },
    dev: { type: "boolean", short: "d" },
  },
  strict: false,
  allowPositionals: true,
})

if (args.values.help) {
  console.log(help)
  process.exit(0)
}

if (args.values.version) {
  console.log(packageJson.version)
  process.exit(0)
}

const docsDir = args.positionals[0] || "docs"

const port =
  typeof args.values.port === "string"
    ? Number.parseInt(args.values.port, 10)
    : 4242

const hostname = process.env.HOSTNAME || "localhost"

process.env.CLI_DOCS_DIR = docsDir

console.log(`Starting server with docs directory: ${docsDir}`)

const app = next({
  dev: args.values.dev === true,
  hostname,
  port,
})

const handle = app.getRequestHandler()

await app.prepare()

const server = createServer(handle)

server.listen(port, () => {
  console.log(`> Server listening at http://${hostname}:${port}`)
})
