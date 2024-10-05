import { Link } from "react-router-dom";

type PostCardProps = {
  post: {
    imgURL: string;
    route?: string;
    label: string;
  };
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-between px-3"></div>
      <Link to={`${post.route}`}>
        <div className=" p-3 text-xl">
          <p>{post.label}</p>
        </div>
        <img src={post.imgURL} className="post-card_img" alt="post image" />
      </Link>
    </div>
  );
};

export default PostCard;
