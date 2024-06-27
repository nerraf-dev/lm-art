import Image from "next/image";

export default function Commissions() {
  return (
    <main className="flex flex-col justify-center items-center px-12 sm:px-24 pt-6 about">
      <h1 className="text-xl">Commissions</h1>

      <div className="commissions">
        <div className="comms-sm"><p className="label">Small</p></div>
        <div className="comms-md"><p className="label">Medium</p></div>
        <div className="comms-lg"><p className="label">Large</p></div>
      </div>

    </main>
  );
}
