import Logo from "./Logo";
import SearchBlog from "./SearchBlog";
import { CiSearch } from "react-icons/ci";


export default function Header() {
  return (
    <nav className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-5">
            <Logo/>
            <SearchBlog/>
        </div>
        <div className="flex items-center gap-4">
            <CiSearch className="hidden md:block" size={20} />
            <div className="w-10 aspect-square rounded-full bg-slate-300"></div>
        </div>
    </nav>
  )
}
