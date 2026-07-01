import { useState } from "react"
import HomePage from "./pages/Home"
import InstructionsPage from "./pages/HowToPlay"
import AddPlayersPage from "./pages/AddPlayers.tsx";

// this is used to define the only permissible values for the current page.
// this is what TypeScript is nice for - using anything else would throw an error.
export type Page = "Home" | "HowToPlay" | "AddPlayers"

// all the data types being stored in here
export interface playerData {
	name: string;
	isImpostor: boolean;
	answer: boolean;
}
export interface gameData {
	playerList: PlayerData[];  // this means an array of player objects
	impostorCount: number;
	realQuestion: string;
	impostorQuestion: string;
	// I'm gonna make a huge JSON file full of questions later.
	// Might pull them from Full Squad (give them attribution)
	// as well as making my own 🤔
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
  const [playerList, setPlayers] = useState<PlayerData[]>([]);
  // 					this is the initial value - empty ↑

  // this is the function to add players that will be passed down into AddPlayersPage
  const addPlayer = () => {
  	setPlayers(prev => [...prev, {name:"", isImpostor:false, answer:""}]);
  	// prev is all the existing data - function just adds on top
  	// all their data is empty/default values too
  }

  // render each page IF currentPage matches it and then pass down the
  // goToPageLowLevel wrapper into each child
  return (
    <>
      {/*also passing down functions to each page*/}
      {currentPage === "Home" && <HomePage goToPageLowLevel={goToPageLowLevel}/>}
      {currentPage === "HowToPlay" && <InstructionsPage goToPageLowLevel={goToPageLowLevel}/>}
      {currentPage === "AddPlayers" && <AddPlayersPage goToPageLowLevel={goToPageLowLevel} playerList={playerList} addPlayers={addPlayer}/>}
    </>
  )
}
