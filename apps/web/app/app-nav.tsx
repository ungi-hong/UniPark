"use client";

import { Accessibility, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function AppNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isParkingPage =
    pathname === "/" ||
    pathname.startsWith("/list") ||
    pathname.startsWith("/parking");
  const isFacilityPage = pathname.startsWith("/facilities");

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="UniPark ホーム"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Accessibility aria-hidden="true" />
          </span>
          <span>Uni<span>Park</span></span>
        </Link>

        <nav aria-label="メインナビゲーション" className="site-desktop-nav">
          <Link
            href="/facilities"
            aria-current={isFacilityPage ? "page" : undefined}
            className={isFacilityPage ? "nav-active" : undefined}
          >
            施設を探す
          </Link>
          <Link
            href="/"
            aria-current={isParkingPage ? "page" : undefined}
            className={isParkingPage ? "nav-active" : undefined}
          >
            駐車場を探す
          </Link>
          <Link
            href="/about"
            aria-current={pathname.startsWith("/about") ? "page" : undefined}
            className={pathname.startsWith("/about") ? "nav-active" : undefined}
          >
            このサイトについて
          </Link>
        </nav>

        <button
          type="button"
          className="header-menu"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="モバイルナビゲーション"
        className={`site-mobile-nav ${menuOpen ? "is-open" : ""}`}
      >
        <Link href="/facilities" onClick={closeMenu}>施設を探す</Link>
        <Link href="/" onClick={closeMenu}>駐車場を探す</Link>
        <Link href="/about" onClick={closeMenu}>このサイトについて</Link>
      </nav>
    </header>
  );
}
