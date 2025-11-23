import type { DocRelationFile } from "@interactive-inc/docs-client"
import { SingleRelationSelect } from "@/components/file-view/single-relation-select"

type Props = {
  value: unknown
  onUpdate: (value: unknown) => void
  relationOptions?: DocRelationFile[]
}

export function RelationEditableCell(props: Props) {
  return (
    <SingleRelationSelect
      value={(props.value as string) || ""}
      relationOptions={props.relationOptions}
      onValueChange={(value) => {
        props.onUpdate(value)
      }}
    />
  )
}
