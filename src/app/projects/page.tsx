export default function Projects() {
  return (
    <div className="flex-1 flex flex-col justify-center w-full">
      <h1 className="flex justify-center items-center text-4xl font-bold mb-6">Projects</h1>
      <p className="w-full text-left text-2xl mb-2">
        Currently designing and developing a web app to allow users to store and share their favorite, and not so favorite, recipes.
        As of this writing, I&apos;ve completed the first full draft of the architecture document. You can find it <a href="https://github.com/jarmbrust/our-recipe-app/blob/main/docs/architecture_document.md" 
        target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-teal-500">here</a>.
      </p>
      <p>
        It&apos;s in active development, with a MVP deadline of Mid-July, 2026.
      </p>
    </div>
  );
}
