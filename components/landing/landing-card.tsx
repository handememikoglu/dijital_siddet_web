import { Lock, PhoneCall, ShieldCheck } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Types from "@/app/data/digitalType.json";
import Cards from "@/app/data/protectCard.json";


export default function LandingCard(){

    const iconMap = {
        phone: PhoneCall,
        shield: ShieldCheck,
        lock: Lock,
    } as const;

    return (
        <div >
            <h1 className="text-center font-bold text-2xl md:text-3xl leading-tight mb-4">Dijital Şiddet Türleri</h1>
            <div className="flex justify-center items-center gap-10 pb-20">
                {Types.map((type) => {
                const Icon = iconMap[type.icon as keyof typeof iconMap];

                return (
                <Card key={type.title} className="w-full max-w-sm p-4">
                <CardHeader className="flex flex-col items-center text-center gap-2">
                    {Icon && <Icon className="w-8 h-8 text-blue-700" />}
                    <CardTitle className="text-lg font-semibold">
                    {type.title}
                    </CardTitle>
                    <CardDescription>
                    {type.description}
                    </CardDescription>
                </CardHeader>
                </Card>
            );
            })}
            </div>
            <h1 className="text-center font-bold text-2xl md:text-3xl leading-tight mb-4">Ne Yapabilirsin?</h1>
            <div className="flex justify-center items-center gap-10">
                {Cards.map((card)=> {
                    const Icon = iconMap[card.icon as keyof typeof iconMap];
                    return (
                        <Card key={card.title} className="w-full max-w-2xl p-4 mb-6 mx-auto">
                            <CardHeader className="flex  items-center text-left gap-2">
                            {Icon && <Icon className="w-8 h-8 text-blue-700 bg-blue-400/20 p-2 rounded-full" />}
                            <CardTitle className="text-lg font-semibold">
                            {card.title}
                            </CardTitle>
                            </CardHeader>
                            <CardFooter className="text-left">
                                <CardDescription>
                                {card.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}