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
          For MVP, <span className="font-bold italic">Our Recipe App</span> will allow users to
          create an account to author, store, modify, search, add notes, and share their favorite,
          recipes. The user will also be able to categorize and search recipes within the app.
          Recipes can be publicly accessible, allowing them to be found without needing an account,
          or marked private if so desired (especially useful if the user is not done entering it
          in).
        </p>
        <p className="mb-2">There are Post-MVP plans I will detail as they are implemented.</p>
      </div>
    </div>
  );
}
