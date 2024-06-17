import HomeCard from "@/components/shared/HomeCard";
import { homeInfo } from "@/constants";

const Leasing = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full px-5">
            Leasing Interests
          </h2>
          <ul className=" grid grid-cols-1  gap-7 sm:w-full">
            {homeInfo?.map((post) => (
              <HomeCard post={post} key={post.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leasing;
