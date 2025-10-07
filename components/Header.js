import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur border-b border-teal-500/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/whp5h8ky/Gemini-Generated-Image-e7auwie7auwie7au.png"
              alt="Dar ul Uloom Discord"
              className="h-10 w-10 rounded-full ring-2 ring-teal-400/60 shadow-[0_0_20px_rgba(45,212,191,0.35)]"
            />
            <span className="text-xl font-semibold tracking-wide text-white">
              <span className="text-teal-300">Dar ul Uloom</span>{' '}
              <span className="text-fuchsia-300">Discord</span>
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/books"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Books
            </Link>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-teal-500/40 bg-gray-800/50 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(45,212,191,0.25)] transition-all hover:bg-gray-800 hover:border-teal-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.35)]"
            >
              <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)] group-hover:bg-fuchsia-400 group-hover:shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
              Join Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}