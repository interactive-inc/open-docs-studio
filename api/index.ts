import { contextStorage } from "hono/context-storage"
import { cors } from "hono/cors"
import { factory } from "@/api/factory"
import { clientMiddleware } from "@/api/middlewares/client-middleware"
import {
  GET as getDirectory,
  PUT as updateDirectory,
} from "@/api/routes/directories.$path"
import { GET as getFileTree } from "@/api/routes/directories.tree"
import { POST as createFile } from "@/api/routes/files"
import {
  DELETE as deleteFile,
  GET as getFile,
  PUT as updateFile,
} from "@/api/routes/files.$path"
import { onError } from "@/api/utils/on-error"

export const app = factory
  .createApp()
  .basePath("api")
  .use(contextStorage())
  .use(clientMiddleware())
  .get("/directories", ...getDirectory)
  .put("/directories", ...updateDirectory)
  .get("/directories/tree", ...getFileTree)
  .get("/directories/:path{.+}", ...getDirectory)
  .put("/directories/:path{.+}", ...updateDirectory)
  .post("/files", ...createFile)
  .put("/files/:path{.+}", ...updateFile)
  .get("/files/:path{.+}", ...getFile)
  .delete("/files/:path{.+}", ...deleteFile)

app.use(cors())

app.onError(onError)
