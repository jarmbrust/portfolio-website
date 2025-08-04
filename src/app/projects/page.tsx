export default function Projects() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full text-white">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg mb-4">At this moment, there is one new project I am currently working on that I would like to showcase here.
        It is in its second stage of development where the first iteration is &quot;done&quot;, but I am working to add new 
        features and improve the quality of the user experience.
        It has an &quot;about&quot; page with more details about the project and upcoming features. While I used AI for some help 
        with questions on syntax and so forth, 
        for the most part I wrote it without much AI assistance.  I did this NOT to avoid AI, as I believe it is a great tool, 
        but for personal projects where there is little in the way of time-crunch I wanted to practice and
        keep my coding skills sharp by not relying on it too heavily.
      </p>
      <p className="text-lg mb-4">While sort of based on my experience with e-commerce apps, it is a bit of a silly game,
        but it was fun to build and I hope you enjoy it.  If you have any feedback, 
        comments, or suggestions, please let me know.  You can find the game here (which has a link to the code on GitHub):&nbsp;
        <a href="https://hire-an-adventurer.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hire an Adventure</a>.
      </p>
    </div>
  );
}
