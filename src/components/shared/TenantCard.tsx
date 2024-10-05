type TenantCardProps = {
  post: {
    id: string;
    name: string;
    address: string;
    phone: string;
    category: string;
    imgURL?: string;
  };
};

const TenantCard = ({ post }: TenantCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-between px-3"></div>
      {post.imgURL ? (
        <img src={post.imgURL} className="post-card_img" alt="post image" />
      ) : null}
      <div className=" p-3">
        <p className="text-xl">{post.name}</p>
        <p className="text-blue-700 font-extralight my-1">{post.category}</p>
        <p>{post.address}</p>
        <p>{post.phone}</p>
      </div>
    </div>
  );
};

export default TenantCard;
