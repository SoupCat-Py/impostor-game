import { PageContainer, InnerContainer } from "../components/PageContainer.tsx";
import { Small,H1 } from "../components/Text.tsx"
import {ButtonGroup, Button, BackButton} from "../components/Button.tsx"
import { greenFaces, redFaces, hiddenFace } from "../components/Faces.tsx";
import random from "random";
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

// this is for the icons on the increment buttons.
// I hate repeating SVGs and they're really messy, so I use this instead.
function IncrementIcon({icon}:{icon:ReactNode}) {
	return (
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
			     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
			>
				{icon}
			</svg>
	)
}

export default function SelectImpostorsPage({goToPageLowLevel, callIncrementImpostorCount, impostorCount, maxImpostorCount, callSetRandomImpostorCount}: PageProps) {

	// this is to hide the real impostor count when the user clicks "surprise us"
	const [countHidden, setCountHidden] = useState<boolean>(false);

	return (
			<PageContainer>

				{/* THE MEGA DIV (back button + main content) */}
				<InnerContainer>

					<BackButton onClickFunction={() => goToPageLowLevel("AddPlayers")}/>

					{/* this div here is the big container with the main content - buttons below */}
					<div className={"flex flex-col items-center gap-8"}>

						{/* header */}
						<div className={"flex flex-col items-center"}>
							<Small>Step 2:</Small>
							<H1>Choose the amount of impostors</H1>
						</div>

						{/* faces */}
						<div className={"flex flex-row justify-center flex-wrap gap-2 "}>
							{/* so this part's a bit weird. im making an array from just a number and then
							making all of them false except the amount of impostors*/}
							{Array.from({length:maxImpostorCount+1}, (_,i) => i < impostorCount).map((isImpostor) => (
									<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
											 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
											 className={countHidden?"text-rose-900 dark:text-yellow-100":isImpostor?"text-red-500":"text-green-500"}
									>
										{!countHidden?random.choice(isImpostor?redFaces:greenFaces):hiddenFace}
									</svg>
							))}
						</div>

						{/* controls */}
						<div className={"flex flex-col items-center w-4/5 gap-4"}>
							{/* incrementing */}
							<div className={"flex flex-row gap-1 w-full"}>
								<button
										disabled={impostorCount === 1 || countHidden}
										className={"flex flex-row items-center justify-center min-w-20 rounded-l-3xl rounded-r-md text-4xl text-rose-900 dark:text-yellow-100 disabled:text-neutral-300 disabled:dark:text-neutral-500 bg-neutral-50 enabled:hover:bg-neutral-100 dark:bg-taupe-800 enabled:dark:hover:bg-taupe-700 enabled:cursor-pointer"}
										onClick={() => callIncrementImpostorCount("decrease")}
								>
									<IncrementIcon icon={<path d="M5 12l14 0" />}/>
								</button>
								<div className={"flex justify-center items-center px-8 py-4 w-full rounded-md text-4xl select-none text-rose-900 dark:text-yellow-100 bg-neutral-50 dark:bg-taupe-800"}>
									<span>{!countHidden?impostorCount:"?"}</span>
								</div>
								<button
										disabled={impostorCount === maxImpostorCount || countHidden}
										className={"flex flex-row items-center justify-center min-w-20 rounded-r-3xl rounded-l-md text-4xl text-rose-900 dark:text-yellow-100 disabled:text-neutral-300 disabled:dark:text-neutral-500 bg-neutral-50 enabled:hover:bg-neutral-100 dark:bg-taupe-800 enabled:dark:hover:bg-taupe-700 enabled:cursor-pointer"}
										onClick={() => callIncrementImpostorCount("increase")}
								>
									<IncrementIcon icon={<><path d="M12 5l0 14" /><path d="M5 12l14 0" /></>}/>
								</button>
							</div>

							{/* surprise */}
							<div className={"w-full"}>
								<Button
									onClickFunction={() => {
										setCountHidden(!countHidden);
										callSetRandomImpostorCount();
									}}
								>
									{countHidden?"Nevermind":"Surprise us!"}
								</Button>
							</div>
						</div>
					</div>
				</InnerContainer>

			{/* bottom buttons */}
			<ButtonGroup>
				<Button
					primary
					label={"Ready?"}
					onClickFunction={() => alert(impostorCount)}
					icon={<><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></>}
				>
					Start the Game!
				</Button>
			</ButtonGroup>
			
		</PageContainer>
	)
}
