import Image from "next/image";
import Link from "next/link";
import { VscStarFull } from "react-icons/vsc";
import { FaHandsClapping } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

export default function BlogCard() {
  return (
    <div className="border-b pb-5">
      <Link className="flex flex-col gap-6" href="/1">
        <div className="flex gap-4 items-center">
          <span className="h-8 w-8 inline-block rounded-full bg-slate-400"></span>
          <span className="text-sm">AnthonyD. Mays</span>
        </div>
        <div className="grid grid-cols-[1fr_100px] md:grid-cols-[1fr_200px] gap-4 md:gap-6 text-sm md:text-base">
          <div className="flex flex-col gap-4">
            <h2 className="capitalize text-lg md:text-2xl font-bold text-primary-700">
              How to practice leetcode problems(The Right Way)
            </h2>
            <p>
              You are doing it wrong. Use "The Six Steps" any time you practice
              leetcode questions, preferable with another person...
            </p>
          </div>
          <div className="flex">
            {/* <Image /> */}
            <div className="w-full bg-slate-400 aspect-[2/1] mx-auto"></div>
          </div>
        </div>

        <div className="flex justify-between text-[12px] md:w-[calc(100%-210px)]">
          <div className="flex items-center justify-between gap-4">
            <VscStarFull color="yellow" size={15} />
            <span>May 10,2022</span>
            <span className="flex items-center gap-2">
              <FaHandsClapping size={15} />
              <span>1.9k</span>
            </span>
            <span className="flex items-center gap-2">
              <BiSolidMessageRounded size={15} />
              <span>27</span>
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <IoMdRemoveCircleOutline size={20} />
            <span>Save</span>
            <IoIosMore size={20} />
          </div>
        </div>
      </Link>
    </div>
  );
}
