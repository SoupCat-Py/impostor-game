import type { ReactNode } from "react"

type TextProps = {
  children: ReactNode;
}


export function H1({children}:TextProps) {
  return (
    <h1 className="text-4xl pb-2 font-bold tracking-wide text-emerald-700 dark:text-amber-500">
      {children}
    </h1>
  )
}

// NOTE FOR FUTURE IF LAYOUTS LOOK ODD
// I have a little bit of vertical padding for H1 and H2 that
// look better if the layout goes like H1 H2 Para H2 Para.
// For now, it helps distinguish subheaders from each other but
// may introduce some problems later so be aware of  that

export function H2({children}:TextProps) {
  return (
    <h2 className="text-2xl pt-2 font-bold text-emerald-600 dark:text-amber-600">
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

export function Small({children}:TextProps) {
  return (
    <p className="text-sm text-emerald-950 dark:text-taupe-400">
      {children}
    </p>
  )
}