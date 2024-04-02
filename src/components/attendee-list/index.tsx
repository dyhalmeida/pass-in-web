import { InputSearch } from "@/components/input-search";

export const AttendeeList = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <InputSearch />
      </div>
    </div>
  );
};
