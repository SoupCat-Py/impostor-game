import type { ReactNode } from "react"

type TextProps = {
    children: ReactNode;
}


export function H1({children}:TextProps) {
    return (
        <h1 className="text-4xl font-bold tracking-wide text-emerald-700 dark:text-amber-500">
            {children}
        </h1>
    )
}

export function H2({children}:TextProps) {
    return (
        <h2 className="text-2xl font-bold text-emerald-600 dark:text-amber-600">
            {children}
        </h2>
    )
}

export function Para({children}:TextProps) {
    return (
        <p className="text-md text-emerald-900 dark:text-amber-100">
            {children}
        </p>
    )
}