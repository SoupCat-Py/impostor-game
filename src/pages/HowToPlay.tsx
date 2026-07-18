import type { Page } from "../App"
import { PageContainer } from "../components/PageContainer"
import { H1, H2, Para } from "../components/Text"
import {BackButton, Button, ButtonGroup} from "../components/Button"
import type { ReactNode } from "react"

type PageProps = {
  goToPageLowLevel: (newPage: Page) => void;
}


function Card({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col p-6 gap-1 bg-neutral-50 dark:bg-taupe-800 rounded-2xl">
      {children}
    </div>
  )
}

function Link({url, children}: {url: string, children: ReactNode}) {
  return (
      <a
          target="_blank"
          href={url}
          className="text-rose-700 dark:text-yellow-200 underline text-nowrap"
      >
        {children}
      </a>
  )
}


export default function InstructionsPage({goToPageLowLevel}:PageProps) {

  return (
    <PageContainer>
        <BackButton onClickFunction={() => goToPageLowLevel("Home")}/>
        <div className="flex flex-col gap-6">
          <Card>
            <H1>Note:</H1>
            <Para>I do not save or collect <strong>any</strong> data. Everything will reset if you reload the page.</Para>
            <Para>If you are using an android device, do not use the system back button.</Para>
          </Card>
          <Card>
            <H1>General Info</H1>
            <H2>About</H2>
            <Para>This is a game of answering random questions and lying to your friends. At the start of every game, everyone except the impostor will receive the same question to answer. The impostor will receive a different question that may end up with a similar answer to everyone else. It is your task to either work together and find the impostor, or to hide your identity and blend into the crowd.</Para>
            <H2>Setup</H2>
            <Para>I recomment playing this game with at least 4 players. If you have more than around 6, it could be more fun to have multiple impostors.</Para>
            <Para>In the setup phase, you will add the names of all the players in the order that they will take their turns. Then, you can choose how many impostors there will be.</Para>
          </Card>
          <Card>
            <H1>Gameplay</H1>
            <H2>Question Phase</H2>
            <Para>When you are given the phone, you will see a card with your name on it. Tap anywhere on the card to reveal your question. Then, you can enter your answer in the text field. Answers may vary from a single number to a full-on story, so anything is possible :)</Para>
            <H2>Accusal Phase</H2>
            <Para>Once everyone has taken their turn, all the answers are revealed and the discussion can begin. As a group, you must work together to discern who answered a different question. Once you think you're ready, tap the "reveal" button to show who the impostor was (or all of them if there were multiple).</Para>
          </Card>
          <Card>
            <H2 noPadding>Other Stuff:</H2>
            <Para>
              The concept of this game, as well as like all the questions, are from the&nbsp;
              <Link url={"https://www.youtube.com/@FullSquad"}>Full Squad</Link>
              &nbsp;YouTube channel.
            </Para>
            <Para>
              This site was made by&nbsp;
              <Link url={"https://github.com/SoupCat-Py"}>Soup</Link>. Please feel free to report bugs or suggest edits/improvements via GitHub issues :)
            </Para>
          </Card>
        </div>
      <ButtonGroup>
        <Button
          primary
          icon={<><path d="M7 4v16l13 -8l-13 -8" /></>}
          label="All ready to play?"
          onClickFunction={() => goToPageLowLevel("AddPlayers")}
        >
          Start Game
        </Button>
      </ButtonGroup>
    </PageContainer>
  )
}