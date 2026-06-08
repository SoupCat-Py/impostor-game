import type { ReactNode } from "react";
import { Small } from "./Text"

type buttonProps = {
  label?: string;
  children: ReactNode;
  primary?: boolean;
  icon?: ReactNode;
  onClickFunction?: () => void;
}

export default function Button({label, children, primary = false, icon, onClickFunction}: buttonProps) {
    return (
      <div className="flex flex-col justify-center items-center gap-1">
        <Small>
            {label}
        </Small>
        <button 
        onClick={onClickFunction}
        className={`
            flex justify-center items-center py-2 gap-1 w-full
            rounded-full font-bold border-3 
            cursor-pointer select-none
            ${primary
            ? "bg-emerald-400 border-emerald-400 dark:bg-amber-500 dark:border-amber-500 text-white dark:text-black"
            : "bg-none border-emerald-700 dark:border-amber-100 text-emerald-700 dark:text-amber-100"
            }
            ${primary
            ? "shadow-emerald-700 dark:shadow-amber-800 active:translate-y-[3px]"
            : "shadow-none"}
            shadow-[0_3px_0_0] active:shadow-none transition duration-75
            ${primary
                ? "hover:bg-emerald-500 hover:border-emerald-500 hover:dark:bg-amber-600 hover:dark:border-amber-600"
                : "hover:bg-emerald-200/50 hover:dark:bg-taupe-700/50"}
            `}
        >
            {icon
                ?<svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="none"stroke="currentColor" stroke-width={primary?"3":"2"} stroke-linecap="round" stroke-linejoin="round"
                    className="h-5"
                >
                    {icon}
                </svg>
                :null
            }
            {children}
        </button>
      </div>
    )
}
