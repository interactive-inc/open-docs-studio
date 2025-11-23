import type { DocTreeNode } from "@interactive-inc/docs-client"

/**
 * ツリーから指定されたパスのノードを検索する
 */
export function findNodeInTree(
  tree: DocTreeNode[],
  targetPath: string,
): DocTreeNode | null {
  for (const node of tree) {
    if (node.path === targetPath) {
      return node
    }
    if (node.type === "directory" && node.children) {
      const found = findNodeInTree(node.children, targetPath)
      if (found) return found
    }
  }
  return null
}
