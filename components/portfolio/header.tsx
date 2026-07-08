import { Mail, Menu, Phone, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type HeaderProps = {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Header({ activeSection, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="topbar">
      <nav className="topbar-inner" aria-label="Main navigation">
        <a className="brand-mark" href="#home" onClick={() => setMenuOpen(false)}>
          PZ
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} className={cn(activeSection === link.href && "nav-active")} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="topbar-actions">
          <a href={`mailto:${profile.email}`} aria-label="Email Pyae Zaw">
            <Mail size={17} />
          </a>
          <a href={`tel:${profile.phone}`} aria-label="Call Pyae Zaw">
            <Phone size={17} />
          </a>
          <button aria-expanded={menuOpen} aria-label="Toggle navigation menu" onClick={() => setMenuOpen(!menuOpen)} type="button">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <div className={cn("mobile-drawer", menuOpen && "mobile-drawer-open")}>
        {navLinks.map((link) => (
          <a key={link.href} className={cn(activeSection === link.href && "nav-active")} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
