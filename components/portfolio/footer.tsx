import { profile, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <span>{profile.title}</span>
      </div>
      <nav aria-label="Social links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
