import type { Metadata } from "next"
import { ClientLayout } from "@/components/client-layout"
import { DirectoryLayoutSidebar } from "@/components/directory-layout-sidebar"
import { RootQueryClientProvider } from "@/providers/root-query-client-provider"
import { RootStateProvider } from "@/providers/root-state-provider"

import "./globals.css"

export const metadata: Metadata = {
  title: "Studio",
  description: "",
  icons: {
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
}

type Props = { children: React.ReactNode }

export default function RootLayout(props: Props) {
  return (
    <html lang={"ja"} className={"dark overflow-auto overscroll-y-none"}>
      <body>
        <RootQueryClientProvider>
          <ClientLayout>
            <RootStateProvider>
              <DirectoryLayoutSidebar>{props.children}</DirectoryLayoutSidebar>
            </RootStateProvider>
          </ClientLayout>
        </RootQueryClientProvider>
      </body>
    </html>
  )
}
