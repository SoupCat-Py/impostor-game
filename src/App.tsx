import { useState } from "react"
import HomePage from "./pages/Home"
import InstructionsPage from "./pages/HowToPlay"

export type Page = "Home" | "HowToPlay"

export default function App() {
    const [currentPage, goToPageTopLevel] = useState<Page>("Home");
    
    // goToPageTopLevel is the function SOLELY for App.tsx.
    // when going to a page from inside a page component,
    // use the goToPageLowLevel that is passed down into
    // each component.

    // this is to passs the function down to children.
    // it's saying that the LowLevel function has the same props
    // and does the same thing as the TopLevel one - it's just a wrapper.
    const goToPageLowLevel = (newPage: Page) => goToPageTopLevel(newPage);

    // render each page IF currentPage matches it and then pass down the
    // goToPageLowLevel wrapper into each child
    return (
        <>
        {currentPage === "Home" && <HomePage goToPageLowLevel={goToPageLowLevel}/>}
        {currentPage === "HowToPlay" && <InstructionsPage goToPageLowLevel={goToPageLowLevel}/>}
        </>
    )
}