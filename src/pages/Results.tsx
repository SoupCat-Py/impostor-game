import { PageContainer, InnerContainer } from "../components/PageContainer";
import { Button, ButtonGroup } from "../components/Button";
import { Para } from "../components/Text";
import type { Page } from "../App";

type PageProps = {
    goToPageLowLevel: (string:Page) => void;
    fuck: () => void;
}

export default function ResultsPage({goToPageLowLevel, fuck}:PageProps) {
    return (
        <PageContainer>
            <InnerContainer>
                <Para>Results would go here</Para>
            </InnerContainer>
            <ButtonGroup>
                <Button 
                    primary
                    onClickFunction={fuck}
                >
                    Same Players (go home)
                </Button>
                <Button
                    onClickFunction={() => goToPageLowLevel("AddPlayers")}
                >
                    Edit Players
                </Button>
            </ButtonGroup>
        </PageContainer>
    )
}