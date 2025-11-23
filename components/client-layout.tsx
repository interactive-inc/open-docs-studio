"use client"

import { useEffect, useState } from "react"

type Props = { children: React.ReactNode }

export function ClientLayout(props: Props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return props.children
}
