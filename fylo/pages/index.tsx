import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/public/illustration-intro.png"
import { Button } from "@/components/common/Button";
import Back from "@/public/bg-curvy-desktop.svg"
import access from "@/public/icon-access-anywhere.svg"
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

        <div className="relative inset-0 z-0 items-center">
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

      <section className="max-w-xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
        <div className="justify-center">
          <Image className=""
            src={Back}
            alt="Background"
            objectFit="cover"
            height={400}
            quality={100}
          />

          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-2xl shadow-md">
            <div className="">
              <Image
                src={access}
                width={80}
                alt="access to my file"
                quality={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Access your files, anywhere</h3>
            <p className="text-gray-300">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>

          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-2xl shadow-md mt-3">
            <div className="">
              <Image
                src={access}
                width={80}
                alt="access to my file"
                quality={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Access your files, anywhere</h3>
            <p className="text-gray-300">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>

        </div>
        <div className="mt-4">

          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-2xl shadow-md mt-3">
            <div className="">
              <Image
                src={access}
                width={80}
                alt="access to my file"
                quality={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Access your files, anywhere</h3>
            <p className="text-gray-300">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>


          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-2xl shadow-md mt-3">
            <div className="">
              <Image
                src={access}
                width={80}
                alt="access to my file"
                quality={100}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Access your files, anywhere</h3>
            <p className="text-gray-300">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
          </div>
        </div>

      </section>
    </div>
  );
}

