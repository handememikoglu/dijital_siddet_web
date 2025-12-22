export type SupportResource = {
  id: string;
  type?: string;
  title: string;
  description?: string;
  logoUrl?: string;

  phone?: {
    display: string;
    value: string;
  };

  website?: {
    label: string;
    url: string;
  };

  app?: {
    android?: string;
    ios?: string;
    label?: string;
  };
};



export const supportResources: SupportResource[] = [
  {
    id: "1",
    type: "Resmi Kurum",
    title: "Aile ve Sosyal Hizmetler Bakanlığı",
    description:
      "Sosyal ve psikolojik destek sağlar. Şiddet Önleme ve İzleme Merkezleri (ŞÖNİM) hakkında bilgi alabilirsiniz.",
    logoUrl: "/sonim.jpg",
    phone: { display: "Alo 183", value: "183" },
    website: { label: "Web Sitesi", url: "https://www.aile.gov.tr" },
  },
  {
    id: "2",
    type: "Resmi Kurum",
    title: "EGM Siber Suçlarla Mücadele ",
    description:
      "Dijital ortamda işlenen suçlar, siber zorbalık, dolandırıcılık gibi konularda şikayette bulunabilirsiniz.",
    logoUrl: "/egm.png",
    phone: { display: "Alo 112", value: "112" },
    website: { label: "Web Sitesi", url: "https://www.egm.gov.tr/siber" },
  },
  {
    id: "3",
    type: "Destek Hattı",
    title: "KADES Uygulaması",
    description:
      "Kadınların ve çocukların maruz kaldığı şiddet, taciz gibi kötü eylemleri engellemek adına EGM tarafından hazırlanmış acil müdahale uygulamasıdır.",
    logoUrl: "/kades.jpg",
    app: {
    android: "https://play.google.com/store/apps/details?id=tr.gov.egm.kades&hl=tr",
    ios: "https://apps.apple.com/tr/app/kades/id1360309770?l=tr",
    label: "Uygulamayı İndir",
    },
  },
  {
    id: "4",
    type: "Hukuki Yardım",
    title: "Baroların Adli Yardım Büroları",
    description:
      "Maddi olanağı bulunmayan kişilere Ücretsiz hukuki destek sağlamak amacıyla il büroları bünyesinde hizmet vermektedir.",
    logoUrl: "/baro.png",
    website: { label: "Web Sitesi", url: "https://www.egm.gov.tr/siber" },
  },
  {
    id: "5",
    type: "Sivil Toplum Kuruluşu",
    title: "Mor Çatı Kadın Sığınağı Vakfı",
    description:
      "Kadına yönelik şiddetle mücadele eden, gönüllüleriyle psikolojik, hukuki destek  ve sığınak desteği sağlayan bir kurumdur.",
    logoUrl: "/morcati.jpg",
    website: { label: "Web Sitesi", url: "https://morcati.org.tr/" },
  },
  {
    id: "6",
    type: "Sivil Toplum Kuruluşu",
    title: "Uçan Süpürge Vakfı",
    description:
      "Kadınların güçlenmesi ve toplumsal cinsiyet eşitliği için çalışır. Bilgilendirme ve farkındalık projeleri yürütür.",
    logoUrl: "/supurge.jpg",
    website: { label: "Web Sitesi", url: "https://ucansupurge.org.tr/" },
  },
];
