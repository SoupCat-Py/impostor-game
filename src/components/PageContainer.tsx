import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
}

export default function PageContainer({children}:PageContainerProps) {
  return (
    <main className="flex justify-center">
      <section className="flex flex-col p-4 gap-6 min-h-screen max-w-150 place-content-between">
        {children}
      </section>
    </main>
  )
}
