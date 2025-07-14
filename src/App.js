import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Presentations That Speak the CFO & CEO’s Language</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Built by a team of CAs and CFAs who live and breathe finance — we blend strategy, clarity, and visuals into every boardroom-ready deck.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Get a Sample</button>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard title="Strategic & Financial Storytelling" />
          <ServiceCard title="Board Meeting Decks" />
          <ServiceCard title="M&A / Investor Presentations" />
          <ServiceCard title="KPI Dashboards & Data Visuals" />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
        <p className="max-w-2xl mx-auto text-lg">
          We’re a team of Chartered Accountants and CFAs who think in numbers and speak the language of boardrooms. From financial modeling to investor storytelling, we know exactly what to highlight, where to dive deep, and how to make your data compelling.Whether it's a board deck, fundraising pitch, or strategy presentation, we blend analytical depth with design clarity — so your message lands.

You bring the data.
We craft the narrative.

It’s like having a finance brain and a design team in one.


        </p>
      </section>

      {/* Sample Work Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Sample Slides</h2>
        <p className="mb-6">Coming soon: See examples of real-world decks designed for CFOs and finance leaders.</p>
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          [ Slide Previews Placeholder ]
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What People Say</h2>
        <p className="max-w-2xl mx-auto text-lg italic mb-4">“Incredible clarity and polish. Took our raw numbers and turned them into a compelling story.”</p>
        <p className="text-sm font-medium">– CFO of a Hospitality Company in the UAE</p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Next Deck</h2>
        <p className="mb-6">Drop a message or request a sample. I’ll get back to you personally.</p>
        <a
          href="https://calendly.com/akku1291/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Book a Call
        </a>
      </section>
    </div>
  );
}

function ServiceCard({ title }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
