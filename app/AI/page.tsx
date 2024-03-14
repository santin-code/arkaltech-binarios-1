import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Introduccion() {
  const cardImages = [
    {
      id: 1,
      title: "Compresor de imágenes",
      href: "https://www.iloveimg.com/es",
    },
      {
        id: 2,
        title: "Perplexity AI",
        href: "https://www.perplexity.ai/",
      },
      {
        id: 3,
        title: "Black Box AI",
        href: "https://www.blackbox.ai/share/3f65254a-0e44-4a71-8ac7-21ff7d0789dc",
      },
      {
        id: 4,
        title: "Chat GPT",
        href: "https://chat.openai.com/",
      },
      {
        id: 5,
        title: "Claves de windows para dormir",
        href: "https://chat.openai.com/share/d1d644f8-2847-4c5e-9422-a41d26d360e8",
      },
     {
        id: 6,
        title: "Auto Draw",
        href: "https://autodraw.com/",
      }
      
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16 items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className="w-40 h-20 m-1 overflow-hidden flex items-center bg-white justify-center w-5/12   border-2 border-solid border-sky-700 rounded   md:w-2/5  hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
          >
            <p
              className={` h-full w-full text-center  flex items-center justify-center mx-auto my-auto text-black text-1xl hover:text-white ${lobster.className}`}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
