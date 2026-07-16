export default function Projects() {
  return (
    <div className="flex flex-col items-start w-full mb-12">
      <h1 className="flex justify-center items-center text-4xl font-bold mb-16">Projects</h1>

      <h3 className="text-2xl font-semibold">Our Recipe App</h3>
      <div className="w-full text-left text-sm mb-4">
        In active development, MVP deadline: <span className="font-bold">early August, 2026</span>
      </div>
      <div className="w-full text-left text-lg ml-4">
        <p className="font-bold underline text-xl mb-1">
          <span className="font-bold">
            July 1<sup>st</sup>, 2026
          </span>
          : Planning Doc, and first Draft of the Architecture Document done!{' '}
        </p>
        <p className="mb-2">
          Recently, I've begun the process of designing and architecting the app. While I may, and
          likely will, revise it after this date, the architecture document itself can be found{' '}
          <a
            href="https://github.com/jarmbrust/our-recipe-app/blob/main/docs/architecture_document.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-teal-500"
          >
            here
          </a>
          .
        </p>
        <p className="mb-2">
          Beyond a demonstration of my development skills and a deep-dive into a few technologies I
          have a strong interest in, the app's purpose will be to allow users to create an account
          and log in with it to author, store, modify, search, add notes to, and share their
          favorite, or if they choose not so favorite, recipes to others using the app. The user
          will also be able to categorize those recipes, and search for them based on those
          categories. Recipes can be publicly accessible, allowing them to be found without needing
          an account, or private to the user only if so desired (especially useful if the user is
          not done entering it in).
        </p>
        <p className="mb-2">
          Future plans (post-MVP) include: users having the ability to search the web for freely
          available recipes and importing them into their account, the ability to weigh searches
          based on criteria not necessarily tagged, and sharing recipes with specific users.
          Searching by individual ingredients is another feature I want to implement, and if time
          permits, I may add to the MVP. Lastly, the ability to print out the recipe, and/or print
          out an ingredients list for a shopping trip in specified formats. Other modifications may
          be added as well.
        </p>
      </div>
    </div>
  );
}
