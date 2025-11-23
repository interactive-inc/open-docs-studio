import path from "node:path"
import { DocClient, DocPathSystem } from "@interactive-inc/docs-client"
import { DocFileSystemNode } from "@interactive-inc/docs-client/file-system-node"
import { factory } from "@/api/factory"

export function clientMiddleware() {
  return factory.createMiddleware((c, next) => {
    const basePath = path.join(process.cwd(), c.env.CLI_DOCS_DIR)

    const pathSystem = new DocPathSystem()

    const fileSystem = new DocFileSystemNode({
      basePath: basePath,
      pathSystem,
    })

    const client = new DocClient({ fileSystem })

    c.set("client", client)

    return next()
  })
}
