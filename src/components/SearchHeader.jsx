import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { BiSolidGrid } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex items-center justify-between w-full p-6'>
        <Link href='/'>
          <Image
            src={
              "https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png"
            }
            width={120}
            height={40}
            alt='google logo'
            priority
            style={{ width: "auto" }}
          />
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden space-x-2 md:inline-flex'>
          <IoSettings className='p-2 text-4xl bg-transparent rounded-full cursor-pointer hover:bg-gray-200' />
          <BiSolidGrid className='p-2 text-4xl bg-transparent rounded-full cursor-pointer hover:bg-gray-200' />
        </div>
        <button className='px-6 py-2 ml-2 font-medium text-white transition-shadow bg-blue-500 rounded-md hover:brightness-105 hover:shadow-md'>
          Sign in
        </button>
      </div>
    </header>
  );
}
