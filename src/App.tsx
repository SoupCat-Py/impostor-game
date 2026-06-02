
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
    <div className={"flex flex-col align-top justify-start p-6 m-4 gap-6 rounded-xl bg-olive-50 dark:bg-taupe-800"}>
      <div className={"flex flex-col align-top justify-start gap-2"}>
        <h1 className={"text-4xl font-bold tracking-wider text-emerald-700 dark:text-amber-500"}>Hi there</h1>
        <h2 className={"text-2xl font-bold text-emerald-600 dark:text-amber-600"}>guh</h2>
        <p className={"text-lg text-emerald-900 dark:text-amber-100"}>I'm currently trying to use Tailwind CSS</p>
      </div>
      <a
        href={"https://soupcat.vercel.app"} target={"_blank"}
        className={"rounded-full w-max bg-emerald-400 dark:bg-amber-500 text-black py-2 px-6 shadow-md transition-transform  hover:scale-105"}
      >
        A button!
      </a>
    </div>

    <div className={"flex flex-col align-top justify-start p-6 m-4 gap-6 rounded-xl bg-olive-50 dark:bg-taupe-800"}>
      <div className={"flex flex-col align-top justify-start gap-2"}>
        <h1 className={"text-4xl font-bold tracking-wider text-emerald-700 dark:text-amber-500"}>Here's another card</h1>
        <h2 className={"text-2xl font-bold text-emerald-600 dark:text-amber-600"}>idk if this works</h2>
        <p className={"text-lg text-emerald-900 dark:text-amber-100"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
        <h2 className={"text-2xl font-bold text-emerald-600 dark:text-amber-600"}>oh look another subheader</h2>
        <p className={"text-lg text-emerald-900 dark:text-amber-100"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
    </div>
  </>)
}