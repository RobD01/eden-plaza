import TenantCard from "@/components/shared/TenantCard";
import { tenant } from "@/constants";

const Shop = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full px-5">
            Shops & Restaurants
          </h2>

          {/* home links */}
          <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-7 sm:w-full">
            {tenant?.map((post) => (
              <TenantCard post={post} key={post.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
