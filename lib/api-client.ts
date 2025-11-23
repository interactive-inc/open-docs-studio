import { hc } from "hono/client"
import type { app } from "@/api"

export function apiClient() {
  const baseUrl = window.location.origin

  return hc<typeof app>(baseUrl, {
    async fetch(input: RequestInfo | URL, requestInit?: RequestInit) {
      const resp = await fetch(input, {
        ...requestInit,
        mode: "cors",
      })

      if (resp.ok) {
        return resp
      }

      const error = await resp.json()

      if (typeof error === "object" && error !== null && "message" in error) {
        throw new Error(error.message)
      }

      throw new Error(resp.statusText)
    },
  })
}
