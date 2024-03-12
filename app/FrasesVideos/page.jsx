import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function FrasesVideos() {
  const cardImages = [
    {
      id: 1,
      title: "El miedo dura segundos",
      href: "https://www.instagram.com/reel/Cx-btL3gaXv/?utm_source=ig_web_copy_link",
    },{
      id: 18,
      title: "Hombre top video youtube",
      href: "https://youtu.be/R4bIBA5Jtrw?feature=shared",
    },
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
              className={` h-full w-full  flex items-center justify-center mx-auto my-auto text-black text-1xl hover:text-white ${lobster.className} `}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
