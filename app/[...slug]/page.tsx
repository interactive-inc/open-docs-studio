"use client"

import { Suspense, use } from "react"
import { MainView } from "@/components/main-view"

type Props = {
  params: Promise<{ slug: string[] }>
}

export default function SlugPage(props: Props) {
  const params = use(props.params)

  return (
    <Suspense
      fallback={
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-muted-foreground">読み込み中...</div>
        </div>
      }
    >
      <MainView slug={params.slug} />
    </Suspense>
  )
}
