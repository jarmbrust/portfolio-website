import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <Image
        className="rounded-full border-4 border-gray-800 shadow-lg mb-4"
        src="/images/james_edit.jpeg"
        alt="James's Profile Image"
        width={120}
        height={120}
        priority
      />
      <h1 className="text-4xl font-bold">James Armbrust</h1>
      <p className="text-2xl max-w-xl text-center">
        Creative, Analytical, and Experienced Software Developer.
      </p>
      <p className="text-md italic max-w-md text-center">
        Needless to say, he's also generally regarded as a friendly, competent, and well-nigh
        good-natured hominoid.
      </p>
    </div>
  );
}
