import { PageContainer, InnerContainer } from "../components/PageContainer";
import { Button, ButtonGroup } from "../components/Button";
import { H2, Para, Small } from "../components/Text";
import { List, ListItem } from "../components/Lists";
import type { Page, playerData } from "../App";

type PageProps = {
    goToPageLowLevel: (string:Page) => void;
    allPlayerData: playerData[];
    impostorCount: number;
    realQuestion: string;
}

export default function ResultsPage({goToPageLowLevel, allPlayerData, impostorCount, realQuestion}:PageProps) {
    return (
        <PageContainer>
            <InnerContainer>
                <div className="flex flex-col items-center">
                    <Small>The question was:</Small>
                    <H2 noPadding>{realQuestion}</H2>
                </div>
                <List>
                    {allPlayerData.map((player,index) => (
                        <ListItem key={index}>
                            <Small>{player.name}</Small>
                            <Para>{player.answer}</Para>
                        </ListItem>
                    ))}
                </List>
            </InnerContainer>
            <ButtonGroup>
                <Button 
                    primary
                    label="Think you know who it is?"
                    icon={<><path d="M3 11h18" /><path d="M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /><path d="M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M10 17h4" /></>}
                    onClickFunction={() => goToPageLowLevel("Reveal")}
                >
                    {impostorCount > 1 ? "Reveal the Impostors" : "Reveal the Impostor"}
                </Button>
            </ButtonGroup>
        </PageContainer>
    )
}
