import { useState } from "react";
import random from "random";
import questions from "./questions.json"
import HomePage from "./pages/Home";
import InstructionsPage from "./pages/HowToPlay";
import AddPlayersPage from "./pages/AddPlayers.tsx";
import SelectImpostorsPage from "./pages/SelectImpostors.tsx";
import QuestionPage from "./pages/Question.tsx";
import ResultsPage from "./pages/Results.tsx";
import RevealPage from "./pages/Reveal.tsx";

// this is used to define the only permissible values for the current page.
// this is what TypeScript is nice for - using anything else would throw an error.
export type Page = "Home" | "HowToPlay" | "AddPlayers" | "SelectImpostors" | "Question" | "Results" | "Reveal"

// all the data types being stored in here
export interface playerData {
	name: string;
	isImpostor: boolean;
	answer: string;
}
export interface questionData {
  real: string;
  imp: string;
  tip?: string;
}


export default function App() {

  // goToPageTopLevel is the function SOLELY for App.tsx.
  // When going to a page from inside a page component,
  // use the goToPageLowLevel that is passed down into
  // each component.
  const [currentPage, goToPageTopLevel] = useState<Page>("Home");

  // this is to pass the function down to children.
  // It's saying that the LowLevel function has the same props and
  // does the same thing as the TopLevel one - it's just a wrapper.
  const goToPageLowLevel = function(newPage: Page)  {
    setTimeout(() => {
      goToPageTopLevel(newPage);
    }, 100);
  };
  // i also gave it a little delay so that you can see the button animation


  // this is the React state where players will be handled
  // all data must follow the PlayerData scheme ↓
  const [playerList, setPlayers] = useState<playerData[]>([]);
  // 					this is the initial value - empty ↑

  // this is the function to add players that will be passed down into AddPlayersPage
  // it's the one that gets passed down.
  const callAddPlayer = () => {
  	setPlayers(prev => [...prev, {name:"", isImpostor:false, answer:""}]);
  	// prev is all the existing data - function just adds on top
  	// all their data is empty/default values too
  }

  // This is the thing that updates player names based on what the user types.
  // This function controls the input instead of the browser, so it's required
  // to actually use the input.
  const callUpdatePlayerName = (index:number, name:string) => {
    // is this the index we want to update? if yes, add overwrite the name - if no, return as-is
  	setPlayers(prev => prev.map((player, editingIndex) => editingIndex === index ? {...player, name} : player));
  	// take previous list and map the new stuff onto it
  }
  // basically, the function goes through every player in the list (prev) and for the one at
  // the right index, overwrite only its name.

  const callRemovePlayer = (index:number) => {
  	// keep all the players except the one that matches the target index
  	setPlayers(prev => prev.filter((_,targetIndex) => index !== targetIndex));
  	// don't ask why you need the underscore...
  }


  // time to decide how many impostors there will be - starting at 1 as default
  const [impostorCount, setImpostorCount] = useState(1);

  const callIncrementImpostorCount = (direction:string) => {
    if (direction === "increase" && impostorCount < playerList.length) {
      setImpostorCount(prev => prev + 1);
    }
    else if (direction === "decrease" && impostorCount > 0) {
      setImpostorCount(prev => prev - 1);
    }
    // this logic lowkey kind of sucks but it gets the job done
  }

  // returns a random number between zero and TOTAL player count
  // everybody could be the impostor... >:)
  const callSetRandomImpostorCount = () => {
    setImpostorCount(random.int(0,playerList.length));
  }


  // chooses impostors at random from a copy of playerList
  function callChooseImpostors () {
    // first make a copy of playerList and shuffle it
    const shuffledPlayerList = [...random.shuffle(playerList)];

    // make an array of impostors from the first `count` in tempPlayerList
    // note that .slice takes two args (limits) - only one goes from that to the end
    // also the second arg is EXCLUSIVE
    const impostorArray = shuffledPlayerList.slice(0, impostorCount)

    // get just the names of each of the impostors
    // remember that the arrays up to here are full of objects
    const impostorNames = impostorArray.map(player => player.name)

    // now update the og playerList by giving isImpostor to the impostors
    setPlayers(playerList.map(player => ({
    ...player, // leave original data
    isImpostor: impostorNames.includes(player.name) // set isImpostor to whether the name is in impostorNames
    })));
  }

  // state for questions
  const [QuestionPair, setQuestionPair] = useState({real:"",imp:""});

  // choose a random pair of questions
  function callChooseQuestions() {
    const randomQuestionPair = random.choice(questions);
    // have to use `if` since TS doesn't know if it will return anything or not
    if (randomQuestionPair) {
      setQuestionPair({real:randomQuestionPair?.real, imp:randomQuestionPair?.imp})
    }
    else {
      alert("Questions not found. Idk how to help you...")
    }
  }


  // using this to have one page that goes to each player instead of one page for everyone
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // this part does the actual navigating
  const nextAndSave = (answer:string) => {
    // first make a temporary array that saves instantly so that React state can't slow this shit down.
    // apparently it's async so it can't save by the time i go to the next page
    const tempSavedList = playerList.map((player, idx) => idx === currentPlayerIndex ? {...player, answer} : player);
    // now that we have a solidly saved array, pass that into the player objects
    setPlayers(tempSavedList);

    if (currentPlayerIndex === playerList.length - 1) {
      goToPageTopLevel("Results");
    }
    else {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    }
  }

  // this will get called at the start of the game for when you quit and go back
  const callFirstPlayer = () => {
    setCurrentPlayerIndex(0);
  }


  // render each page IF currentPage matches it and then pass down the
  // goToPageLowLevel wrapper into each child
  return (
    <main className="flex flex-col justify-center">
      {/*also passing down functions to each page*/}
      {currentPage === "Home" && <HomePage goToPageLowLevel={goToPageLowLevel}/>}
      {currentPage === "HowToPlay" && <InstructionsPage goToPageLowLevel={goToPageLowLevel}/>}
      {currentPage === "AddPlayers" && <AddPlayersPage
        goToPageLowLevel={goToPageLowLevel}
        playerList={playerList}
        callAddPlayer={callAddPlayer}
        callUpdatePlayerName={callUpdatePlayerName}
        callRemovePlayer={callRemovePlayer}
      />}
	    {currentPage === "SelectImpostors" && <SelectImpostorsPage
        goToPageLowLevel={goToPageLowLevel}
        callIncrementImpostorCount={callIncrementImpostorCount}
        impostorCount={impostorCount}
        maxImpostorCount={playerList.length - 1}
        callSetRandomImpostorCount={callSetRandomImpostorCount}
        callChooseImpostors={callChooseImpostors}
        callFirstPlayer={callFirstPlayer}
        callChooseQuestions={callChooseQuestions}
        faceSize={Math.max(30, 100 - playerList.length * 4)}
      />}
      {currentPage === "Question" && <QuestionPage
        goToPageLowLevel={goToPageLowLevel}
        nextAndSave={nextAndSave}
        // you gotta put .name here cause playerList[0] will return an OBJECT
        // actually DONT HARDCODE THIS because it's a state and will change
        currentPlayerName={playerList[currentPlayerIndex].name}
        isImpostor={playerList[currentPlayerIndex].isImpostor}
        playerList={playerList}
        currentPlayerIndex={currentPlayerIndex}
        questions={QuestionPair}
      />}
      {currentPage === "Results" && <ResultsPage
        goToPageLowLevel={goToPageLowLevel}
        allPlayerData={playerList}
        impostorCount={impostorCount}
        realQuestion={QuestionPair.real}
      />}
      {currentPage === "Reveal" && <RevealPage
        goToPageLowLevel={goToPageLowLevel}
        allPlayerData={playerList}
        impostorCount={impostorCount}
        callChooseImpostors={callChooseImpostors}
        callChooseQuestions={callChooseQuestions}
        callFirstPlayer={callFirstPlayer}
        impostorQuestion={QuestionPair.imp}
      />}
    </main>
  )
}
