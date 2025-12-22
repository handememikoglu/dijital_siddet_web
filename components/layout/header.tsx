"use client";

import Link from "next/link";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import QuikExitButton from "../ui/quikExitButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Dijital Şiddet Nedir?", href: "/dijital-siddet-nedir" },
    { label: "Yardım Kaynakları", href: "/yardim-kaynaklari" },
    { label: "Haklarım", href: "/haklarim" },
  ];

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">

        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 text-background shadow-md">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight group-hover:opacity-90">
              Dijital Güvenli Alan
            </span>
            <span className="text-[11px] text-muted-foreground">
              Dijital şiddete karşı farkındalık ve destek
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
             <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive
                  ? "text-blue-600 "
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              {item.label}
            </Link>
            )
          })}

          <QuikExitButton />
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted transition"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <QuikExitButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
