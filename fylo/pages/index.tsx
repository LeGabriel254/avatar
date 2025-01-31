import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/public/illustration-intro.png"
import { Button } from "@/components/common/Button";
import Back from "@/public/bg-curvy-desktop.svg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <section className="relative w-full flex items-center justify-center text-white">

        <div className="relative inset-0 z-0 md:items-center">
          <Image className="ml-2"
            src={Hero}
            alt="Hero Background"
            // layout="fill"
            objectFit="contain"
            width={500}
            height={100}
            quality={100}
            priority
          />
          <h1 className="text-2xl font-semibold text-center mt-2">All your files in one secure location, <br /> accessible anywhere.</h1>
          <p className="text-sm text-slate-400 font-light text-center mt-2">Flyo stores all your most important files in one secure location. <br /> Access them wherever you need, share and collaboration with <br /> friends family, and co-workers.</p>
          <div className="mt-4 text-center ">
            <Button
              title="Get Started"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="relative md:grid-cols-2 items-center">
        <div className="flex items-center">
          <Image className="ml-[2rem]"
            src={Back}
            alt="Background"
            objectFit="cover"
            height={300}
            quality={100}
          />

        </div>
      </section>
    </div>
  );
}

