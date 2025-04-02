import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-amber-100 p-4 shadow-md flex gap-4 justify-center">
      <Link href="/" className="text-amber-900 font-semibold">Home</Link>
      <Link href="/about" className="text-amber-900 font-semibold">About</Link>
      <Link href="/shop" className="text-amber-900 font-semibold">Shop</Link>
      <Link href="/contact" className="text-amber-900 font-semibold">Contact</Link>
    </nav>
  );
}
