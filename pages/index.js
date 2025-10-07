import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-fuchsia-400 to-teal-300 bg-clip-text text-transparent">
              Welcome to Dar ul Uloom Discord
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A community for learning, discussion, and spiritual growth.
          </p>

          <div className="mt-8">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 rounded-md border border-teal-500/40 bg-gray-800/50 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(45,212,191,0.25)] transition-all hover:bg-gray-800 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.35)]"
            >
              Explore the Library
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 111.414-1.414l4.243 4.243a1 1 0 010 1.414l-4.243 4.243a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Digital Library */}
          <div
            className={`rounded-xl border border-teal-500/30 bg-gray-900/60 p-6 shadow-[0_0_35px_rgba(45,212,191,0.15)] transform transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/40 shadow-[0_0_15px_rgba(45,212,191,0.35)]">
                📚
              </div>
              <h3 className="text-xl font-semibold">Digital Library</h3>
            </div>
            <p className="mt-3 text-gray-300">
              Access a wide range of Islamic books and scholarly works.
            </p>
            <Link
              href="/books"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-fuchsia-500/40 bg-gray-800/50 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(217,70,239,0.25)] transition-all hover:bg-gray-800 hover:border-teal-400 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]"
            >
              Go to Books
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
            </Link>
          </div>

          {/* Community & Events */}
          <div
            className={`rounded-xl border border-teal-500/30 bg-gray-900/60 p-6 shadow-[0_0_35px_rgba(45,212,191,0.15)] transform transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-300 ring-1 ring-fuchsia-500/40 shadow-[0_0_15px_rgba(217,70,239,0.35)]">
                🗓️
              </div>
              <h3 className="text-xl font-semibold">Community &amp; Events</h3>
            </div>
            <p className="mt-3 text-gray-300">
              Join live discussions and workshops with students and community members.
            </p>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-teal-500/40 bg-gray-800/50 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(45,212,191,0.25)] transition-all hover:bg-gray-800 hover:border-fuchsia-400 hover:shadow-[0_0_25px_rgba(217,70,239,0.35)]"
            >
              View Events
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-fuchsia-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 2a1 1 0 000 2h8a1 1 0 100-2H6zM3 7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm3 2v2h2V9H6zm0 4v2h2v-2H6zm4-4v2h2V9h-2zm0 4v2h2v-2h-2z" />
              </svg>
            </a>
          </div>

          {/* Discord Server */}
          <div
            className={`rounded-xl border border-teal-500/30 bg-gray-900/60 p-6 shadow-[0_0_35px_rgba(45,212,191,0.15)] transform transition-all ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/40 shadow-[0_0_15px_rgba(45,212,191,0.35)]">
                💬
              </div>
              <h3 className="text-xl font-semibold">Discord Server</h3>
            </div>
            <p className="mt-3 text-gray-300">
              Connect with others and become part of our online family.
            </p>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-fuchsia-500/40 bg-gray-800/50 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(217,70,239,0.25)] transition-all hover:bg-gray-800 hover:border-teal-400 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]"
            >
              Join Discord
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm5 3a1 1 0 100 2h6a1 1 0 100-2H7z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}