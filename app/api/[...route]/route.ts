import { app } from "@/api"

export const GET = async (request: Request) => {
  return app.fetch(request, { CLI_DOCS_DIR: process.env.CLI_DOCS_DIR })
}

export const POST = async (request: Request) => {
  return app.fetch(request, { CLI_DOCS_DIR: process.env.CLI_DOCS_DIR })
}

export const PUT = async (request: Request) => {
  return app.fetch(request, { CLI_DOCS_DIR: process.env.CLI_DOCS_DIR })
}

export const DELETE = async (request: Request) => {
  return app.fetch(request, { CLI_DOCS_DIR: process.env.CLI_DOCS_DIR })
}
