import NoteList from "@/src/components/note/NoteList";
import PageLayout from "@/src/components/layout/PageLayout";
import { notesMock } from "@/testData";
import AddNewNote from "@/src/components/AddNewNote";

export default function Home() {
  return (
    <PageLayout className="gap-6">
      <AddNewNote />

      {/* <NoteFilter /> */}

      <NoteList notes={notesMock} />
    </PageLayout>
  );
}
