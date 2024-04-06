import { ComponentProps } from "react";
import { twMerge } from "@/lib/tailwind-merge";

interface ITableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: ITableCellProps) {
  return (
    <td
      {...props}
      className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}
    />
  );
}
