import { plaza } from "@/constants";
import YoutubeEmbed from "./YoutubeEmbed";

type HomeCardProps = {
  post: {
    id: number;
    name?: string;
    address?: string;
    video?: string;
  };
};

const map = (
  <section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6634.364942418686!2d-117.99126988902324!3d33.75595033320631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd262402d4e6f5%3A0x42f5fd21fdbb0b27!2s14200%20Beach%20Blvd%2C%20Westminster%2C%20CA%2092683!5e0!3m2!1sen!2sus!4v1718564500276!5m2!1sen!2sus"
      width="600"
      height="450"
      loading="lazy"
      className="w-full  p-2 rounded-2xl"
    ></iframe>
  </section>
);

const HomeCard = ({ post }: HomeCardProps) => {
  return (
    <div className="post-card">
      {post.name ? (
        <div className=" p-3 text-center">
          {plaza.leasing ? (
            <div className="mb-3">
              <p className="text-center text-xl">Available for lease</p>
              <div className="text-center text-lg">
                <p className="mb-2">{plaza.leasingDetail}</p>
                <p>
                  Please call or text John at 714-902-3989 <br />
                  or email Robert at rdao2893@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-3">
              <p className="text-center text-xl">
                No available spaces for lease
              </p>
              <div className="text-center text-lg">
                <p>
                  Please call or text John at 714-902-3989 <br />
                  or email Robert at rdao2893@gmail.com <br />
                  and we update you on availablities
                </p>
              </div>
            </div>
          )}
        </div>
      ) : null}
      {post.address ? (
        <>
          <p className="text-center text-xl">{post.address}</p>
          {map}
        </>
      ) : null}
      {post.video ? <YoutubeEmbed /> : null}
    </div>
  );
};

export default HomeCard;
