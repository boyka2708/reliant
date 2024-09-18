import Image from "next/image";

function Page() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center my-14 mx-4 space-x-5">
        <Image src="/images/Jaya.png" alt="logo" width={400} height={400} />
        <span>
          <h1 className="text-3xl text-blue-500">
            Jaya Prada : Present Ambassador
          </h1>
          <p className="my-4 text-sm sm:text-base text-justify text-slate-600">
            Jaya Prada is an Indian film actress and politician. She is
            considered to be one of the best actresses in Hindi cinema and was
            one of the most iconic and influential actresses in both south and
            Hindi film industry in late 70’s, 80’s and early 90’s.
          </p>
          <p className="my-4 text-sm sm:text-base text-justify text-slate-600">
            Jaya Prada is the recipient of three Filmfare Awards South and has
            starred in many Telugu, Hindi, Tamil, Malayalam, Kannada, Bengali
            and Marathi films. She left the film industry at the peak of her
            career, as she joined the Telugu Desam Party (TDP) in 1994 and
            entered politics. She was a Member of Parliament (MP) from Rampur
            from 2004 to 2014.
          </p>
        </span>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row justify-center items-center my-14 mx-4 space-x-5">
        <Image src="/images/padmani.png" alt="logo" width={400} height={400} />
        <span>
          <h1 className="text-3xl text-blue-500">
            Padmini Kolhapure: Previous Brand Ambassador
          </h1>
          <p className="my-4 text-sm sm:text-base text-justify text-slate-600">
            Padmini Kolhapure is an Indian actress and singer, who works
            primarily in Hindi films. She began acting in 1972 at the age of 7,
            and her early works included Zindagi and Dream Girl. She then had
            her breakthrough with the film Satyam Shivam Sundaram, starring as
            Young Roopa.
          </p>
          <p className="my-4 text-sm sm:text-base text-justify text-slate-600">
            At the age of fifteen, Kolhapure won the Filmfare Award for Best
            Supporting Actress for her performance in the revenge drama Insaf Ka
            Tarazu (1980), and at the age of seventeen, won the Filmfare Award
            for Best Actress for the tragic romance Prem Rog (1982), thus
            becoming the second-youngest actress to win the awards in the
            respective categories. She was also nominated for the Filmfare Best
            Supporting Actress Award for her role in Souten (1983) and also
            received another nomination for a Filmfare Best Actress Award for
            Pyar Jhukta Nahin (1985).
          </p>
        </span>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row justify-center items-center my-14 mx-4 space-x-5">
        <Image src="/images/Madhu.png" alt="logo" width={400} height={400} />
        <span>
          <h1 className="text-3xl text-blue-500">
            Madhoo : Previous Brand Ambassador
          </h1>
          <p className="my-4 text-sm sm:text-base text-justify text-slate-600">
            Madhoo Shah is an Indian film actress known for her works
            predominantly in Hindi, Tamil, Telugu, Kannada and Malayalam
            language films
          </p>
          <p className="my-4 text-sm sm:text-base text-justify text-slate-600">
            She is best remembered for her portrayals in Kuku Kohli’s Hindi hit
            Phool Aur Kaante (1991), Mani Ratnam’s Tamil hit Roja (1992), which
            won the National Film Award for Best Film on National Integration,
            nomination for Best Film at the 18th Moscow International Film
            Festival; K. Raghavendra Rao’s Telugu hit Allari Priyudu (1992),
            which was screened at the International Film Festival of India, in
            the mainstream section; Sangeeth Sivan’s Malayalam hit Yodha (1992),
            and S. Shankar’s Tamil hit Gentleman (1993). She is the host of the
            well known music television series Rangoli on DD National channel
            since August 2019.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Page;
