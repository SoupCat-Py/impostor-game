import PageContainer from "../components/PageContainer.tsx";
import { Small,H1 } from "../components/Text.tsx"
import { ButtonGroup, Button } from "../components/Button.tsx"
import type { Page } from "../App.tsx"
import type { ReactNode } from "react";

type PageProps = {
	goToPageLowLevel: (newPage:Page) => void;
	callIncrementImpostorCount: (direction:string) => void;
	impostorCount: number;
	maxImpostorCount: number;
}

function IncrementIcon({icon}:{icon:ReactNode}) {
	return (
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
			     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
			>
				{icon}
			</svg>
	)
}

export default function SelectImpostorsPage({goToPageLowLevel, callIncrementImpostorCount, impostorCount, maxImpostorCount}: PageProps) {
	return (
			<PageContainer>

				{/*
				TODO:
				[x] add disabled states for +/- buttons
				[x] make increment function in App.tsx
				[x] pass function into here and make buttons call it
				[x] make <span> show the impostor count
				[] figure out the little graphic above
				[] make the "surprise us" button
				*/}

				<div className={"flex flex-col items-center"}>
					<Small>Step 2:</Small>
					<H1>Choose the amount of impostors</H1>
					<div className={"flex flex-row gap-1"}>
						<button
								disabled={impostorCount === 1}
								className={"px-8 rounded-l-2xl rounded-r-md text-4xl text-rose-900 dark:text-yellow-100 bg-neutral-50 enabled:hover:bg-neutral-100 dark:bg-taupe-800 enabled:dark:hover:bg-taupe-700 disabled:bg-neutral-200 disabled:dark:bg-neutral-700 enabled:cursor-pointer"}
								onClick={() => callIncrementImpostorCount("decrease")}
						>
							<IncrementIcon icon={<path d="M5 12l14 0" />}/>
						</button>
						<div className={"flex justify-center items-center px-8 py-4 w-20 rounded-md text-4xl select-none text-rose-900 dark:text-yellow-100 bg-neutral-50 dark:bg-taupe-800"}>
							<span>{impostorCount}</span>
						</div>
						<button
								disabled={impostorCount === maxImpostorCount}
								className={"px-8 rounded-r-2xl rounded-l-md text-4xl text-rose-900 dark:text-yellow-100 bg-neutral-50 enabled:hover:bg-neutral-100 dark:bg-taupe-800 enabled:dark:hover:bg-taupe-700 disabled:bg-neutral-200 disabled:dark:bg-neutral-700 enabled:cursor-pointer"}
								onClick={() => callIncrementImpostorCount("increase")}
						>
							<IncrementIcon icon={<><path d="M12 5l0 14" /><path d="M5 12l14 0" /></>}/>
						</button>
				</div>
			</div>
			
			<ButtonGroup>
				<Button
					primary
					label={"Ready?"}
					onClickFunction={() => alert(impostorCount)}
				>
					Start the Game!
				</Button>
				<Button
					onClickFunction={() => goToPageLowLevel("AddPlayers")}
					icon={<><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></>}
				>
					Go Back
				</Button>
			</ButtonGroup>
			
		</PageContainer>
	)
}
