import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/public/illustration-intro.png"
import { Button } from "@/components/common/Button";
import Back from "@/public/icon-access-anywhere.svg"
import security from "@/public/icon-security.svg"
import time from "@/public/icon-collaboration.svg"
import store from "@/public/icon-any-file.svg"
import productive from "@/public/illustration-stay-productive.png"
import arrow from "@/public/icon-arrow.svg"
import Card from "@/components/common/Card";
import quote from "@/public/bg-quotes.png"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const CardData = [
  {
    paragraph: "Fylo has improved our team productivity by anorder of magnitude. Since making the switch ourt team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    image: "images/profile-1.jpg",

  },
  {
    paragraph: "Fylo improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    image: "images/profile-2.jpg",
  },
  {
    paragraph: "Fylo has improved our team productivity by anorder of magnitude. Since making the switch ourt team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    image: "images/profile-3.jpg",
  },
];

/* Landing Page */
export default function Home() {
  return (
    <div>

      {/* How to Get Started */}
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

      {/* File access */}
      <section className="grid grid-cols-2 lg:grid-cols-2 lg:gap-y-16 lg:gap-x-12 gap-8 lg:px-20 my-20 md:gap-y-24 justify-evenly">
        <div className="place-items-center">
          <Image src={Back} height={100} width={80} alt="icon-access" />
          <h3 className="text-xl pt-4 font-bold">Access your files, anywhere</h3>
          <p className="text-center pt-4 text-base text-gray-300 font-medium w-4/6 tracking-tight">
            The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere
          </p>
        </div>

        <div className="place-items-center -mt-5">
          <Image src={security} height={100} width={80} alt="icon-access" />
          <h3 className="text-xl pt-2 font-bold">Security you can trust</h3>
          <p className="text-center pt-4 text-base text-gray-300 font-medium w-4/6 tracking-tight">
            2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div className="place-items-center">
          <Image src={time} height={100} width={80} alt="icon-access" />
          <h3 className="text-xl pt-4 font-bold">Real-time collaboration</h3>
          <p className="text-center pt-4 text-base text-gray-300 font-medium w-4/6 tracking-tight">
            Sercurely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.
          </p>
        </div>

        <div className="place-items-center">
          <Image src={store} height={100} width={80} alt="icon-access" />
          <h3 className="text-xl pt-5 font-bold">Store any type of file</h3>
          <p className="text-center pt-4 text-base text-gray-300 font-medium w-4/6 tracking-tight">
            Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all types to be securely stored and shared.
          </p>
        </div>
      </section>

      {/* Prudictive section to show how the flows Works */}
      <section className="md:flex grid justify-items-start justify-center items-center mb-4 ">
        <Image className="ml-6 "
          src={productive}
          alt="Illustration"
          width={400}
          height={40}
        />

        <div className=" items-center ml-[2rem]">
          <h2 className="text-5xl font-bold">Stay productive,<br /> where you are</h2>
          <p className="text-lg text-slate-300 font-light mt-6">Never let location be an issue when accessing your files.Fylo has you <br />covered for all your file storage needs. <br /> </p>
          <p className="text-lg text-slate-300 font-light mt-6">Securely share files and folders with friends,family and colleagues for live <br /> collaboration. No email attachtments required.</p>
          <button className="inline-flex gap-2 text-lg text-[#86DDE4] mt-4 hover:underline hover:text-slate-200">See how Fylo works <span><Image src={arrow} alt="arrow" width={25} height={20} /></span></button>
        </div>
      </section>

      <section>
        {/* Loop Through the arrays of CardData to render the card component using the map function */}
        <div className="grid grid-rows-2  md:flex justify-center items-center min-h-screen ml-10 mr-10 ">
          <Image className="hidden md:mt-[-13rem]"
            src={quote}
            width={15}
            height={15}
            alt="Arrow"
          />
          <div className="flex gap-6">
            {CardData.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                role={card.role}
                paragraph={card.paragraph}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Input  Section */}
      <section>
        <div className="bg-[#21293C] shadow-md rounded-lg p-6 text-center w-30">
          <div>
            <h2 className="font-semibold text-3xl">Get early access today</h2>
            <p className="font-light text-sm mt-2">
              It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br />
              question,our support team would be happy to help you.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}
