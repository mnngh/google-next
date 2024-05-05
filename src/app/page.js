import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center'>
        <Image
          src={
            "https://s3.amazonaws.com/freebiesupply/large/2x/google-logo-transparent.png"
          }
          width={300}
          height={100}
          alt='google logo'
          priority
          style={{ width:"auto"}}
        />
        <HomeSearch />
      </div>
    </>
  );
};
export default Home;
