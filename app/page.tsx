import LandingCard from "@/components/landing/landing-card";
import LandingMessage from "@/components/landing/landing-message";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full bg-accent py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Dijital Şiddet Nedir?
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-none md:max-w-md">
              Siber zorbalık, çevrimiçi taciz ve diğer dijital tehdit türleri
              hakkında bilgi edinin ve kendinizi nasıl koruyacağınızı öğrenin.
              Unutmayın yalnız değilsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/yardim-kaynaklari"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-xl bg-blue-700 text-white hover:bg-blue-500/90 transition"
              >
                Destek Al
              </Link>
            </div>
          </div>

          <div className="hidden md:block w-full">
            <div className="mx-auto w-full ">
              <PixelatedCanvas
                src="/dijital_siddet.png"
                width={520}
                height={360}
                cellSize={4}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.1}
                interactive
                distortionStrength={0.1}
                distortionRadius={200}
                distortionMode="repel"
                followSpeed={0.2}
                jitterStrength={4}
                jitterSpeed={1}
                sampleAverage
                className="md:w-full h-auto rounded-xl shadow-lg "
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-red-400/30 px-4 py-3 text-sm sm:text-base leading-relaxed">
          <p >
            Sosyal medya hesaplarından faili teşhir etme kararı alabilirsiniz.
            <span className="ml-2 font-medium">
              #tacizvar #tacizesesver #sendeanlat #susmabitsin
            </span>
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <LandingCard />
        </div>

        <div className="mt-12 sm:mt-20">
          <LandingMessage />
        </div>
      </div>
    </section>
  );
}
