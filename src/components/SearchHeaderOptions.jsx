"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";

export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter();
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className='flex justify-center w-full space-x-2 text-sm text-gray-700 border-b select-none lg:pl-52 lg:justify-start'>
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "text-blue-600 border-blue-600"
        }`}
      >
        <CiSearch className='text-md' />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "text-blue-600 border-blue-600"
        }`}
      >
        <IoCameraOutline className='text-md' />
        <p>Images</p>
      </div>
    </div>
  );
}
