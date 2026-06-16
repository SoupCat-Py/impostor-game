import type { Page } from "../App.tsx";
import PageContainer from "../components/PageContainer.tsx";
import { H1, Para, Small } from "../components/Text.tsx";
import { List, ListItem } from "../components/Lists.tsx";
import { ButtonGroup, Button } from "../components/Button.tsx";

interface PageProps {
  goToPageLowLevel: (newPage: Page) => void;
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
            <Small>X</Small>
            <Para>Player 1</Para>
          </ListItem>
          <ListItem row>
            <Small>X</Small>
            <Para>Player 2</Para>
          </ListItem>
          <ListItem row>
            <Small>X</Small>
            <Para>Player 3</Para>
          </ListItem>
          <ListItem row>
            <Small>X</Small>
            <Para>Player 4</Para>
          </ListItem>
          <ListItem>
            <Small>Dom</Small>
            <Para>Jonny's butt hair</Para>
          </ListItem>
        </List>
        <ButtonGroup>
          <Button icon={<><path d="M12 5l0 14" /><path d="M5 12l14 0" /></>}></Button>
        </ButtonGroup>
      </div>
      <ButtonGroup>
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
