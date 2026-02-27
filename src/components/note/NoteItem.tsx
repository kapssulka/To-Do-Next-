import { Check, Pencil, Trash2 } from "lucide-react";
import clsx from "clsx";
import IconButtonWrapper from "../../ui/buttons/IconButtonWrapper";
import { NoteStatus } from "@/types";

interface NoteItemProps {
  text: string;
  status: NoteStatus;
  createdAt?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onToggleStatus?: () => void;
}

export function NoteItem({
  text,
  status,
  createdAt,
  onEdit,
  onDelete,
  onToggleStatus,
}: NoteItemProps) {
  return (
    <div
      className={clsx(
        "w-full rounded border border-gray-300 bg-white px-5 py-4 transition",
        "flex items-start gap-4",
        status === "done" && "opacity-70",
      )}
    >
      {/* STATUS DOT */}
      <span
        className={clsx(
          "mt-1 h-3 w-3 shrink-0 rounded-full",
          status === "todo" && "bg-blue-500",
          status === "done" && "bg-green-500",
        )}
      />

      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-2">
        <p
          className={clsx(
            "text-sm leading-relaxed text-gray-900 break-all max-h-[200px] overflow-y-auto",
            status === "done" && "line-through text-gray-400",
          )}
        >
          {text}
        </p>

        {createdAt && (
          <span className="text-xs text-gray-400">{createdAt}</span>
        )}
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2">
        <IconButtonWrapper color="green" onClick={onToggleStatus}>
          <Check size={15} />
        </IconButtonWrapper>

        <IconButtonWrapper color="blue" onClick={onEdit}>
          <Pencil size={15} />
        </IconButtonWrapper>

        <IconButtonWrapper color="red" onClick={onDelete}>
          <Trash2 size={15} />
        </IconButtonWrapper>
      </div>
    </div>
  );
}
