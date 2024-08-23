import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
const reviews = [
    {
      name: "Chamseddine Madouri",
      username: "@chamseddine",
      body: "Working with Taha has been such a pleasure! His enthusiasm and skill in AI are unmatched. Always ready with a smile and innovative ideas, he's the type of person who makes any project a success.",
      img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.15752-9/454700157_1310872446400853_4991347569785616560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ddEsJf7V9n4Q7kNvgHOKtdt&_nc_ht=scontent.ftun10-2.fna&oh=03_Q7cD1QG38jyihVxoKh0uKIHD_2jnPCqXlD_lEob6zz6YuNFyCQ&oe=66EF125F",
    },
    {
      name: "Ahmed Chebbi",
      username: "@ahmed",
      body: "Taha is not only brilliant but also one of the most approachable and genuine people I've worked with. His ability to simplify complex problems while keeping the energy high is remarkable. I can't wait to collaborate again!",
      img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.15752-9/454700157_1310872446400853_4991347569785616560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ddEsJf7V9n4Q7kNvgHOKtdt&_nc_ht=scontent.ftun10-2.fna&oh=03_Q7cD1QG38jyihVxoKh0uKIHD_2jnPCqXlD_lEob6zz6YuNFyCQ&oe=66EF125F",
    },
    {
      name: "Imem Hamdi",
      username: "@imem",
      body: "Taha brings a rare mix of professionalism and warmth. His dedication to his work is inspiring, and he knows how to make every moment fun and productive. A true star in his field!",
      img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.15752-9/454700157_1310872446400853_4991347569785616560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ddEsJf7V9n4Q7kNvgHOKtdt&_nc_ht=scontent.ftun10-2.fna&oh=03_Q7cD1QG38jyihVxoKh0uKIHD_2jnPCqXlD_lEob6zz6YuNFyCQ&oe=66EF125F",
    },
    {
      name: "Yousri Hamdene",
      username: "@yousri",
      body: "Taha is such a joy to work with! He's a true professional with an infectious positive attitude, and his ability to deliver results is top-notch. Anyone would be lucky to have him on their team.",
      img: "https://scontent.ftun10-2.fna.fbcdn.net/v/t1.15752-9/454700157_1310872446400853_4991347569785616560_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ddEsJf7V9n4Q7kNvgHOKtdt&_nc_ht=scontent.ftun10-2.fna&oh=03_Q7cD1QG38jyihVxoKh0uKIHD_2jnPCqXlD_lEob6zz6YuNFyCQ&oe=66EF125F",
    }
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
      <Marquee pauseOnHover className="[--duration:25s]">
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
