/**
 * パスを正規化してルーティング用のパスに変換
 * 先頭のスラッシュを削除
 */
export function normalizePath(path: string): string {
  return path.startsWith("/") ? path.substring(1) : path
}
