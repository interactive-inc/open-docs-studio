import type { DocClient } from "@interactive-inc/docs-client"

export type HonoEnv = {
  Bindings: {
    CLI_DOCS_DIR: string
  }
  Variables: {
    client: DocClient
  }
}
