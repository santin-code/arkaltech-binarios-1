import Link from "next/link";
import { lobster } from "@/app/ui/fonts";

export default function CCSS4VI() {
  const cardImages = [
    {
      id: 1,
      title: "1",
      href: "https://disk.yandex.com/i/-4gqExHH3yeu_g",
    },{
      id: 2,
      title: "2",
      href: "https://disk.yandex.com/i/YoaRop_23S7Fvw",
    },{
      id: 3,
      title: "3",
      href: "https://disk.yandex.com/i/v3VpenCLd8qhZA",
    },{
      id: 4,
      title: "4",
      href: "https://disk.yandex.com/i/UO-t9gAr0x7Tgw",
    },{
      id: 5,
      title: "5",
      href: "https://disk.yandex.com/i/Vld1h_fCkufE2Q",
    },{
      id: 6,
      title: "6",
      href: "https://disk.yandex.com/i/PYdMUgsXMTmcYg",
    },{
      id: 7,
      title: "7",
      href: "https://disk.yandex.com/i/SVA4YbmqSDw8cw",
    },{
      id: 8,
      title: "8",
      href: "https://disk.yandex.com/i/2kpMJkzCH67FmQ",
    },{
      id: 9,
      title: "9",
      href: "https://disk.yandex.com/i/Lhs5_61IQG0Wtg",
    },{
      id: 10,
      title: "10",
      href: "https://disk.yandex.com/i/AAt7xTi7S5U-bg",
    },{
      id: 11,
      title: "11",
      href: "",
    },{
      id: 12,
      title: "12",
      href: "",
    },{
      id: 13,
      title: "13",
      href: "",
    },{
      id: 14,
      title: "14",
      href: "",
    },{
      id: 15,
      title: "15",
      href: "",
    },{
      id: 16,
      title: "16",
      href: "",
    },{
      id: 17,
      title: "17",
      href: "",
    },{
      id: 18,
      title: "18",
      href: "",
    },{
      id: 19,
      title: "19",
      href: "",
    },{
      id: 20,
      title: "20",
      href: "",
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
              className={` h-full w-full text-center  flex items-center justify-center mx-auto my-auto text-black text-1xl hover:text-white ${lobster.className} `}
            >
              {p.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
