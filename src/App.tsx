import { H1, H2, Para } from "./components/Text";
import Button from "./components/Button";

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
  return (<>
    <div className={`flex flex-col align-top justify-start p-6 m-4 gap-6 rounded-xl bg-olive-50 dark:bg-taupe-800`}>
      <div className={"flex flex-col align-top justify-start gap-2"}>
        <H1>Hi there</H1>
        <H2>About</H2>
        <Para>I'm testing using little pre-styled components for text. It seems to be working really well :)</Para>
        <H2>Lots of stuff</H2>
        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien mi, pulvinar vel consequat quis, varius eget leo. Aenean ut sapien nisi. Ut finibus dolor ac quam euismod, a dignissim elit placerat. Ut nec orci id odio euismod volutpat quis aliquet ipsum. Aliquam dapibus condimentum volutpat. Mauris eu felis justo.</Para>
        <div className="flex flex-col gap-3 my-4">
          <Button link primary>primary button</Button>
          <Button link>secondary button</Button>
        </div>
      </div>
    </div>
  </>)
}
