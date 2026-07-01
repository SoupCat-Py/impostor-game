import { useState } from "react";
import HomePage from "./pages/Home";
import InstructionsPage from "./pages/HowToPlay";
import AddPlayersPage from "./pages/AddPlayers.tsx";
import SelectImpostorsPage from "./pages/SelectImpostors.tsx";

// this is used to define the only permissible values for the current page.
// this is what TypeScript is nice for - using anything else would throw an error.
export type Page = "Home" | "HowToPlay" | "AddPlayers" | "SelectImpostors"

// all the data types being stored in here
export interface playerData {
	name: string;
	isImpostor: boolean;
	answer: string;
}
//export interface gameData {
//	playerList: playerData[];  // this means an array of player objects
//	impostorCount: number;
//	realQuestion: string;
//	impostorQuestion: string;
	// I'm gonna make a huge JSON file full of questions later.
	// Might pull them from Full Squad (give them attribution)
	// as well as making my own 🤔
//}


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


  // render each page IF currentPage matches it and then pass down the
  // goToPageLowLevel wrapper into each child
  return (
    <main className="flex flex-row justify-center">
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
      />}
    </main>
  )
}
