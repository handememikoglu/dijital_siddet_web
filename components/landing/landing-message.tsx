import Link from "next/link";

export default function LandingMessage() {
    return (
        <div className="bg-blue-400/20 rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold leading-tight mb-4">Yalnız Değilsin. Yardım Elinin Altında.</h1>
            <p className="mb-4 max-w-2xl mx-auto text-gray-500">Dijital Şiddete mağruz kalıyorsanız veya bir yakınınızın yardıma ihtiyacı olduğunu 
                düşünüyorsanız, size destek olabilecek birçok kaynak bulunmaktadır. Profesyonel yardım ve danışmanlık hizmetlerine
                ulaşmak için aşağıdaki butona tıklayınız.
            </p>
            <div className="p-4">
                <Link href={"/yardim-kaynaklari"} className="bg-blue-700 text-white px-4 py-2 rounded-2xl inline-block">Destek ve Yardım Kaynakları</Link>
            </div>
        </div>
    )
}