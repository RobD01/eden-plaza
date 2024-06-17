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
      <div className=" p-3 text-xl">
        <p className="text-2xl mb-1">{post.name}</p>
        <p>{post.address}</p>
        <p>{post.phone}</p>
        <p>{post.category}</p>
      </div>
    </div>
  );
};

export default TenantCard;
