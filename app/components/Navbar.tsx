import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full rounded-b-lgbackdrop-blur-md shadow-md p-2 z-999 text-gray-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          SVC
        </Link>
        <div className="space-x-5">
          <Link href="/" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 transition duration-300 ">Home</Link>
          <Link href="#about" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300">About</Link>
          <Link href="/school" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300">School</Link>
          <Link href="/events" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300">Events</Link>
          <Link href="/dates" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300">Dates & Fees</Link>
        </div>
      </div>
    </nav>
  );
}