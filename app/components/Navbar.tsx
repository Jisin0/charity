import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full rounded-b-lgbackdrop-blur-xl backdrop-blur-sm shadow-md z-999 bg-gray-50/10 text-gray-50 text-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Logo" height={75} width={75} />
        </Link>
        <div className="space-x-5">
          <Link href="/" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 transition duration-300 text-gray-900">Home</Link>
          <Link href="/#about" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300 text-gray-900">About</Link>
          <Link href="/school" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300 text-gray-900">School</Link>
          <Link href="/events" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300 text-gray-900">Events</Link>
          <Link href="/dates" className="hover:text-[#86402b] rounded-lg px-1.5 py-1.5 hover:bg-gray-200/30 hover:shadow-pastelPink/50 transition duration-300 text-gray-900">Dates & Fees</Link>
        </div>
      </div>
    </nav>
  );
}