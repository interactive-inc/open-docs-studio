import type { DocFileUnknown } from "@interactive-inc/docs-client"
import { FileCard } from "@/components/file-card"
import { Card } from "@/components/ui/card"

type Props = {
  files: DocFileUnknown[]
  onDataChanged?: () => void
}

export function DirectoryFileListView(props: Props) {
  return (
    <Card className="rounded-md p-2">
      <div className="space-y-2">
        {props.files.map((file) => (
          <FileCard
            key={file.path.path}
            file={file}
            onDataChanged={props.onDataChanged}
          />
        ))}
      </div>
    </Card>
  )
}
