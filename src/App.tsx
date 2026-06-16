import { useState } from "react"
import HomePage from "./pages/Home"
import InstructionsPage from "./pages/HowToPlay"
import AddPlayersPage from "./pages/AddPlayers.tsx";

export type Page = "Home" | "HowToPlay" | "AddPlayers"

export default function App() {
  const [currentPage, goToPageTopLevel] = useState<Page>("Home");

  // goToPageTopLevel is the function SOLELY for App.tsx.
  // when going to a page from inside a page component,
  // use the goToPageLowLevel that is passed down into
  // each component.

  // this is to pass the function down to children.
  // it's saying that the LowLevel function has the same props and
  // does the same thing as the TopLevel one - it's just a wrapper.
  const goToPageLowLevel = function(newPage: Page)  {
    setTimeout(() => {
      goToPageTopLevel(newPage);
    }, 100);
  };

  // render each page IF currentPage matches it and then pass down the
  // goToPageLowLevel wrapper into each child
  return (
    <>
      {currentPage === "Home" && <HomePage goToPageLowLevel={goToPageLowLevel}/>}
      {currentPage === "HowToPlay" && <InstructionsPage goToPageLowLevel={goToPageLowLevel}/>}
      {currentPage === "AddPlayers" && <AddPlayersPage goToPageLowLevel={goToPageLowLevel}/>}
    </>
  )
}
