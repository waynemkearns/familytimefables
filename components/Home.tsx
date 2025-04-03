import { Mail, ShoppingCart, Info } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FamilyTimeFables() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 p-6">
      <section className="text-center py-12">
        <motion.h1 
          className="text-5xl font-bold mb-4 text-amber-900"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
        >
          Family Time Fables
        </motion.h1>
        <motion.p 
          className="text-lg text-amber-800 max-w-xl mx-auto"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
        >
          Discover timeless Celtic stories reimagined for modern families. Snuggle up and explore tales of myth, magic, and bravery.
        </motion.p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 py-10">
        <div className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="text-2xl font-semibold text-amber-900 mb-2">All About Us</h2>
          <p className="text-amber-800 text-base mb-4">
            Learn how Family Time Fables began and meet the storyteller behind the magic. A labor of love, rooted in Irish tradition.
          </p>
          <Link href="/about">
            <button className="w-full border border-amber-600 text-amber-700 px-4 py-2 rounded flex items-center justify-center gap-2">
              <Info size={16} /> Learn More
            </button>
          </Link>
        </div>

        <div className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="text-2xl font-semibold text-amber-900 mb-2">Books & Tales</h2>
          <p className="text-amber-800 text-base mb-4">
            Explore our growing collection of illustrated Celtic tales including Cú Chulainn, Fionn & the Dragon, and more.
          </p>
          <Link href="/shop">
            <button className="w-full bg-amber-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-amber-700">
              <ShoppingCart size={16} /> Shop Now
            </button>
          </Link>
        </div>

        <div className="rounded-2xl shadow-md bg-white p-6">
          <h2 className="text-2xl font-semibold text-amber-900 mb-2">Say Hello</h2>
          <p className="text-amber-800 text-base mb-4">
            We’d love to hear from you. Send us your thoughts, feedback, or just say hi — we’re only an email away.
          </p>
          <Link href="/contact">
            <button className="w-full border border-amber-600 text-amber-700 px-4 py-2 rounded flex items-center justify-center gap-2">
              <Mail size={16} /> Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
