import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-4xl font-bold">CEO Deck Studio</h1>
        <p className="text-lg mt-2">Premium Presentations for CEOs & CFOs</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Request a Sample
        </button>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>I help business leaders tell powerful stories through custom, visually stunning presentations.</p>
      </section>

      <section className="p-10 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <p>Deck samples coming soon...</p>
      </section>

      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="italic">"Akanksha transformed our board presentation — game changer!"</blockquote>
      </section>

      <section className="p-10 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input className="w-full border p-2" placeholder="Your name" />
          <input className="w-full border p-2" placeholder="Email" />
          <textarea className="w-full border p-2" placeholder="What do you need?" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>

      <footer className="bg-gray-200 text-center p-4">
        © 2025 CEO Deck Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;