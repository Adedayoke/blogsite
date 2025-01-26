import { CiSearch } from "react-icons/ci";
export default function SearchBlog() {
  return (
    <div className="bg-black bg-opacity-[10%] w-[200px] h-[40px] rounded-full pl-3  items-center gap-3 md:flex hidden">
        <CiSearch size={20} />
        <input className="bg-transparent h-full w-full inline-block " type="text" placeholder="Search" />
    </div>
  )
}
