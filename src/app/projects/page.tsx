export default function Projects() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="w-full text-left text-2xl mb-2">
        <a href="https://hire-an-adventurer.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hire an Adventure</a>
      </p>
      <p className="text-lg mb-4">
        This is an original game I created recently that is loosely based on my experiences with e-commerce sites.  
        Ultimately while it is a bit of a silly game, I enjoyed making it and I hope you enjoy it too. 
        It is currently in its second stage of development where I am working to enhance the site by adding new 
        features and improving the quality of the user experience.  This is all outlined in the app&apos;s &quot;about&quot; section. 
        If you have any feedback, comments, or suggestions, please let me know.
      </p>
      <p className="text-lg mb-6">
        While I used AI for some help with questions on syntax,
        for the most part I wrote it with little AI assistance.  I did this NOT to avoid AI, as I believe it is a great tool,
        but for personal projects where there is little in the way of time-crunch I wanted to
        keep my coding skills as sharp as possible by not relying on it too heavily.
      </p>
      <p className="w-full text-left text-2xl mb-4 italic">
        More apps to come soon!
      </p>
      {/* <p className="w-full text-left text-2xl mb-2">
        <a className="text-blue-500 hover:underline cursor-pointer">Conway&apos;s Game of Life (Mostly)</a>
      </p>
      <p className="text-lg mb-4">
        This will be an implementation of Conway&apos;s Game of Life that I have planned -- with perhaps a few twists!  For more about the
        original game and its rules, please check out the&nbsp;
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Wikipedia page
        </a>. I will update this projects page as soon as I have something presentable.
      </p> */}
    </div>
  );
}
