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
 `);
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
          <div>
            <Image
              alt="Tech Talks"
              src={techtalks}
              className="h-[25vh] w-full md:h-auto md:w-[25vw] hover:scale-110 duration-200 mb-2"
            />
            <div className="flex items-center justify-around">
              <Link
                href="https://techtalks.codechefvit.com"
                target="__blank"
                rel="noreferrer rooppener"
              >
                <button className="border border-white px-2 py-1 rounded-lg text-white text-xl hover:bg-white hover:text-black hover:scale-110 duration-200">
                  Website
                </button>
              </Link>
              <Link
                href="https://gravitas.vit.ac.in/eventdetails?event=evt_90ba53bbfb134364ae49a782f5dc6fb4&image=https://i.imgur.com/DpnSSAf.jpg"
                target="__blank"
                rel="noreferrer rooppener"
              >
                <button className="border border-white px-2 py-1 rounded-lg text-white text-xl hover:bg-white hover:text-black hover:scale-110 duration-200">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              alt="Clueminati"
              src={clueminati}
              className="h-[25vh] w-full md:h-auto md:w-[25vw] hover:scale-110 duration-200 mb-2"
            />
            <div className="flex items-center justify-around">
              <Link
                href="https://clueminati.codechefvit.com"
                target="__blank"
                rel="noreferrer rooppener"
              >
                <button className="border border-white px-2 py-1 rounded-lg text-white text-xl hover:bg-white hover:text-black hover:scale-110 duration-200">
                  Website
                </button>
              </Link>
              <Link
                href="https://gravitas.vit.ac.in/eventdetails?event=evt_fcb5301c84764e87a77740ec9ac8d8d3&image=https://i.imgur.com/QajmOMI.jpg"
                target="__blank"
                rel="noreferrer rooppener"
              >
                <button className="border border-white px-2 py-1 rounded-lg text-white text-xl hover:bg-white hover:text-black hover:scale-110 duration-200">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              alt="CookOff"
              src={cookoff}
              className="h-[25vh] w-full md:h-auto md:w-[25vw] hover:scale-110 duration-200 mb-2"
            />
            <div className="flex items-center justify-around">
              <Link
                href="https://cookoff.codechefvit.com"
                target="__blank"
                rel="noreferrer rooppener"
              >
                <button className="border border-white px-2 py-1 rounded-lg text-white text-xl hover:bg-white hover:text-black hover:scale-110 duration-200">
                  Website
                </button>
              </Link>
              <Link
                href="https://gravitas.vit.ac.in/eventdetails?event=evt_2744fcd461b3442ab0dadde58705a7c7&image=https://i.imgur.com/aHpCDND.jpg"
                target="__blank"
                rel="noreferrer rooppener"
              >
                <button className="border border-white px-2 py-1 rounded-lg text-white text-xl hover:bg-white hover:text-black hover:scale-110 duration-200">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
