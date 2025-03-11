import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/50 dark:bg-[#242321] backdrop-blur-md shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          SVC
        </Link>
        <div className="space-x-4">
          <ThemeToggle />
          <Link href="/" className="hover:text-[#8c1c13] hover:shadow-[#8c1c13] rounded-full hover:border-b-red-300 transition duration-300 ">Home</Link>
          <Link href="/history" className="hover:text-[#003f88] hover:shadow-pastelPink/50 transition duration-300">History</Link>
          <Link href="/events" className="hover:text-[#8c1c13] hover:shadow-pastelPink/50 transition duration-300">Events</Link>
          <Link href="/about" className="hover:text-[#003f88] hover:shadow-pastelPink/50 transition duration-300">About</Link>
        </div>
      </div>
    </nav>
  );
}