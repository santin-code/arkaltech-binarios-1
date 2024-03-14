import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function Programacion() {
  const cardImages = [
    {
      id: 1,
      title: "Simulador Movil",
      href: "https://chromewebstore.google.com/detail/simulador-m%C3%B3vil-herramien/ckejmhbmlajgoklhgbapkiccekfoccmk?hl=es&pli=1",
    },{
      id: 2,
      title: "Practicar Programación",
      href: "https://exercism.org/",
    },{
      id: 3,
      title: "Diseñar Paginas Web",
      href: "https://balsamiq.com/",
    },{
      id: 4,
      title: "Ideas Diseños",
      href: "https://hype4.academy/",
    },{
      id: 5,
      title: "CSS Generator",
      href: "https://cssgenerator.org/",
    },{
      id: 6,
      title: "Patron De Colores Para Web",
      href: "https://www.realtimecolors.com/",
    },{
      id: 7,
      title: "CSS Loader",
      href: "https://css-loaders.com/",
    },{
      id: 8,
      title: "Ver Paleta de  Colores De Cualquier Pagina",
      href: "https://www.instagram.com/reel/C2IK7SSNupl/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==",
    },{
      id: 9,
      title: "Tips Insta CSS",
      href: "https://www.instagram.com/coding_dev_/",
    },{
      id: 10,
      title: "Patrones de Diseño (Learn)",
      href: "https://www.patterns.dev/",
    }
      
  ];

  return (
    <div className=" flex flex-wrap w-full mt-8 mb-16 items-center justify-center  mx-auto my-auto   md:mt-2 md:w-8/12 ">
      {cardImages.map((p) => {
        return (
          <Link
            key={p.id}
            href={p.href}
            className=" w-40 h-20 m-1 overflow-hidden flex items-center bg-white justify-center w-5/12   border-2 border-solid border-sky-700 rounded   md:w-2/5  hover:bg-black transform hover:scale-105 transition duration-100 ease-in-out "
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
