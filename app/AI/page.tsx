import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Introduccion() {
  const cardImages = [
    {
      id: 3,
      title: "Compresor de imágenes",
      href: "https://www.iloveimg.com/es",
    },
      {
        id: 11,
        title: "Perplexity AI",
        href: "https://www.perplexity.ai/",
      },
      {
        id: 13,
        title: "Black Box AI",
        href: "https://www.blackbox.ai/share/3f65254a-0e44-4a71-8ac7-21ff7d0789dc",
      },
      {
        id: 15,
        title: "Chat GPT",
        href: "https://chat.openai.com/",
      },
      {
        id: 16,
        title: "Claves de windows para dormir",
        href: "https://chat.openai.com/share/d1d644f8-2847-4c5e-9422-a41d26d360e8",
      },
     {
        id: 20,
        title: "Auto Draw",
        href: "https://autodraw.com/",
      },
      {
        id: 21,
        title: "Clean PNG",
        href: "https://www.cleanpng.com/",
      },
      
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16  items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className="w-40 m-1 overflow-hidden flex items-center bg-gradient-to-r from-sky-500 to-indigo-500 justify-center w-5/12    border-2 border-solid border-sky-700 rounded   md:w-1/5 md:m-4 hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <p
              className={`  h-20 flex items-center justify-center mx-auto my-auto text-slate-200 text-1xl p-2 ${lobster.className}`}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
