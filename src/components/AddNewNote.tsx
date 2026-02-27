import AccentButton from "../ui/buttons/AccentButton";
import Input from "../ui/Input";

export default function AddNewNote() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Input placeholder="Новая заметка..." type="text" />
      <AccentButton children="Добавить" />
    </div>
  );
}
