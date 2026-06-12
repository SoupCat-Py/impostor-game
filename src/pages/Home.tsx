import type { Page } from "../App";
import PageContainer from "../components/PageContainer"
import { H1 } from "../components/Text"
import { Button, ButtonGroup } from "../components/Button"

interface PageProps {
  goToPageLowLevel: (newPage: Page) => void;
}

export default function HomePage({goToPageLowLevel}:PageProps) {
  return (
    <PageContainer>
      <div className="pt-6">
        <H1>Chameleon but not really YAY</H1>
        <img src="/baby globe.gif"/>
      </div>
      <ButtonGroup>
        <Button
          primary
          icon={<><path d="M7 4v16l13 -8l-13 -8" /></>}
        >
          Start Game
        </Button>
        <Button
          icon={<><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></>}
          onClickFunction={() => goToPageLowLevel("HowToPlay")}
        >
          How to Play
        </Button>
      </ButtonGroup>
    </PageContainer>
  )
}
