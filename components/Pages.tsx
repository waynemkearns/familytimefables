// About Page
export function About() {
  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-4xl font-bold text-amber-900 mb-4">About Us</h1>
      <p className="text-amber-800 text-lg max-w-2xl">
        Family Time Fables was born from a love of storytelling and a deep respect for Irish folklore. Our goal is to preserve these timeless tales and bring families together through storytime.
        Every book is lovingly illustrated and written with heart, imagination, and a splash of magic.
      </p>
    </main>
  );
}

// Shop Page
export function Shop() {
  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-4xl font-bold text-amber-900 mb-4">Books & Tales</h1>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-amber-900">Cú Chulainn</h2>
          <p className="text-amber-800">A tale of bravery and destiny from ancient Ulster.</p>
        </li>
        <li className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-amber-900">Fionn & the Dragon</h2>
          <p className="text-amber-800">Young Fionn MacCumhaill battles a fierce dragon to protect his kin.</p>
        </li>
        <li className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-amber-900">Salmon of Knowledge</h2>
          <p className="text-amber-800">Wisdom lies in the river's heart in this mystical legend.</p>
        </li>
      </ul>
    </main>
  );
}

// Contact Page
export function Contact() {
  return (
    <main className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-4xl font-bold text-amber-900 mb-4">Contact Us</h1>
      <p className="text-amber-800 text-lg mb-4 max-w-xl">
        We'd love to hear from you! Send us an email at <a href="mailto:info@familytimefables.ie" className="text-amber-700 underline">info@familytimefables.ie</a>
        or use the form below to reach out.
      </p>
      <form className="bg-white p-6 rounded-xl shadow max-w-xl">
        <input type="text" placeholder="Your Name" className="w-full mb-3 p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full mb-3 p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full mb-3 p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700">
          Send Message
        </button>
      </form>
    </main>
  );
}
