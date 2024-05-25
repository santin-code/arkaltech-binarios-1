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
      href: "https://disk.yandex.com/i/hPfHppaDVm_5HQ",
    },{
      id: 12,
      title: "12",
      href: "https://disk.yandex.com/i/qsYHYDu6SBIsOg",
    },{
      id: 13,
      title: "13",
      href: "https://disk.yandex.com/i/3R-GAafHw_JQlw",
    },{
      id: 14,
      title: "14",
      href: "https://disk.yandex.com/i/rEujaCFRX0Vg6g",
    },{
      id: 15,
      title: "15",
      href: "https://disk.yandex.com/i/wYmcbQCbdrwtUg",
    },{
      id: 16,
      title: "16",
      href: "https://disk.yandex.com/i/uVQU0BKb2Y4qmQ",
    },{
      id: 17,
      title: "17",
      href: "https://disk.yandex.com/i/ewsxnpeiJ30iVA",
    },{
      id: 18,
      title: "18",
      href: "https://disk.yandex.com/i/bOWPpCMlGWnnfg",
    },{
      id: 19,
      title: "19",
      href: "https://disk.yandex.com/i/jlD-CrrbESs5aQ",
    },{
      id: 20,
      title: "20",
      href: "https://disk.yandex.com/i/D4YzgTxOg4i84Q",
    },{
      id: 21,
      title: "21",
      href: "https://disk.yandex.com/i/AVnAghPHLe5sXg",
    },{
      id: 22,
      title: "22",
      href: "https://disk.yandex.com/i/ZBfXiPh3js1IXQ",
    },{
      id: 23,
      title: "23",
      href: "https://disk.yandex.com/i/QC4IofrEYWEp4A",
    },{
      id: 24,
      title: "24",
      href: "https://disk.yandex.com/i/vd-saxB8wlaT4g",
    },{
      id: 25,
      title: "25",
      href: "https://disk.yandex.com/i/iPrhNYANfKzWrA",
    },{
      id: 26,
      title: "26",
      href: "https://disk.yandex.com/i/5DoFnf0i4RrlfQ",
    },{
      id: 27,
      title: "27",
      href: "https://disk.yandex.com/i/6DMPpX2cHWSSxg",
    },{
      id: 28,
      title: "28",
      href: "https://disk.yandex.com/i/U_leYGUbU35xWw",
    },{
      id: 29,
      title: "29",
      href: "https://disk.yandex.com/i/ZW29wByz9KVUDw",
    },{
      id: 30,
      title: "30",
      href: "https://disk.yandex.com/i/gzVfTldfS5EEyg",
    },{
      id: 31,
      title: "31",
      href: "https://disk.yandex.com/i/VONWbvurUo2fkA",
    },{
      id: 32,
      title: "32",
      href: "https://disk.yandex.com/i/3va2p34qK2J0Qw",
    },{
      id: 33,
      title: "33",
      href: "https://disk.yandex.com/i/24OMX67gXTp6Fg",
    },{
      id: 34,
      title: "34",
      href: "https://disk.yandex.com/i/lxXSGoTuDQdCog",
    },{
      id: 35,
      title: "35",
      href: "https://disk.yandex.com/i/lsAYD9YkgsATqw",
    },{
      id: 36,
      title: "36",
      href: "https://disk.yandex.com/i/gqzEpOxBWSNDXQ",
    },{
      id: 37,
      title: "37",
      href: "https://disk.yandex.com/i/iRslLOiCk380OQ",
    },{
      id: 38,
      title: "38",
      href: "https://disk.yandex.com/i/rjhxO_QDGEIy8A",
    },{
      id: 39,
      title: "39",
      href: "https://disk.yandex.com/i/g_DdjTIQVJWYdQ",
    },{
      id: 40,
      title: "40",
      href: "https://disk.yandex.com/i/jQE2zW5mso3AHQ",
    },{
      id: 41,
      title: "41",
      href: "https://disk.yandex.com/i/mAE6QeeoXSv9EA",
    },{
      id: 42,
      title: "42",
      href: "https://disk.yandex.com/i/Tny5w7krDXFJZA",
    },{
      id: 43,
      title: "43",
      href: "https://disk.yandex.com/i/Cvq2cOMP6D4Qgw",
    },{
      id: 44,
      title: "44",
      href: "https://disk.yandex.com/i/tiMCOr5WLZjZ7A",
    },{
      id: 45,
      title: "45",
      href: "https://disk.yandex.com/i/g_AH_Sr7lPPfdg",
    },{
      id: 46,
      title: "46",
      href: "https://disk.yandex.com/i/tPCLMcXZBWFzPQ",
    },{
      id: 47,
      title: "47",
      href: "https://disk.yandex.com/i/j1WdLVLnRmlqaA",
    },{
      id: 48,
      title: "48",
      href: "https://disk.yandex.com/i/8MwFcjKv4_i-mQ",
    },{
      id: 49,
      title: "49",
      href: "https://disk.yandex.com/i/6_xwYTtOdbZRxA",
    },{
      id: 50,
      title: "50",
      href: "https://disk.yandex.com/i/aw5nzefP9IOBLw",
    },{
      id: 51,
      title: "51",
      href: "https://disk.yandex.com/i/hdklnHNDGaiW7A",
    },{
      id: 52,
      title: "52",
      href: "https://disk.yandex.com/i/VXGOcFkH_xLhbg",
    },{
      id: 53,
      title: "53",
      href: "https://disk.yandex.com/i/Z00ndjVyGIsk-g",
    },{
      id: 54,
      title: "54",
      href: "https://disk.yandex.com/i/tAw2C-wQzYlvmQ",
    },{
      id: 55,
      title: "empty",
      href: "",
    },{
      id: 56,
      title: "56",
      href: "https://disk.yandex.com/i/47Xq-wk0YWSUOw",
    },{
      id: 57,
      title: "57",
      href: "https://disk.yandex.com/i/WjFPPSCrO7gGTg",
    },{
      id: 58,
      title: "58",
      href: "https://disk.yandex.com/i/sLK-pIzU5Q7yhQ",
    },{
      id: 59,
      title: "59",
      href: "https://disk.yandex.com/i/T7c4EWPduOW0QA",
    },{
      id: 60,
      title: "60",
      href: "https://disk.yandex.com/i/JVhNqVDk36zKHA",
    },{
      id: 61,
      title: "61",
      href: "https://disk.yandex.com/i/UzNgLdrZPyQGTw",
    },{
      id: 62,
      title: "empty",
      href: "",
    },{
      id: 63,
      title: "63",
      href: "https://disk.yandex.com/i/Kj5OVBAaYF3Cww",
    },{
      id: 64,
      title: "64",
      href: "https://disk.yandex.com/i/WnLUxMO6aLmgeA",
    },{
      id: 65,
      title: "65",
      href: "https://disk.yandex.com/i/23T6_nzS_P78AQ",
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
