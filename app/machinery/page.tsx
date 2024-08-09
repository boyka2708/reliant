import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  const src =
    "https://render.fineartamerica.com/images/rendered/default/poster/8/5.5/break/images-medium-5/three-falling-water-drops-trout55.jpg";
  return (
    <div>
      <div className="relative w-full mt-5 h-64">
        <Image src={src} alt="logo" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex top-6 justify-center">
          <h1 className="text-center font-bold text-black text-3xl">
            Machinery Of Reliant Aqua
          </h1>
        </div>
      </div>
      <h1 className="text-center mt-3 font-bold text-2xl text-blue-500">
        Water Technology
      </h1>
      <p className="text-center">
        Reliant Aqua provides a full range of water treatment technologies for
        most industrial, commercial and municipal applications.
      </p>

      <div className="flex flex-col lg:flex-row w-4/5 justify-between mx-auto mt-8 mb-4">
        <div className="rounded-xl lg:w-2/5 w-full flex flex-col items-center bg-slate-200 p-2">
          <h1 className="font-bold ">Major Markets Include</h1>
          <ul>
            <li>Industrial applications</li>
             <hr className="border border-black" />
            <li>Softener</li>
            <hr className="border border-black" />
            <li>Waste water re-cycling</li>
            <hr className="border border-black" />
            <li>Swimming pool equipment</li>
            <hr className="border border-black" />
            <li>D.M. Plants</li>
            <hr className="border border-black" />
            <li>E.T.P</li>
            <hr className="border border-black" />
            <li>Clorinator</li>
            <hr className="border border-black" />
            <li>Ozonator etc</li>
          </ul>
        </div>
        <div className="bg-slate-200 lg:w-2/5 w-full flex flex-col items-center mt-2 lg:mt-0 rounded-xl p-2">
          <h1 className="font-bold mb-2">Membrane systems including</h1>
          <ul>
            <li>Nanofiltration</li>
            <hr className="border border-black" />
            <li>Division Two</li>
            <hr className="border border-black" />
            <li>Ultrafiltration</li>
            <hr className="border border-black" />
            <li>Microfiltration</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
