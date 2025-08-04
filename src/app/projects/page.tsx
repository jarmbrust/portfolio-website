export default function Projects() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="w-full text-left text-2xl mb-2">
        <a href="https://hire-an-adventurer.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hire an Adventure</a>
      </p>
      <p className="text-lg mb-4">
        At this moment, there is one new project I am currently working on that I would like to showcase here (more will be coming
        as I fix up some old ones and add some new ones).
        It is in its second stage of development where the first iteration is &quot;done&quot;, but I am working to add new 
        features and improve the quality of the user experience.
      </p>
      <p className="text-lg mb-4">
        While I used AI for some help with questions on syntax and so forth,
        for the most part I wrote it with little AI assistance.  I did this NOT to avoid AI, as I believe it is a great tool,
        but for personal projects where there is little in the way of time-crunch I wanted to
        keep my coding skills sharp as possible by not relying on it too heavily.
      </p>
      <p className="text-lg mb-4">While this app is somewhat based on my experiences with e-commerce apps, ultimately it is a bit 
        of a silly game.  However, I enjoyed making it was fun to build and I hope you enjoy it too.  If you have any feedback, 
        comments, or suggestions, please let me know.
      </p>
    </div>
  );
}
