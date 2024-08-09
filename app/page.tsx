import Link from "next/link";
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Cards from "@/components/Cards";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export default function Home() {
  const carddata = [
    {
      title: "(New) Reliant Previous+® RO Water Purifier",
      description: [
        "Nine Stage RO water purifier with copper tank.",
        "This RO water purifier machine is a wall-mounted purifier, easy to install.",
        "Double Purification by RO & UV + pH enhancer",
        "Spin-welded RO Membrane Housing to prevent tampering",
        "Push – fit components for leak – proof performance",
        "RO Water Purifier comes with Copper Tank, with Stainless Steel Tank, and with ABS Tank.",
      ],
      src: "/images/hhh.png",
    },
    {
      title: "Reliant Previous+® RO Water Purifier",
      description: [
        "Nine Stage RO water purifier.",
        "This RO water purifier machine is a wall-mounted purifier, easy to install.",
        "Double Purification by RO & UV + pH enhancer",
        "Spin-welded RO Membrane Housing to prevent tampering",
        "Push – fit components for leak – proof performance",
        "Food grade, non – breakable, transparent ABS plastic Tank purifier.",
      ],
      src: "",
    },

    {
      title: "Reliant Dauntless® Water Purifier",
      description: [
        "Seven Stage RO water purifier with copper tank.",
        "This RO water purifier machine is a wall-mounted purifier, easy to install.",
        "Double Purification by RO & UV + pH enhancer",
        "Spin-welded RO Membrane Housing to prevent tampering",
        "Push – fit components for leak – proof performance",
        "RO Water Purifier comes with Copper Tank, with Stainless Steel Tank, and with ABS Tank.",
      ],
      src: "",
    },

    {
      title: "Reliant Troops® (RO + UF) Water Purifier",
      description: [
        "Seven Stage RO water purification with ABS tank.",
        "This RO water purifier machine is a wall-mounted purifier, easy to install.",
        "Double Purification by RO + UF.",
        "Spin-welded RO Membrane Housing to prevent tampering",
        "Push – fit components for leak – proof performance",
        "Food grade, non – breakable, ABS Tank.",
        "Water Purifier with Copper Tank and Water Purifier with Stainless Steel Tank variants Coming Soon.",
      ],
      src: "",
    },
  ];
  return (
    <main>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/images/reliant-1.jpg"
              alt="logo"
              width={1520}
              height={800}
              className="hidden sm:block"
            />
            <Image
              src="/images/reliant-1mop.jpg"
              alt="logo"
              width={1520}
              height={800}
              className="sm:hidden"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/images/reliant1-1 (1).jpg"
              alt="logo"
              width={1520}
              height={800}
              className="hidden sm:block"
            />
            <Image
              src="/images/reliant1-1.jpg"
              alt="logo"
              width={1520}
              height={800}
              className="sm:hidden"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col space-y-3 text-xs font-medium sm:text-base xl:flex-row justify-between items-center mx-auto border-2 w-4/5 p-2 sm:p-5 mt-5">
        <Link href="/">
          <WebIcon className="text-2xl sm:text-3xl text-blue-500" />
          Web Based Technical Support
        </Link>
        <p className="text-4xl hidden xl:inline-block font-thin">|</p>
        <a href="tel:+91723399977">
          <CallIcon className="text-2xl sm:text-3xl text-blue-500" /> IVR
          Number: +91-723399977
        </a>
        <p className="text-4xl hidden xl:inline-block font-thin">|</p>
        <a href="mailto:sales@reliantaqua.com">
          <EmailIcon className="text-2xl sm:text-3xl text-blue-500" /> Email
          Support: sales@reliantaqua.com
        </a>
      </div>

      <h1 className="sm:text-2xl text-xl px-2 font-bold underline text-center text-blue-500 mt-16 mb-6">
        BEST WATER PURIFIER COMPANY IN INDIA
      </h1>
      <p className="sm:px-32 px-4 text-sm text-center">
        Reliant Aqua is one of the Best ro purifier companies in Uttar Pradesh.
        Reliant Aqua is a nationally recognized Water Purifier Company, We
        provide the most innovative and flexible Water purifier products, and we
        focus on safe, economical, and environmentally friendly solutions for
        water treatment. We do Purification from (stage 1) Pre-Filtering to
        (Stage 9) UV treatment.
      </p>
      <p className="sm:px-[136px] px-4 text-sm text-center mt-3">
        We thank you for your trust in the Reliant Aqua water purifier. We know
        that you want to see your family healthy and happy. We ensure your
        family’s health and happiness because the Reliant Aqua water purifier
        gives you complete solutions for your water-related diseases. We are
        confident that you will be satisfied with its performance and it will
        serve your need.
      </p>

      <div className="px-4 flex-col lg:grid lg:grid-cols-2">
        {carddata.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            src={card.src}
          />
        ))}
      </div>
      <div className="flex flex-col sm:space-y-0 space-y-2 sm:flex-row text-sm sm:text-base items-center sm:justify-around">
        <Link href="/" className="border p-5 px-[30px] items-center space-x-3 flex flex-row bg-slate-100">
          <Image
            src="https://www.reliantaqua.com/wp-content/uploads/2020/11/reliant-dauntless-1.jpg"
            width={50}
            height={50}
            alt="logo"
          />
          <div>
            <h1 className="font-semibold">DOMESTIC PURIFIERS</h1>
            <p>
              Shop Now{" "}
              <KeyboardArrowRightOutlinedIcon style={{ color: "3B82F6" }} />
            </p>
          </div>
        </Link>

        <Link href="/" className="border p-5 flex space-x-3 items-center flex-row bg-slate-100">
          <Image
            src="https://www.reliantaqua.com/wp-content/uploads/2018/08/RAL.png"
            width={50}
            height={50}
            alt="logo"
          />
          <div>
            <h1 className="font-semibold">COMMERCIAL PURIFIERS</h1>
            <p>
              Shop Now{" "}
              <KeyboardArrowRightOutlinedIcon style={{ color: "3B82F6" }} />
            </p>
          </div>
        </Link>
      </div>

      <div>
        <h1 className="text-blue-500 text-2xl text-center font-semibold">
          WATER PURIFIERS
        </h1>
        <hr />
      </div>
    </main>
  );
}
