import Image from "next/image";
import { Download, Globe, Phone} from "lucide-react";
import type { SupportResource } from "@/app/data/supportResources"

function normalizeTel(value: string) {
  // tel: linki için boşluk/parantez vb. temizleyelim
  // +90 555 444 33 22 => +905554443322
  return value.replace(/[^\d+]/g, "");
}

export default function SupportResourceCard({ item }: { item: SupportResource }) {
  const hasPhone = Boolean(item?.phone?.value);
  const hasWebsite = Boolean(item?.website?.url);
  const hasAndroid = !!item.app?.android;
  const hasIOS = !!item.app?.ios;

  const telHref = hasPhone ? `tel:${normalizeTel(item.phone!.value)}` : undefined;

  return (
    <div className="w-full max-w-sm rounded-2xl border bg-white p-5 shadow-sm">
      {/* üst alan */}
      <div className="flex gap-4">
        <div className="h-14 w-14 overflow-hidden rounded-xl bg-neutral-100 flex items-center justify-center">
          {item.logoUrl ? (
            <Image src={item.logoUrl} alt="" width={56} height={56} />
          ) : (
            <span className="text-xs text-neutral-400">Logo</span>
          )}
        </div>

        <div className="min-w-0">
          {item.type && (
            <div className="text-sm text-neutral-500">{item.type}</div>
          )}
          <div className="mt-1 text-lg font-semibold leading-snug text-neutral-900">
            {item.title}
          </div>
        </div>
      </div>

      {item.description && (
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          {item.description}
        </p>
      )}

      {/* alt butonlar */}
      <div className="mt-5 flex gap-3">
        {/* Telefon */}
        {hasPhone ? (
          <a
            href={telHref}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800"
          >
            <Phone className="h-4 w-4" />
            {item.phone!.display}
          </a>
        ) 
        :null}

        {/* Web */}
        {hasWebsite ? (
          <a
            href={item.website!.url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-200 px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-200"
          >
            <Globe className="h-4 w-4" />
            {item.website!.label}
          </a>
        ) : null}

        {(hasAndroid || hasIOS) && (
          <div className="grid grid-cols-2 gap-3">
            {hasAndroid && (
              <a
                href={item.app!.android}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-medium text-white hover:bg-cyan-700"
              >
                <Download className="h-4 w-4" />
                Android
              </a>
            )}

            {hasIOS && (
              <a
                href={item.app!.ios}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                iOS
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
