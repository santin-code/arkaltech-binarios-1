import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function FrasesVideos() {
  const cardImages = [
    {
      id: 1,
      title: "El miedo dura segundos",
      href: "https://www.instagram.com/reel/Cx-btL3gaXv/?utm_source=ig_web_copy_link",
    },{
      id: 2,
      title: "Hombre top video youtube",
      href: "https://youtu.be/R4bIBA5Jtrw?feature=shared",
    },{
      id: 3,
      title: "tylerwayneglass",
      href: "https://www.instagram.com/tylerwayneglass?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==",
    },{
      id: 4,
      title: "Google Sabe Tu Ubicación",
      href: "https://www.instagram.com/reel/C20YE02iMmi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },{
      id: 5,
      title: "Ella leía, su mamá leía, su abuelita leía, aparte de su hermosa apariencia, tenía hermoso corazón 💕",
      href: "#",
    },{
      id: 6,
      title: "Hacer Lo Que Te Gusta (Insta) 💕",
      href: "https://www.instagram.com/p/C1ssWsTsKMt/?utm_source=ig_web_copy_link&img_index=2",
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
              className={` h-full w-full text-center flex items-center justify-center mx-auto my-auto text-black text-1xl hover:text-white ${lobster.className} `}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
