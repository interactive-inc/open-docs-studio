import { use } from "react"
import { DirectoryPageView } from "@/components/directory-page-view"
import { FilePageView } from "@/components/file-view/file-page-view"
import { RootStateContext } from "@/contexts/root-state"
import { findNodeInTree } from "@/utils/find-node-in-tree"

export function MainView(props: { slug: string[] }) {
  const rootStateQuery = use(RootStateContext)

  const filePath = props.slug.join("/")

  if (filePath.startsWith("apps")) {
    return null
  }

  const tree = rootStateQuery.data

  const node = findNodeInTree(tree, filePath)

  // ツリーにノードが存在し、ファイルタイプの場合
  if (node && node.type === "file") {
    return <FilePageView filePath={filePath} />
  }

  // デフォルトはディレクトリとして表示
  return <DirectoryPageView key={filePath} currentPath={filePath} />
}
