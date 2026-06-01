
// COLORS
//          DARK      LIGHT
// bg1   stone-900  neutral-200
// bg2   stone-800  neutral-50
// H1    amber-500  amber-600
// H2    amber-600  amber-500
// H3    amber-600  amber-500
// body  amber-100  amber-900
// btn   black      black

export default function App() {
  return (
    <div className={"flex flex-col align-top justify-start p-6 m-2 gap-6 rounded-xl bg-neutral-50 dark:bg-stone-800"}>
      <div className={"flex flex-col align-top justify-start gap-2"}>
        <h1 className={"text-4xl font-bold tracking-wider text-amber-600 dark:text-amber-500"}>Hi there</h1>
        <h2 className={"text-2xl font-bold text-amber-500 dark:text-amber-600"}>it's me soup</h2>
        <p className={"text-lg text-amber-900 dark:text-amber-100"}>I'm currently trying to use Tailwind CSS</p>
      </div>
      <a
        href={"https://soupcat.vercel.app"} target={"_blank"}
        className={"rounded-xl w-max bg-amber-300 dark:bg-amber-500 text-black py-2 px-3 shadow-md transition-transform  hover:scale-105"}
      >
        A button!
      </a>
    </div>
  )
}