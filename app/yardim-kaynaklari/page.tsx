import { supportResources } from "@/app/data/supportResources";
import SupportResourceCard from "@/components/SupportResourceCard";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Yardım ve Destek Kaynakları</h1>
      <p className="text-gray-600 max-w-xl">Yalnız değilsiniz. Dijital şiddetle karşılaştığınızda başvurabileceğiniz güvenilir kurumlar ve destek hatları burada.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {supportResources.map((item) => (
          <SupportResourceCard
            key={item.id}
            item={item}  
          />
        ))}
      </div>
    </main>
  );
}
