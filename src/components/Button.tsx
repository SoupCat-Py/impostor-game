import type { ReactNode } from "react";

type buttonProps = {
    children: ReactNode;
    primary?: boolean;
    link?: boolean;
}

export default function Button({children, primary=false, link=false}:buttonProps) {
    if (link) {
        return (
            <a className={`
                flex justify-center items-center py-2 w-full
                rounded-full font-bold border-3 
                cursor-pointer select-none
                ${primary
                    ?"bg-emerald-400 border-emerald-400 dark:bg-amber-500 dark:border-amber-500 text-white dark:text-black"
                    :"bg-none border-emerald-700 dark:border-amber-100 text-emerald-700 dark:text-amber-100"
                }
                ${primary
                    ?"shadow-emerald-700 dark:shadow-amber-800 active:translate-y-[3px]"
                    :"shadow-none"}
                shadow-[0_3px_0_0] active:shadow-none transition duration-100
                ${primary
                    ?"hover:bg-emerald-500 hover:border-emerald-500 hover:dark:bg-amber-600 hover:dark:border-amber-600"
                    :"hover:bg-emerald-200 hover:dark:bg-taupe-700/50"}
                `}
            >
                {children}
            </a>
        )
    }
}
