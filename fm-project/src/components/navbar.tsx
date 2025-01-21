import { navConfig } from "@/config/navConfig";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex bg-white text-black mt-2 shadow-sm border-b-[1px] border-gray-200">
      <div className="flex justify-center items-center w-2-12 ml-4">
        <h1 className="text-xl font-bold">FitManager</h1>
      </div>
      <div className="flex w-11/12 justify-end items-center mr-4">
        {navConfig.map((navLink) => {
            if (navLink.id !== 5 && navLink.id !== 6) {
                return (
                    <Link className="p-2 pt-4 pb-4 ml-4" key={navLink.id} href={navLink.href}>{navLink.name}</Link>
                )
            } else {
                if (navLink.id === 5) {
                    return (
                        <Link className="w-[10rem] text-center p-1 ml-4 bg-gray-300 hover:bg-gray-200 transition duration-300 ease rounded-lg border-[1px] border-black" key={navLink.id} href={navLink.href}>{navLink.name}</Link>
                    )
                } else {
                    return (
                        <Link className="w-[10rem] text-center text-gray-100 p-1 ml-4 bg-black hover:bg-gray-800 rounded-lg border-b-2 border-black" key={navLink.id} href={navLink.href}>{navLink.name}</Link>
                    )
                }
            }
        })}
        </div>
        {/* <div className="w-0/12 flex justify-end mr-4">
            <Link className="p-2 border-b-2 border-black rounded-full" href="/login">Profile</Link>
      </div> */}
    </div>
  );
}