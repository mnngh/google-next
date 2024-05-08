"use client";

import { RxCross2 } from "react-icons/rx";
import { IoIosMic } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter();
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center flex-grow max-w-4xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg'
    >
      <input
        type='text'
        className='w-full focus:outline-none'
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <RxCross2
        className='text-3xl text-gray-500 cursor-pointer sm:mr-2'
        onClick={() => setTerm("")}
      />
      <IoIosMic className='hidden pl-4 mr-3 text-4xl text-blue-500 border-l-2 border-gray-300 cursor-pointer sm:inline-flex' />
      <IoSearchOutline
        className='hidden text-3xl text-blue-500 cursor-pointer sm:inline-flex'
        onClick={handleSubmit}
      />
    </form>
  );
}
