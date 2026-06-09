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
                focus-visible:outline-3 outline-offset-4 outline-rose-800 dark:outline-yellow-200
                cursor-pointer select-none
                transition duration-75
                ${primary
                    ? "bg-rose-500 disabled:bg-neutral-400 dark:bg-yellow-500 dark:disabled:bg-neutral-500"
                    : "bg-rose-50 disabled:bg-neutral-300 dark:bg-taupe-800 disabled:dark:bg-neutral-700"
                }
                ${primary
                    ? "text-white dark:text-black"
                    : "text-rose-800 disabled:text-neutral-500 dark:text-yellow-500 disabled:dark:text-neutral-400"
                }
                ${primary
                    ? "shadow-rose-800 disabled:shadow-neutral-700 dark:shadow-yellow-700 disabled:dark:shadow-neutral-600 shadow-[0_3px_0_0] active:enabled:shadow-none active:enabled:translate-y-[3px]"
                    : "shadow-none"}
                ${primary
                    ? "hover:enabled:bg-rose-600 hover:enabled:dark:bg-yellow-600"
                    : "hover:enabled:bg-rose-200 hover:enabled:dark:bg-taupe-700"}
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
