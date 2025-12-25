import {
  Ban,
  ComputerIcon,
  EyeIcon,
  IdCard,
  LifeBuoy,
  MessageSquareWarning,
  OctagonAlert,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Types from "@/app/data/digitalType.json";
import Cards from "@/app/data/protectCard.json";

export default function LandingCard() {
  const iconMap = {
    card: IdCard,
    alert: OctagonAlert,
    eye: EyeIcon,
    message: MessageSquareWarning,
    computer: ComputerIcon,
    life: LifeBuoy,
    ban: Ban,
  } as const;

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-2xl sm:text-3xl leading-tight mb-6">
        Dijital Şiddet Türleri
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
        {Types.map((type) => {
          const Icon = iconMap[type.icon as keyof typeof iconMap];

          return (
            <Card
              key={type.title}
              className="h-full p-4 flex flex-col rounded-2xl"
            >
              <CardHeader className="flex flex-col items-center text-center gap-2 flex-1">
                {Icon && <Icon className="w-8 h-8 text-blue-700" />}

                <CardTitle className="text-lg font-semibold">
                  {type.title}
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <h2 className="text-center font-bold text-2xl sm:text-3xl leading-tight mb-6">
        Ne Yapabilirsin?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Cards.map((card) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap];

          return (
            <Card
              key={card.title}
              className="w-full p-4 rounded-2xl"
            >
              <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-3 text-left">
                {Icon && (
                  <div className="shrink-0">
                    <Icon className="w-9 h-9 text-blue-700 bg-blue-400/20 p-2 rounded-full" />
                  </div>
                )}

                <div className="min-w-0">
                  <CardTitle className="text-lg font-semibold">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardFooter className="pt-0">
                <CardDescription className="text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
