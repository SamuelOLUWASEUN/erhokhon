import { Instagram, Linkedin, Twitter } from "lucide-react";

const FOOTER_COLUMNS: readonly { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

const SOCIAL_ICONS: readonly { label: string; icon: typeof Twitter; href: string }[] = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer id="footer" className="relative scroll-mt-20 overflow-hidden border-t border-slate-200 bg-white px-4 pt-16">
      <p
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none text-[8rem] font-bold leading-none text-slate-200/50 sm:text-[12rem]"
        aria-hidden="true"
      >
        Erhokhon
      </p>

      <div className="relative mx-auto max-w-6xl pb-40">
        {/* Brand block */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-1 text-lg font-extrabold tracking-tight text-slate-900">
              Erhokhon
              <span className="text-blue-600">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Precision engineered banking for the digital age. Secure your future
              with the world&apos;s most advanced financial ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-blue-300 hover:text-blue-600 hover:shadow-[0_0_16px_rgba(37,99,235,0.25)]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* 3-column link grid — always 3 across, mobile included */}
        <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} className="min-w-0">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 sm:text-sm">
                {column.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-500 transition-colors hover:text-slate-900 sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-200/60 pt-6">
          <p className="text-xs text-slate-400">© 2026 Erhokhon Inc. All Rights Reserved.</p>
          <p className="mt-1 text-xs text-slate-400">Powered by Firstroom.</p>
        </div>
      </div>
    </footer>
  );
}
