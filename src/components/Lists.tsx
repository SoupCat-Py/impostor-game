import type { ReactNode } from "react";

type ListProps = {
  children: ReactNode;
  row?: boolean;
}

export function List({ children }: ListProps) {
  return (
    <ul>
      {children}
    </ul>
  )
}

export function ListItem({ children, row=false }: ListProps) {
  return (
    <li className={`
      relative flex p-4 mb-1 last:mb-0 rounded-md first:rounded-t-2xl last:rounded-b-2xl
      ${row?"flex-row gap-2 justify-center":"flex-col gap-0 justify-start"}
      bg-neutral-50 dark:bg-taupe-800 text-emerald-900 dark:text-amber-50
    `}
    >
      {children}
    </li>
  )
}
