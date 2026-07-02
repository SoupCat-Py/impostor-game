import PageContainer from "../components/PageContainer.tsx";
import { Small,H1 } from "../components/Text.tsx"
import { ButtonGroup, Button } from "../components/Button.tsx"
import { greenFaces, redFaces } from "../components/Faces.tsx";
import type { Page } from "../App.tsx"
import type { ReactNode } from "react";
import { useState } from "react";

type PageProps = {
	goToPageLowLevel: (newPage:Page) => void;
	callIncrementImpostorCount: (direction:string) => void;
	impostorCount: number;
	maxImpostorCount: number;
	callSetRandomImpostorCount: () => void;
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

// use this to pick a random face
// it's outside the big function so that it doesn't call on every render
const getRandomItem = (array:ReactNode[]) => array[Math.floor(Math.random() * array.length)];


export default function SelectImpostorsPage({goToPageLowLevel, callIncrementImpostorCount, impostorCount, maxImpostorCount, callSetRandomImpostorCount}: PageProps) {

	// this is to hide the real impostor count when the user clicks "surprise us"
	const [countHidden, setCountHidden] = useState<boolean>(false);

	return (
			<PageContainer>

				{/*
				TODO:
				[x] add disabled states for +/- buttons
				[x] make increment function in App.tsx
				[x] pass function into here and make buttons call it
				[x] make <span> show the impostor count
				[] figure out the little graphic above
				[x] make the "surprise us" button
				*/}

				<div className={"flex flex-col items-center gap-8"}>
					<div className={"flex flex-col items-center"}>
						<Small>Step 2:</Small>
						<H1>Choose the amount of impostors</H1>
					</div>
					<div className={"flex flex-row justify-center flex-wrap gap-2"}>
						{/* so this part's a bit weird. im making an array from just a number and then
						making all of them false except the amount of impostors*/}
						{Array.from({length:maxImpostorCount+1}, (_,i) => i < impostorCount).map((isImpostor,index) => (
								<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
								     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
										 className={isImpostor?"text-red-500":"text-green-500"}
								>
									{getRandomItem(isImpostor?redFaces:greenFaces)}
								</svg>
						))}
					</div>
					<div className={"flex flex-col items-center w-3/4 gap-4"}>
						<div className={"flex flex-row gap-1 w-full"}>
							<button
									disabled={impostorCount === 1 || countHidden}
									className={"px-8 rounded-l-3xl rounded-r-md text-4xl text-rose-900 dark:text-yellow-100 bg-neutral-50 enabled:hover:bg-neutral-100 dark:bg-taupe-800 enabled:dark:hover:bg-taupe-700 disabled:bg-neutral-200 disabled:dark:bg-neutral-700 enabled:cursor-pointer"}
									onClick={() => callIncrementImpostorCount("decrease")}
							>
								<IncrementIcon icon={<path d="M5 12l14 0" />}/>
							</button>
							<div className={"flex justify-center items-center px-8 py-4 w-full rounded-md text-4xl select-none text-rose-900 dark:text-yellow-100 bg-neutral-50 dark:bg-taupe-800"}>
								<span>{!countHidden?impostorCount:"?"}</span>
							</div>
							<button
									disabled={impostorCount === maxImpostorCount || countHidden}
									className={"px-8 rounded-r-3xl rounded-l-md text-4xl text-rose-900 dark:text-yellow-100 bg-neutral-50 enabled:hover:bg-neutral-100 dark:bg-taupe-800 enabled:dark:hover:bg-taupe-700 disabled:bg-neutral-200 disabled:dark:bg-neutral-700 enabled:cursor-pointer"}
									onClick={() => callIncrementImpostorCount("increase")}
							>
								<IncrementIcon icon={<><path d="M12 5l0 14" /><path d="M5 12l14 0" /></>}/>
							</button>
						</div>
						<div className={"w-full"}>
							<Button
								icon={<><path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" /><path d="M12 8l0 13" /><path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" /></>}
								onClickFunction={() => {
									setCountHidden(true);
									callSetRandomImpostorCount();
									// TODO: add the start game function
								}}
							>
									Surprise Us!
							</Button>
						</div>
					</div>
				</div>
			
			<ButtonGroup>
				<Button
					primary
					label={"Ready?"}
					onClickFunction={() => alert(impostorCount)}
					icon={<><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></>}
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
