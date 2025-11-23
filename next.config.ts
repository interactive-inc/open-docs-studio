import type { NextConfig } from "next"

const config: NextConfig = {
  get env() {
    if (process.env.NODE_ENV !== "development") {
      return {}
    }

    return {
      CLI_DOCS_DIR: "../open-docs-client/docs",
    }
  },
}

export default config
