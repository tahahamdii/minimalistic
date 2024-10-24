import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
const reviews = [
  {
    name: "Ahmed Chebbi",
    username: "@ahmed",
    body: "Working with Taha was fantastic! He quickly solved a major issue during a project, saving us a lot of time. His energy is truly IMPRESSIVE ",
    img: "https://conceptmageg.com/uploads/images/202208/image_750x_62ee4e4be1383.jpg",
  },
  {
    name: "Imem Hamdi",
    username: "@imem",
    body: "During a hackathon, Taha turned a challenging idea into a winning project in no time. He’s not only brilliant but also makes work enjoyable. Much Love!",
    img: "/da.jpg",
  },
  {
    name: "Nicolas charles",
    username: "@nciholas_charles",
    body: "I loved working with Taha he brings a lot of enthusiasm and skill to the table.",
    img: "/aa.jpg",
  },
  {
    name: "Lina Ben Salah",
    username: "@lina",
    body: "love the creativity , true team player ",
    img: "/aa.jpg",
  },
  {
    name: "Nadia Farhat",
    username: "@nadia",
    body: "Very impressive work , Big thanks for the hard work during our last project",
    img: "/aa.jpg",
  },
  {
    name: "Omar Khedher",
    username: "@omar",
    body: "He’s not only talented but also a great person to work with.",
    img: "/aa.jpg",
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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  bg-inherit">
      <Marquee pauseOnHover className="[--duration:24s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
