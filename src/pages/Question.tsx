import { PageContainer, InnerContainer } from "../components/PageContainer";
import { Button, ButtonGroup, BackButton } from "../components/Button";
import { H1, H2, Para, Small } from "../components/Text";
import type { Page, playerData, questionData } from "../App";
import { useState, } from "react";

type PageProps = {
    currentPlayerName: string;
    currentPlayerIndex: number;
    isImpostor: boolean;
    playerList: playerData[];
    questions: questionData;
    goToNextPlayer: () => void;
    goToPageLowLevel: (string:Page) => void;
}

export default function QuestionPage({currentPlayerName, currentPlayerIndex, isImpostor, goToNextPlayer, goToPageLowLevel, playerList, questions}:PageProps) {
    
    const [cardHidden, setCardHidden] = useState(true)

    // use this because i can't "call setState during render"
    const toggleCardHidden = () => {
        setCardHidden(!cardHidden);
    }
    const hideCard = () => {
        setCardHidden(true);
    }
    
    return (
        <PageContainer>
            <InnerContainer>
                <BackButton quit onClickFunction={() => goToPageLowLevel("Home")}/>
                <div
                    className="flex flex-col p-4 my-6 h-full max-h-120 items-center justify-center rounded-2xl border-2 border-rose-500 dark:border-yellow-500 bg-neutral-50 dark:bg-taupe-800"
                    >
                    {cardHidden
                    ?<div
                        className="flex flex-col justify-center items-center h-full w-full"
                        onClick={toggleCardHidden}
                    >
                        <Small>Pass the phone to</Small>
                        <H1>{currentPlayerName}</H1>
                        <Para noPadding>Tap to Reveal</Para>
                    </div>
                    :<div className="h-full flex flex-col justify-around items-center">
                        <div className="flex flex-col items-center text-center max-w-4/5">
                            <Small>Your question is:</Small>
                            <H2>{`${isImpostor?questions.imp:questions.real}`}</H2>
                        </div>
                        <input
                            type="text" placeholder="enter your answer here" autoFocus required
                            className="h-1/3 text-lg text-center align-center border rounded-xl border-rose-300 dark:border-yellow-600 text-rose-900 dark:text-yellow-100"
                        >
                        </input>
                    </div>}
                </div>
            </InnerContainer>
            <ButtonGroup>
                <Button
                    primary
                    label="Done answering?"
                    icon={(currentPlayerIndex === playerList.length - 1) ? null : <><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></>}
                    onClickFunction={() => {
                        goToNextPlayer();
                        hideCard();
                    }}
                >
                    {(currentPlayerIndex === playerList.length - 1) ? "Let the chaos begin!" : "Next Player"}
                </Button>
            </ButtonGroup>
        </PageContainer>
    )
}
