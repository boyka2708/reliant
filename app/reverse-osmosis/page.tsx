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
            Reverse Osmosis (RO)
          </h1>
        </div>
        </div>
        <h1 className="text-blue-500 font-bold text-xl text-center mt-4">What is Reverse Osmosis?</h1>
        <p className="p-4 font-light text-center">
          Reverse osmosis (RO) is a filtration method that removes many types of
          large molecules and ions from solutions by applying pressure to the
          solution when it is on one side of a selective membrane. The result is
          that the solute is retained on the pressurized side of the membrane
          and the pure solvent is allowed to pass to the other side. To be
          “selective,” this membrane should not allow large molecules or ions
          through the pores (holes), but should allow smaller components of the
          solution (such as the solvent) to pass freely. In the normal osmosis
          process the solvent naturally moves from an area of low solute
          concentration, through a membrane, to an area of high solute
          concentration. The movement of a pure solvent to equalize solute
          concentrations on each side of a membrane generates a pressure and
          this is the “osmotic pressure.” Applying an external pressure to
          reverse the natural flow of pure solvent, thus, is reverse osmosis.
          The process is similar to membrane filtration. However, there are key
          differences between reverse osmosis and filtration. The predominant
          removal mechanism in membrane filtration is straining, or size
          exclusion, so the process can theoretically achieve perfect exclusion
          of particles regardless of operational parameters such as influent
          pressure and concentration. Reverse osmosis, however, involves a
          diffusive mechanism so that separation efficiency is dependent on
          solute concentration, pressure, and water flux rate.[1] Reverse
          osmosis is most commonly known for its use in drinking water
          purification from seawater, removing the salt and other substances
          from the water molecules.
        </p>

        <h1 className="text-blue-500 font-bold text-xl text-center mt-4">Benifits Reverse Osmosis</h1>
        <p className="p-4 font-light text-center">
          When trying to find a water filter system for the office or house, it
          is usually helpful to check out reverse osmosis water filter reviews
          to see what brands or types of reverse osmosis water filters are
          available on the market and which ones have been verified by a water
          purification organization. There are numerous forms of reverse osmosis
          water filters, like the countertop reverse osmosis water filter, so
          the type of filter fits the family or office’s lifestyle and
          requirements.
        </p>

        <h1 className="text-blue-500 font-bold text-xl text-center mt-4">Types of Systems</h1>
        <p className="p-4 font-light text-center">
          Reverse osmosis water filter reviews give useful information about
          what a reverse osmosis water filter does and the advantages of that
          filter versus some of the other filters on the market. A reverse
          osmosis water filter uses a fine membrane to clean the water. This
          allows the reverse osmosis water filter to sift out mineral, chemicals
          and dangerous metals from the water.
        </p>
        <p className="p-4 font-light text-center">
          Reverse osmosis water filter reviews will also warn that a
          pre-filtration system might have to be purchased in addition to the
          reverse osmosis water filter if there is a high chlorine count in the
          water. The reason for this is that the membrane used in a reverse
          osmosis water filter system is really delicate and the chlorine in
          water can eat away at it and ruin the filter.
        </p>
        <p className="p-4 font-light text-center">
          You will find three main kinds of reverse osmosis water filters
          mentioned in reverse osmosis water filter reviews. The first kind is
          the countertop water filtration system. This kind of system has a
          filtration device that sits on the countertop as its name implies. It
          is then hooked to the faucet so that water can flow into the system
          and keep the tank filled to capacity with filtered water. Although the
          system utilizes the same process of reverse osmosis, it is clumsy and
          bulky since it sits on the countertop that is taking up space and also
          only holding a great amount of water at a time. This is the least
          preferred model in most reviews.
        </p>
        <p className="p-4 font-light text-center">
          This kind is almost in the same price bracket as the countertop
          systems, but the device is saved in the cabinet beneath the sink. The
          system is hooked in the water pipe under the sink by a plumbing
          technician and a new faucet is set up that will pump the purified
          water; leave the main faucet to be used with the unfiltered water.
          This system allows for unlimited amounts of purified water to be used
          during a day.
        </p>
        <p className="p-4 font-light text-center">
          The other type of system mentioned in reverse osmosis water filter
          reviews is the point of entry system that is hooked in the water main
          for the house or office. This type of system is costlier and also has
          to be set up by a plumbing technician. Even though it is a good
          system, sometimes the cost could be a hindrance from use.
        </p>
    </div>
  );
}
