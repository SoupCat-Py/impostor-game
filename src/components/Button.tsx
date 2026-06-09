import type { ReactNode } from "react";
import { Small } from "./Text"

type buttonProps = {
  label?: string;
  children: ReactNode;
  primary?: boolean;
  icon?: ReactNode;
  isDisabled?: boolean;
  onClickFunction?: () => void;
}

export default function Button({label, children, primary = false, icon, isDisabled=false, onClickFunction}: buttonProps) {
    return (
      <div className="flex flex-col justify-center items-center gap-1">
        <Small>
            {label}
        </Small>
        <button 
            onClick={onClickFunction}
            disabled={isDisabled}
            className={`
                flex justify-center items-center py-2 gap-1 w-full
                rounded-full font-bold
                focus-visible:outline-3 outline-offset-4 outline-emerald-800 dark:outline-amber-200
                cursor-pointer select-none
                transition duration-75
                ${primary
                    ? "bg-emerald-500 disabled:bg-neutral-400 dark:bg-amber-500 dark:disabled:bg-neutral-500"
                    : "bg-emerald-50 disabled:bg-neutral-300 dark:bg-taupe-800 disabled:dark:bg-neutral-700"
                }
                ${primary
                    ? "text-white dark:text-black"
                    : "text-emerald-800 disabled:text-neutral-500 dark:text-amber-500 disabled:dark:text-neutral-400"
                }
                ${primary
                    ? "shadow-emerald-800 disabled:shadow-neutral-700 dark:shadow-amber-700 disabled:dark:shadow-neutral-600 shadow-[0_3px_0_0] active:enabled:shadow-none active:enabled:translate-y-[3px]"
                    : "shadow-none active:bg-emerald-50 dark:active:bg-taupe-800"}
                ${primary
                    ? "hover:enabled:bg-emerald-600 hover:enabled:dark:bg-amber-600"
                    : "hover:enabled:bg-olive-300 hover:enabled:dark:bg-taupe-700"}
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
