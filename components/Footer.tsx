import { Instagram, Linkedin, Twitter } from "lucide-react";

const FOOTER_COLUMNS: readonly { title: string; links: string[] }[] = [
  { title: "Product", links: ["Features", "Pricing", "Security"] },
  { title: "Company", links: ["Privacy", "Terms", "Support"] },
];

const SOCIAL_LINKS: readonly { label: string; icon: typeof Twitter; href: string }[] = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white px-4 pt-16">
      <p
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none text-[8rem] font-bold leading-none text-slate-200/50 sm:text-[12rem]"
        aria-hidden="true"
      >
        Erhokhon
      </p>

      <div className="relative mx-auto max-w-6xl pb-40">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-1 text-lg font-extrabold tracking-tight text-slate-900">
              Erhokhon
              <span className="text-blue-600">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Precision engineered banking for the digital age. Secure your future
              with the world&apos;s most advanced financial ecosystem.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
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

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h4 className="text-sm font-semibold text-slate-900">{column.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Connect">
            <h4 className="text-sm font-semibold text-slate-900">Connect</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400">
            © 2026 Erhokhon Inc. All Rights Reserved. Powered by Firstroom.
          </p>
        </div>
      </div>
    </footer>
  );
}
