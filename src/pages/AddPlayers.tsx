import type { Page, playerData } from "../App.tsx";
import PageContainer from "../components/PageContainer.tsx";
import { H1, Small } from "../components/Text.tsx";
import { List, ListItem } from "../components/Lists.tsx";
import { ButtonGroup, Button } from "../components/Button.tsx";

type PageProps = {
  goToPageLowLevel: (newPage: Page) => void;  // function that takes newPage as Page type
  playerList: playerData[];
  callAddPlayer: () => void;  // a function with no params
  callUpdatePlayerName: (index: number, name: string) => void;
  callRemovePlayer: (index: number) => void;
}

// TODO:
// [] disable "next" button if player count is zero

function RemovePlayerButton({ onRemove }: {onRemove: () => void;}) {
  return (
      <button
          className={"absolute left-0 top-0 bottom-0 py-0.5 px-4 cursor-pointer rounded-lg"}
          onClick={onRemove}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="h-4 w-full text-rose-800 dark:text-taupe-400">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M18 6l-12 12"/>
          <path d="M6 6l12 12"/>
        </svg>
      </button>
  )
}

export default function AddPlayersPage({ goToPageLowLevel, playerList, callAddPlayer, callUpdatePlayerName, callRemovePlayer }: PageProps) {
  return (
      <PageContainer>
      
        <div className="flex flex-col gap-6">
          <div className={"flex flex-col justify-center items-center"}>
            <Small>Step 1:</Small>
            <H1>Add Players</H1>
          </div>
          <List>
            {playerList.map((player,index) => (
            	<ListItem row key={index}>
            	  <RemovePlayerButton onRemove={() => callRemovePlayer(index)}/>
            	  <input
            	  	type="text"
            	  	value={player.name}  // the text inside is controlled by React instead of the browser
           		    onChange={e => callUpdatePlayerName(index, e.target.value)}  // call func when user types
           		    autoFocus={index === playerList.length - 1}
           		    // set value to the placeholder when user un-focuses if it's blank
           		    onBlur={() => {
           		    	if (player.name === "") {
           		    		callUpdatePlayerName(index, `Player ${index+1}`)
           		    	}
           		    }}
             	    placeholder={`Player ${index + 1}`}
             	    className={"text-md text-rose-900 dark:text-yellow-100 text-center focus:outline-none"}
          	      />
            	</ListItem>
            ))}
          </List>
          <ButtonGroup>
            <Button
            	icon={<><path d="M12 5l0 14" /><path d="M5 12l14 0" /></>}
            	onClickFunction={callAddPlayer}
           	>
           	</Button>
          </ButtonGroup>
        </div>
        
        <ButtonGroup>
          <Button
            primary
            icon={<><path d="M5 12l14 0"/><path d="M13 18l6 -6"/><path d="M13 6l6 6"/></>}
            onClickFunction={() => goToPageLowLevel("SelectImpostors")}
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
