import { IoIosMore } from "react-icons/io";
import { VscStarFull } from "react-icons/vsc";
import { FaHandsClapping } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";

export default function page() {
  return (
    <div className="w-full flex flex-col gap-6 text-primary-200">
      <div className="text-[12px] flex items-center gap-2">
        <VscStarFull color="yellow" size={15} />
        <span>Member-only story</span>
      </div>
      <h1 className="font-bold text-4xl text-black">
        How to practice leetcode problems(The Right Way)
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary-100"></div>
        <ul className="text-sm">
          <li className="text-primary-700">AnthonyD. Mays</li>
          <li className="flex flex-col md:flex-row text-[12px] gap-2">
            <span>
              Published in{" "}
              <span className="capitalize text-primary-700">
                {" "}
                Level Up Coding
              </span>
            </span>
            <span> 3 min read . May 10,2022</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between text-[12px] py-4 border-t border-b">
        <div className="flex items-center justify-between gap-4">
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
          <span>Save</span>
          <IoIosMore size={20} />
        </div>
      </div>
      <div className="py-4">
        <div className="w-1/2 aspect-square bg-primary-200 mx-auto"></div>
        <p className="text-xs mt-2">How to practice leetcode problems(The Right Way)</p>
      </div>
    </div>
  );
}
