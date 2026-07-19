import type { ReactNode } from "react"

type TextProps = {
  children: ReactNode;
  noPadding?: boolean;
}


export function H1({children, noPadding=false}:TextProps) {
  return (
    <h1 className={`font-[Bagel_Fat_One]! text-4xl ${noPadding ? null : "pb-4"} w-full text-center font-bold tracking-wide text-rose-700 dark:text-yellow-500`}>
      {children}
    </h1>
  )
}

// NOTE FOR FUTURE IF LAYOUTS LOOK ODD
// I have a little bit of vertical padding for H1 and H2 that
// look better if the layout goes like H1 H2 Para H2 Para.
// For now, it helps distinguish subheaders from each other but
// may introduce some problems later so be aware of  that

export function H2({children, noPadding=false}:TextProps) {
  return (
    <h2 className={`text-2xl ${noPadding?"":"pt-4"} pb-1 font-bold text-rose-600 dark:text-yellow-600`}>
      {children}
    </h2>
  )
}

export function Para({children}:TextProps) {
  return (
    <p className="text-md text-rose-900 dark:text-yellow-100">
      {children}
    </p>
  )
}

export function Small({children}:TextProps) {
  return (
    <p className="text-sm text-rose-800 dark:text-taupe-400">
      {children}
    </p>
  )
}
