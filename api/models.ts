import {
  zDocFileIndex,
  zDocFileMd,
  zDocFileUnknown,
  zDocRelation,
} from "@interactive-inc/docs-client/models"
import { z } from "zod"

export const zDirectoryJson = z.object({
  indexFile: zDocFileIndex,
  files: z.array(z.union([zDocFileMd, zDocFileUnknown])),
  relations: z.array(zDocRelation),
})
