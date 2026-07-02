export default function Projects() {
  return (
    <div className="flex flex-col items-start w-full mb-12">
      <h1 className="flex justify-center items-center text-4xl font-bold mb-16">Projects</h1>

      <h3 className="text-2xl font-semibold">Our Recipe App</h3> 
      <div className="w-full text-left text-sm mb-4">In active development, MVP deadline: <span className="font-bold">middle of July, 2026</span></div>
      <div className="w-full text-left text-lg ml-4">
        <p className="font-bold underline text-xl mb-1"><span className="font-bold">July 1<sup>st</sup>, 2026</span>: Planning Doc, and first Draft of the Architecture Document done! </p> 
        <p className="mb-2">Recently, I&apos;ve begun the process of designing and architecting the app. While I may, and likely will, revise it 
          after this date, the architecture document itself can be found&nbsp;
          <a href="https://github.com/jarmbrust/our-recipe-app/blob/main/docs/architecture_document.md" 
          target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-teal-500">here</a>. 
        </p>
        <p className="mb-2">   
          Beyond a demonstration of my development skills and a deep-dive into a few technologies I have a strong interest in, but haven&apos;t 
          taken the opportunity to dig into yet, the app&apos;s purpose will be to allow users to create an account and log in with it to author, 
          store, modify, search, add notes to, and share their favorite, or if they choose not so favorite, recipes to others using the app.
          The user will also be able to categorize those recipes, and search for them based on those categories. 
          Recipes will also have a feature to make them publicly accessible allowing them to be found without needing an account, 
          or private to the user only.
        </p>
        <p className="mb-2">
          Future plans for post-MVP include: searching the web for recipes that a freely available and importing them to your account, 
          the ability to weigh searches based on criteria not necessarily tagged, and maybe another category to allow sharing recipes with specific users.
          Also, searching by individual ingredients is another priority I want to implement, and if time permits, may add to the MVP.
          Other modifications will occur as I think of them, or when they are suggested by others.
        </p>
        <p className="mb-2">
          Currently, I do not have plans to monetize this app, mostly because there are apparently a ton of recipe apps out there.
          However my wife and I do plan to use it to help organize and choose meal-plans, and we&apos;ll share the app with whomever wants to use it.
          The code will be open source, at least in the beginning.
        </p>
        <p className="mb-2">
          Admittedly the MVP deadline is a <span className="italic">bit</span> ambitious, but that is my goal, and I will do my best to meet it.
        </p>
      </div>
    </div>
  );
}
