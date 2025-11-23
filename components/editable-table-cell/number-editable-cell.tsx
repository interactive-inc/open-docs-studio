import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"

type Props = {
  value: number | null
  onUpdate: (value: number | null) => void
}

export function NumberEditableCell(props: Props) {
  const displayValue =
    props.value !== undefined && props.value !== null ? String(props.value) : ""
  const [editValue, setEditValue] = useState(displayValue)

  useEffect(() => {
    setEditValue(displayValue)
  }, [displayValue])

  const handleBlur = () => {
    const num = Number(editValue)
    const parsedValue =
      editValue === "" ? undefined : Number.isNaN(num) ? undefined : num
    if (parsedValue !== props.value) {
      props.onUpdate(parsedValue ?? null)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur()
    }
    if (e.key === "Escape") {
      setEditValue(props.value ? String(props.value) : "")
    }
  }

  return (
    <Input
      className="w-max"
      type="number"
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
}
