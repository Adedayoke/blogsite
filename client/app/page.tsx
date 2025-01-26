import Image from "next/image";
import BlogCard from "./_components/BlogCard";
import MiniBlogCard from "./_components/MiniBlogCard";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    // </div>
    <div className="grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] text-primary-200">
      <div className="flex flex-col gap-16 px-6 md:px-0 md:border-r md:pr-[60px]">
        <div className="border-b-2 flex gap-4 text-sm md:text-lg">
          <span className="text-xl px-4 py-2 md:px-4 md:py-4 cursor-pointer">+</span>
          <span className="border-b-black border-b px-4 py-2 md:px-4 md:py-4 cursor-pointer">
            Ideas
          </span>
          <span className=" px-4 py-2 md:px-4 md:py-4 cursor-pointer">Guides</span>
          <span className=" px-4 py-2 md:px-4 md:py-4 cursor-pointer">Reviews</span>
        </div>

        <div className="flex flex-col gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div className="hidden pl-[30px] md:block max-h-[150vh]">
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-primary-700">Latest</h4>
          <div className="flex flex-col gap-6 text-xs">
            <MiniBlogCard />
            <MiniBlogCard />
            <MiniBlogCard />
          </div>
          <h4 className="font-bold text-primary-700">Reading List</h4>
          <p className="text-sm">
            Click the on any story to easily add it to your reading list or a
            custom list that you can share.
          </p>
        </div>
      </div>
    </div>
  );
}
