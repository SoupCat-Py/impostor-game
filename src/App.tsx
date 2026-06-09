import { H1, H2, Para, Small } from "./components/Text";
import Button from "./components/Button";
import { List, ListItem } from "./components/Lists"

//          DARK     LIGHT-1      LIGHT-2
// bg1   taupe-900  olive-200    taupe-400
// bg2   taupe-800  olive-50     taupe-300
// H1    amber-500  emerald-700  taupe-700
// H2    amber-600  emerald-600  taupe-600
// H3    amber-600  emerald-600  taupe-600
// body  amber-100  emerald-900  taupe-900
// btn   amber-500  emerald-400  taupe-400
//
// maybe have a setting somewhere where the user can
// pick a color and the entire site changes like this
// could be pretty cool 🤔
// maybe also a toggle for colored card backgrounds
// like instead of amber-950 it would be taupe-800

export default function App() {
  return (
  <section className="flex flex-col p-4 gap-6">
    <div className={`flex flex-col align-top justify-start p-6 gap-6 rounded-2xl bg-olive-50 dark:bg-taupe-800`}>
      <div className={"flex flex-col align-top justify-start gap-2"}>
        <H1>Component Playground</H1>
        <H2>About</H2>
        <Para>I'm testing using little pre-styled components for text, buttons, lists, and more. It seems to be working really well with React and Tailwind CSS :)</Para>
        <H2>Lots of stuff</H2>
        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien mi, pulvinar vel consequat quis, varius eget leo. Aenean ut sapien nisi. Ut finibus dolor ac quam euismod, a dignissim elit placerat. Ut nec orci id odio euismod volutpat quis aliquet ipsum. Aliquam dapibus condimentum volutpat. Mauris eu felis justo.</Para>
      </div>
    </div>
    <List>
      <ListItem>
        <Para>Wow look</Para>
      </ListItem>
      <ListItem>
        <div className="flex flex-row gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"
            className="h-5 text-taupe-400"
          >
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" />
          </svg>
          <Para>It's an unordered list</Para>
        </div>
      </ListItem>
      <ListItem>
        <Small>Tailwind is so nice</Small>
        <Para>I'll use these to add players and show their answers</Para>
      </ListItem>
    </List>
    <div className="flex flex-col gap-3">
      <Button
        label="Do you dare click the button?"
        primary
        icon={<><path d="M7 4v16l13 -8l-13 -8" /></>}
        onClickFunction={() => alert("this button worked!")}
      >
        primary button
      </Button>
      <Button
        primary
        isDisabled
        icon={<><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M18.364 5.636l-12.728 12.728" /></>}
      >
        disabled primary button
      </Button>
      <Button
        icon={<><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" /></>}
        onClickFunction={() => alert("hi")}
      >
        secondary button
      </Button>
      <Button
        icon={<><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></>}
        onClickFunction={() => alert("hi")}
      >
        secondary button
      </Button>
      <Button
        icon={<><path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12" /><path d="M19 16h-12a2 2 0 0 0 -2 2" /><path d="M9 8h6" /></>}
        onClickFunction={() => alert("hi")}
      >
        secondary button
      </Button>
      <Button
        icon={<><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></>}
        onClickFunction={() => alert("hi")}
        isDisabled
      >
        disabled secondary button
      </Button>
    </div>
  </section>
  )
}
