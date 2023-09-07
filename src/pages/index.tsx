import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import techtalks from "@/../public/TechTalks-4.0.jpg";
import clueminati from "@/../public/Clueminati.jpg";
import cookoff from "@/../public/Cook-Off-8.0.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(`
  ____  ____  ____  _________  _    __________           _     _  _____ 
  /   _\/  _ \/  _ \/  __/   _\/ \ //  __/    /          / \ |\/ \/__ __\
  |  /  | / \|| | \||  \ |  /  | |_||  \ |  __\  _____   | | //| |  / \  
  |  \__| \_/|| |_/||  /_|  \__| | ||  /_| |     \____\  | \// | |  | |  
  \____/\____/\____/\____\____/\_/ \\____\_/             \__/  \_/  \_/                                                                                                                
 `)
  return (
    <>
      <Head>
        <title>CodeChef - VIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#0d0d0d] flex flex-col min-h-screen w-screen">
        <div className="flex flex-col items-center justify-center gap-4 pt-8">
          <h1 className="text-5xl font-bold text-[#f4f4f4] font-inter">
            CodeChef - VIT
          </h1>
          <h2 className="text-2xl text-[#f4f4f4] font-inter">
            Gravitas Events
          </h2>
        </div>
        <div className="h-full w-screen p-8 flex flex-col flex-grow md:flex-row gap-16 items-center justify-center">
          <Link href="https://techtalks.codechefvit.com" target="__blank" rel="noreferrer rooppener">
            <Image
              alt="Tech Talks"
              src={techtalks}
              className="h-[25vh] w-full md:h-auto md:w-[25vw] hover:scale-110 duration-200"
            />
          </Link>
          <Link href="https://clueminati.codechefvit.com" target="__blank" rel="noreferrer rooppener">
            <Image
              alt="Clueminati"
              src={clueminati}
              className="h-[25vh] w-full md:h-auto md:w-[25vw] hover:scale-110 duration-200"
            />
          </Link>

          <Link href="https://cookoff.codechefvit.com" target="__blank" rel="noreferrer rooppener">
            <Image
              alt="Cookoff"
              src={cookoff}
              className="h-[25vh] w-full md:h-auto md:w-[25vw] hover:scale-110 duration-200"
            />
          </Link>
        </div>
      </main>
    </>
  );
}
