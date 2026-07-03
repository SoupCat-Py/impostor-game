import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
}

export function PageContainer({children}:PageContainerProps) {
  return (
    <main className="flex flex-col p-6 gap-6 h-dvh w-full max-w-150 place-content-between">
        {children}
    </main>
  )
}

export function InnerContainer({children}:PageContainerProps) {
  return (
      <div className={"flex flex-col gap-4"}>
        {children}
      </div>
  )
}
