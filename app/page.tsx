import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full py-20 bg-accent">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Dijital Şiddet Nedir?
          </h1>

          <p className="text-muted-foreground text-lg max-w-md">
            Siber zorbalık, çevrimiçi taciz ve diğer dijital tehdit türleri
            hakkında bilgi edinin ve kendinizi nasıl koruyacağınızı öğrenin. 
            Unutmayın yalnız değilsiniz.
          </p>

          <div className="flex gap-4">
            <a
              href="/"
              className="px-5 py-3 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              Destek Al
            </a>
          </div>
        </div>
        <div>
          <PixelatedCanvas src="/dijital_siddet.png"
          width={450}
        height={300}
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
        className="rounded-xl shadow-lg"/>
        </div>
    </div>
    <div className="mt-20 mx-auto max-w-6xl px-4">
    </div>
    </section>
  );
}
