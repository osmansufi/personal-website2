const socials = [
  { label: "GitHub", href: "https://github.com/osmansufi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/osman-sufi-1630aa68/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Osman Sufi</p>
        <ul className="flex gap-6">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
