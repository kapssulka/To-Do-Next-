export type NoteStatus = "todo" | "done";

export interface Note {
  status: NoteStatus;
  text: string;
  id: string;
}
