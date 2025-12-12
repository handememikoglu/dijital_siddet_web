import { Menubar } from "@radix-ui/react-menubar";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { MenubarMenu, MenubarTrigger } from "../ui/menubar";
import QuikExitButton from "../ui/quikExitButton";

export default function Header(){
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

        <Menubar className="hidden md:flex rounded-full border bg-background/80 px-2">
          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-1">
              Dijital Şiddet Nedir?
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-1">
              Yardım Kaynakları
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-1">
              Haklarım
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex items-center gap-1 bg-red-600/80 text-white">
              <QuikExitButton/>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>


        {/* Mobil için basit menü (şimdilik sadece placeholder) */}
        <div className="md:hidden text-xs text-muted-foreground">
          Menü
        </div>
      </div>
    </header>
    )
}