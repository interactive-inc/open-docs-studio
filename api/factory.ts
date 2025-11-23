import { createFactory } from "hono/factory"
import type { HonoEnv } from "@/api/env"

export const factory = createFactory<HonoEnv>()
