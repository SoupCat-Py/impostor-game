import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
}

export default function PageContainer({children}:PageContainerProps) {
  return (
    <main className="flex flex-col p-6 gap-6 h-dvh w-full max-w-150 place-content-between">
        {children}
    </main>
  )
}
