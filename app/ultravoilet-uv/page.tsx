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
            Ultravoilet (UV)
          </h1>
        </div>
      </div>

      <h1 className="text-blue-500 font-bold text-xl text-center mt-4">
        What is Ultraviolet
      </h1>
      <p className="p-4 font-light text-center">
        Ultraviolet water purification lamps produce UV-C or “germicidal UV,”
        radiation of much greater intensity than sunlight. Almost all of a UV
        lamp’s output is concentrated in the 254 nanometers (nm) region in order
        to take full advantage of the germicidal properties of this wavelength.
        Most ultraviolet purification systems are combined with various forms of
        filtration, as UV light is only capable of killing microorganisms such
        as bacteria, viruses, molds, algae, yeast, and oocysts like
        cryptosporidium and giardia. UV light generally has no impact on
        chlorine, VOCs, heavy metals, and other chemical contaminants.
        Nevertheless, it is probably the most cost effective and efficient
        technology available to homeowners to eliminate a wide range of
        biological contaminants from their water supply.
      </p>
      <p className="p-4 font-light text-center">
        Ultraviolet purification uses a UV light source (lamp) which is enclosed
        in a protective transparent sleeve (usually quartz). The lamp is mounted
        such that water passing through a flow chamber is exposed to the UV-C
        light rays. When harmful microbes are exposed to the UV rays, their
        nucleic acid absorbs the UV energy, which then scrambles the DNA
        structure of the organism. The cell is rendered sterile and can no
        longer reproduce. The cell is now considered dead and is no longer a
        threat.
      </p>
    </div>
  );
}
