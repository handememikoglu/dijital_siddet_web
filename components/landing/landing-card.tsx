import { Lock, PhoneCall, ShieldCheck } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Cards from "@/app/data/digitalType.json";

export default function LandingCard(){

    const iconMap = {
        phone: PhoneCall,
        shield: ShieldCheck,
        lock: Lock,
    } as const;

    return (
        <div >
            <h1 className="text-center font-bold text-2xl md:text-3xl leading-tight mb-4">Dijital Şiddet Türleri</h1>
            <div className="flex justify-center items-center gap-10">
                {Cards.map((card) => {
                const Icon = iconMap[card.icon as keyof typeof iconMap];

                return (
                <Card key={card.title} className="w-full max-w-sm p-4">
                <CardHeader className="flex flex-col items-center text-center gap-2">
                    {Icon && <Icon className="w-8 h-8 text-blue-700" />}
                    <CardTitle className="text-lg font-semibold">
                    {card.title}
                    </CardTitle>
                    <CardDescription>
                    {card.description}
                    </CardDescription>
                </CardHeader>
                </Card>
            );
            })}
            </div>
        </div>
    )
}