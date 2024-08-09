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
            Ultrafiltration (UF)
          </h1>
        </div>
      </div>

      <h1 className="text-blue-500 font-bold text-xl text-center mt-4">
        What is Ultrafiltration
      </h1>
      <p className="p-4 font-light text-center">
        Ultrafiltration (UF) is a pressure-driven barrier to suspended solids,
        bacteria, viruses, endotoxins and other pathogens to produce water with
        very high purity and low silt density. It serves as a pretreatment for
        surface water, seawater, and biologically treated municipal effluent
        before reverse osmosis and other membrane systems. UF is also used in
        industry to separate suspended solids from solution. Industrial
        applications include power generation, food and beverage processing,
        pharmaceutical production, biotechnology, and semiconductor
        manufacturing. GE ultrafiltration systems consistently deliver water to
        meet your specifications.
      </p>
    </div>
  );
}
