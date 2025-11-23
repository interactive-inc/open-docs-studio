import type { ErrorHandler } from "hono"
import { HTTPException } from "hono/http-exception"
import type { HonoEnv } from "@/api/env"

export const onError: ErrorHandler<HonoEnv> = (err, c) => {
  console.error("API Error:", err)

  if (err instanceof HTTPException) {
    return c.json({ error: err.message }, err.status)
  }

  return c.json(
    {
      error: "Internal server error",
      message: err.message,
      stack: err.stack,
    },
    500,
  )
}
