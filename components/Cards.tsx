// Cards.js
import Image from "next/image";

type Props = {
  title: string;
  description: string[];
  src: string;
};

function Cards({ title, description, src }: Props) {
  return (
    <div className="border flex flex-col relative rounded-xl bg-slate-100 p-12 my-4 mx-3">
      <div className="relative">
        <Image src={src} layout="fill" objectFit="cover" alt="logo" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-base sm:text-xl text-blue-500 mb-2">
          {title}
        </h2>
        <ul className="sm:text-base text-xs list-disc">
          {description.map((desc, index) => (
            <li className="my-2" key={index}>
              {desc}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-1">
          <button className="bg-gradient-to-b rounded-md text-sm sm:text-base text-white p-1 px-2 from-blue-400 to-blue-600">
            Read More
          </button> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
