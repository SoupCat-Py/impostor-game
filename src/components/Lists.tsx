import type { ReactNode } from "react";

type ListProps = {
    children: ReactNode;
}

export function List({ children }: ListProps) {
    return (
        <ul>
            {children}
        </ul>
    )
}

export function ListItem({ children }: ListProps) {
    return (
        <li className="bg-neutral-50 dark:bg-taupe-800 text-emerald-900 dark:text-amber-50 p-4 mb-1 last:mb-0 rounded-md first:rounded-t-2xl last:rounded-b-2xl">
            {children}
        </li>
    )
}
