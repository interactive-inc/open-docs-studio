"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import type { ReactNode } from "react"
import { RootStateContext } from "@/contexts/root-state"
import { apiClient } from "@/lib/api-client"

type Props = {
  children: ReactNode
}

export function RootStateProvider(props: Props) {
  const endpoint = apiClient().api.directories.tree

  const query = useSuspenseQuery({
    queryKey: [endpoint.$url()],
    queryFn: async () => {
      const resp = await endpoint.$get()
      return resp.json()
    },
  })

  return (
    <RootStateContext.Provider value={query}>
      {props.children}
    </RootStateContext.Provider>
  )
}
