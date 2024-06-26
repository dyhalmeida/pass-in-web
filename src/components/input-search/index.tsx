import { Search } from "@/lib/icons";
import { ComponentProps } from "react";

interface IInputSearch extends ComponentProps<"input"> {}

export const InputSearch = (props: IInputSearch) => {
  return (
    <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
      <label htmlFor="search">
        <Search className="size-4 text-emerald-300" />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Buscar participante..."
        {...props}
        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"
      />
    </div>
  );
};
