import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between flex-wrap py-1 px-5 ">
        <Link
          to="/"
          className="text-lg rounded-xl  bg-amber-100 px-2 text-stone-600 p-1 shadow-md"
        >
          Eden Plaza
        </Link>

        <div className="flex gap-4 "></div>
      </div>
    </section>
  );
};

export default Topbar;
