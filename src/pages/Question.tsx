import { PageContainer, InnerContainer } from "../components/PageContainer";
import { Button, ButtonGroup, BackButton } from "../components/Button";
import { H1, H2, Para, Small } from "../components/Text";
import type { Page, playerData, questionData } from "../App";
import { useState, useRef } from "react";

type PageProps = {
    currentPlayerName: string;
    currentPlayerIndex: number;
    isImpostor: boolean;
    playerList: playerData[];
    questions: questionData;
    nextAndSave: (answer:string) => void;
    goToPageLowLevel: (string:Page) => void;
}

export default function QuestionPage({currentPlayerName, currentPlayerIndex, isImpostor, nextAndSave, goToPageLowLevel, playerList, questions}:PageProps) {
    
    const [cardHidden, setCardHidden] = useState(true)

    // use this because i can't "call setState during render"
    const toggleCardHidden = () => {
        setCardHidden(!cardHidden);
    }
    const hideCard = () => {
        setCardHidden(true);
    }

    // this is so that the saving function can reference the input
    const answerRef = useRef<HTMLInputElement>(null);

    // this is to track whether there's an input and if the button should be disabled
    const [isEmpty, setEmpty] = useState(true);
    
    return (
        // give the uppermost container the `fixed` property so that the question card
        // has a fixed space to fill up.
        <PageContainer fixed>
            <InnerContainer>
                <BackButton quit onClickFunction={() => goToPageLowLevel("Home")}/>
                <div className="flex flex-col p-4 my-6 h-full max-h-120 items-center justify-center rounded-2xl border-2 border-rose-500 dark:border-yellow-500 bg-neutral-50 dark:bg-taupe-800">
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
                            {(questions.tip)?<Para>{questions.tip}</Para>:null}
                        </div>
                        <input
                            type="text"
                            placeholder="enter your answer here"
                            required
                            ref={answerRef}
                            // if the field is empty, set isEmpty to true
                            onChange={e => setEmpty(e.target.value === "")}
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
                    isDisabled={isEmpty}
                    icon={isEmpty? <><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></> : (currentPlayerIndex === playerList.length - 1) ? null : <><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></>}
                    onClickFunction={() => {
                        hideCard();
                        nextAndSave(answerRef.current?.value ?? "[no answer]");
                        setEmpty(true);
                        console.log(playerList);
                    }}
                >
                    {isEmpty? "Write something first" : (currentPlayerIndex === playerList.length - 1) ? "Let the chaos begin!" : "Next Player"}
                </Button>
            </ButtonGroup>
        </PageContainer>
    )
}
