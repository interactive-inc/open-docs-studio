import type { DocFile } from "@interactive-inc/docs-client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { normalizePath } from "@/utils/normalize-path"

type Props = {
  file: DocFile
  onRestore: (filePath: string) => void
  isRestorePending: boolean
}

export function ArchivedFileItem(props: Props) {
  if (props.file.type !== "markdown") {
    return null
  }

  const handleRestore = () => {
    props.onRestore(props.file.path.path)
  }

  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex-1">
        <Link
          href={`/${normalizePath(props.file.path.path)}`}
          className="font-medium text-sm hover:underline"
        >
          {props.file.content.title || props.file.path.name}
        </Link>
      </div>
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={handleRestore}
        disabled={props.isRestorePending}
      >
        {"復元"}
      </Button>
    </div>
  )
}
