import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
}

export default function PageContainer({children}:PageContainerProps) {
  return (
    <main className="flex flex-col p-6 gap-6 min-h-screen max-w-150 place-content-between">
        {children}
    </main>
  )
}
