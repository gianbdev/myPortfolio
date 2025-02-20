import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold"><Link href="/">Mi Portfolio</Link></h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
