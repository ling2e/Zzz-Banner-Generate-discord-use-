import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      <div className="absolute z-[52] bottom-4 left-1/2 -transalte-x-1/2">
        <button className="rounded-full p-6 bg-blue-600 active:bg-blue-500 hover:bg-blue-700">
          <BiMenu color="white" size={35} />
        </button>
        <section id="menu" className="py-2 px-4 flex flex-nowrap absolute bg-blue-700 top-1/2">
          
        </section>
      </div>
    </>
  );
}
