import { type ReactNode, useState } from "react";
import { H1, Para, Small } from "./Text";

type buttonProps = {
  label?: string;
  children?: ReactNode;
  primary?: boolean;
  icon?: ReactNode;
  isDisabled?: boolean;
  onClickFunction?: () => void;
  quit?: boolean;
  horizontal?: boolean;
}

export function Button({label, children, primary = false, icon, isDisabled=false, onClickFunction}: buttonProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Small>
          {label}
      </Small>
      <button
        onClick={onClickFunction}
        disabled={isDisabled}
        className={`
          flex justify-center items-center py-3 gap-1 w-full
          rounded-full font-bold
          cursor-pointer select-none
          transition duration-75
          ${primary
            ? "bg-rose-500 disabled:bg-neutral-400 dark:bg-yellow-500 dark:disabled:bg-neutral-500"
            : "bg-neutral-50 disabled:bg-neutral-300 dark:bg-taupe-800 disabled:dark:bg-neutral-700"
          }
          ${primary
            ? "text-white dark:text-black"
            : "text-rose-800 disabled:text-neutral-500 dark:text-yellow-500 disabled:dark:text-neutral-400"
          }
          ${primary
            ? "shadow-rose-800 disabled:shadow-neutral-700 dark:shadow-yellow-700 disabled:dark:shadow-neutral-600 shadow-[0_3px_0_0] active:enabled:shadow-none active:enabled:translate-y-[3px]"
            : "shadow-none"}
          ${primary
            ? "hover:enabled:bg-rose-600 hover:enabled:dark:bg-yellow-600 active:enabled:bg-rose-600 active:enabled:dark:bg-yellow-600"
            : "hover:enabled:bg-rose-200 hover:enabled:dark:bg-taupe-700 active:enabled:bg-rose-200 active:enabled:dark:bg-taupe-700"}
        `}
      >
        {icon
          ?<svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="none"stroke="currentColor" strokeWidth={primary?"3":"2"} strokeLinecap="round" strokeLinejoin="round"
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

export function ButtonGroup({children, horizontal=false}:buttonProps) {
  return (
      <div className={`flex ${horizontal ? "flex-row" : "flex-col"} gap-2 pb-4 ${horizontal ? "p-2" : null}`}>
          {children}
      </div>
  )
}

export function BackButton({quit, onClickFunction}:buttonProps) {

  // setting up a react state instead of using the native popovers :(
  const [confirmShown, setConfirmShown] = useState<boolean>(false)

  return (<>
    <button
        className={"flex flex-row gap-1 items-center justify-start cursor-pointer rounded-sm w-max px-1"}
        onClick={quit ? () => setConfirmShown(true) : onClickFunction}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           className="text-neutral-500 dark:text-taupe-400">
        <path d="M9 14l-4 -4l4 -4"/>
        <path d="M5 10h11a4 4 0 1 1 0 8h-1"/>
      </svg>
      <Small>{quit ? "quit" : "back"}</Small>
    </button>

    <section className={`${confirmShown ? "flex" : "hidden"} fixed inset-0 items-center justify-center bg-neutral-400/70 dark:bg-taupe-900/80`}>
      <div className={"flex flex-col w-max mx-2 rounded-2xl border-2 bg-rose-100 border-rose-900 dark:bg-taupe-900 dark:border-taupe-700 p-6 pb-4 gap-4"}>
        <H1>Are you sure?</H1>
        <Para>Quitting now will end the round, but player names will be kept.</Para>
        <ButtonGroup horizontal={true}>
          <div className={"flex-1/2"}>
            <Button
                onClickFunction={() => setConfirmShown(false)}
            >
              Nevermind
            </Button>
          </div>
          <div className={"flex-1/2"}>
            <Button
                primary
                onClickFunction={onClickFunction}  // don't have to reset the state since it goes to a whole other page
                icon={<><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></>}
            >
              Yes, quit
            </Button>
          </div>
        </ButtonGroup>
      </div>
    </section>
  </>)
}
