import { Note } from "@/types";
import { NoteItem } from "./NoteItem";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div className="flex flex-col gap-3">
      {notes.map((item, index) => (
        <NoteItem status={item.status} text={item.text} key={index} />
      ))}
    </div>
  );
}
