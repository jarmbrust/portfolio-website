import Image from "next/image";

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
      <h1 className="text-4xl font-bold">Hi, I&apos;m James</h1>
      <p className="text-xl max-w-xl text-center">
        I&apos;m a software engineer who enjoys building modern, accessible, and performant web applications.
      </p>
    </div>
  );
}
