import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
const reviews = [
    {
      name: "Chamseddine Madouri",
      username: "@chamseddine",
      body: "",
      img: "https://taha-bucket-v1.s3.amazonaws.com/IMG_7080+(1).jpg",
    },
    {
      name: "coficab coficab",
      username: "@coficab",
      body: "",
      img: "https://taha-bucket-v1.s3.amazonaws.com/coficab.jpeg",
    },
    {
      name: "  Incepptum",
      username: "@Incepptum",
      body: "",
      img: "https://taha-bucket-v1.s3.amazonaws.com/Incepptum.jpg",
    },
    {
      name: "  Incepptum",
      username: "@Incepptum",
      body: "",
      img: "https://taha-bucket-v1.s3.amazonaws.com/IMG_6634.jpg",
    },

    
  ];


const firstRow = reviews.slice(0, reviews.length );
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 h-60 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="w-full h-full flex absolute inset-0 items-center justify-center overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-xl"
          alt={name}
          src={img}
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo1() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-inherit">
      <Marquee pauseOnHover className="[--duration:16s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
