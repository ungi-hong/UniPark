import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-4 text-xs text-zinc-600">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
        <div>
          <p>© 2026 UniPark</p>
        </div>
        <nav className="flex gap-4">
          <Link
            href="/about"
            className="hover:text-zinc-900 hover:underline"
          >
            このアプリについて
          </Link>
          <a
            href="https://github.com/ungi-hong/unipark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 hover:underline"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
