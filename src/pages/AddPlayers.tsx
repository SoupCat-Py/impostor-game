import type { Page } from "../App.tsx";
import PageContainer from "../components/PageContainer.tsx";
import { H1, Para, Small } from "../components/Text.tsx";
import { List, ListItem } from "../components/Lists.tsx";
import { ButtonGroup, Button } from "../components/Button.tsx";

interface PageProps {
  goToPageLowLevel: (newPage: Page) => void;
}

function RemovePlayerButton() {
  return (
      <button
          className={"absolute left-0 top-0 bottom-0 py-0.5 px-4 cursor-pointer rounded-lg"}
          onClick={() => {alert("player removed")}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             className="h-4 w-full text-rose-800 dark:text-taupe-400">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 6l-12 12"/>
          <path d="M6 6l12 12"/>
        </svg>
      </button>
  )
}

export default function AddPlayersPage({goToPageLowLevel}: PageProps) {
  return (
      <PageContainer>
        <div className="flex flex-col gap-6">
          <div className={"flex flex-col justify-center items-center"}>
            <Small>Step 1:</Small>
            <H1>Add Players</H1>
          </div>
          <List>
            <ListItem row>
              <RemovePlayerButton/>
              <Para>Jonny</Para>
            </ListItem>
            <ListItem row>
              <RemovePlayerButton/>
              <Para>Kelton</Para>
            </ListItem>
            <ListItem row>
              <RemovePlayerButton/>
              <Para>Callum</Para>
            </ListItem>
            <ListItem row>
              <RemovePlayerButton/>
              <Para>Dom</Para>
            </ListItem>
          </List>
          <ButtonGroup>
            <Button icon={<><path d="M12 5l0 14" /><path d="M5 12l14 0" /></>}></Button>
          </ButtonGroup>
        </div>
        <ButtonGroup>
          <Button
            primary
            icon={<><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></>}
            label={"Everybody in?"}
          >
            Next
          </Button>
          <Button
            onClickFunction={() => goToPageLowLevel("Home")}
            icon={<><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></>}
          >
            Back to Home
          </Button>
        </ButtonGroup>
      </PageContainer>
  )
}
