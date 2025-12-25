// app/haklarim/data.ts

export type Clause = {
  label?: string; // "(1)" gibi
  text: string;
  penalty: string;
};

export type LawItem = {
  id: string; // unique
  title: string;
  law: string; // "TCK 134"
  summary: string;
  tags?: string[];
  clauses: Clause[];
};

export const LAW_ITEMS: LawItem[] = [
  {
    id: "tck-123-israrli-takip",
    title: "Israrlı Takip",
    law: "TCK 123",
    summary: "Kişilerin huzur ve sükununu bozma",
    tags: ["Şikayete bağlı"],
    clauses: [
      {
        text: "Mağdurun şikayeti üzerine soruşturulur.",
        penalty: "3 aydan 1 yıla kadar hapis",
      },
    ],
  },
  {
    id: "tck-132-haberlesmenin-gizliligi",
    title: "Haberleşmenin Gizliliğini İhlal",
    law: "TCK 132",
    summary: "Özel yazışmaların/görüntülerin ifşası ve haberleşme içerikleri",
    tags: ["Haberleşme", "İfşa"],
    clauses: [
      {
        label: "(1)",
        text: "Kişiler arasındaki haberleşmenin gizliliğini ihlal etmek.",
        penalty: "1 yıldan 3 yıla kadar hapis",
      },
      {
        label: "(2)",
        text: "İhlalin haberleşme içeriklerinin kaydı suretiyle gerçekleşmesi.",
        penalty: "Ceza 1 kat artırılır",
      },
      {
        label: "(3)",
        text: "Kişiler arasındaki haberleşme içeriklerini hukuka aykırı olarak ifşa etmek.",
        penalty: "2 yıldan 5 yıla kadar hapis",
      },
      {
        label: "(4)",
        text: "Kendisiyle yapılan haberleşmelerin içeriğini diğer tarafın rızası olmaksızın hukuka aykırı olarak alenen ifşa etmek; basın-yayın yoluyla yayımlanması.",
        penalty: "1 yıldan 3 yıla kadar hapis",
      },
    ],
  },
  {
    id: "tck-133-konusmalarin-dinlenmesi",
    title: "Konuşmaların Dinlenmesi ve Kayda Alınması",
    law: "TCK 133",
    summary: "Aleni olmayan konuşmaların dinlenmesi/kaydı ve verilerin ifşası",
    tags: ["Dinleme", "Kayıt"],
    clauses: [
      {
        label: "(1)",
        text: "Aleni olmayan konuşmaları, taraflardan herhangi birinin rızası olmaksızın bir aletle dinlemek veya bunları bir ses alma cihazı ile kaydetmek.",
        penalty: "6 aydan 2 yıla kadar hapis veya adlî para cezası",
      },
      {
        label: "(2)",
        text: "Katıldığı aleni olmayan bir söyleşiyi, diğer konuşanların rızası olmadan ses alma cihazı ile kaydetmek.",
        penalty: "2 yıldan 5 yıla kadar hapis ve 4000 güne kadar adlî para cezası",
      },
      {
        label: "(3)",
        text: "Kaydedilen konuşmaların verilerini hukuka aykırı olarak ifşa etmek.",
        penalty: "2 yıldan 5 yıla kadar hapis ve 4000 güne kadar adlî para cezası",
      },
    ],
  },
  {
    id: "tck-134-ozel-hayat",
    title: "Özel Hayatın Gizliliğini İhlal",
    law: "TCK 134",
    summary:
      "Mahrem görüntü/ses üzerinden paylaşma veya paylaşmakla tehdit (siber sömürü/cinsel içerikli şantaj senaryoları dahil)",
    tags: ["Mahremiyet", "Görüntü/Ses"],
    clauses: [
      {
        label: "(1)",
        text: "Kişilerin özel hayatının gizliliğini ihlal etmek.",
        penalty: "1 yıldan 3 yıla kadar hapis",
      },
      {
        label: "(2)",
        text: "Görüntü veya ses kaydı alarak gizlilik ihlali.",
        penalty: "Ceza 1 kat artırılır",
      },
      {
        label: "(3)",
        text: "Kişilerin özel hayatına ilişkin görüntü veya sesleri hukuka aykırı olarak ifşa etmek; basın ve yayın yoluyla yayımlanması.",
        penalty: "2 yıldan 5 yıla kadar hapis",
      },
    ],
  },
  {
    id: "tck-106-tehdit",
    title: "Tehdit",
    law: "TCK 106",
    summary: "Mahrem içerikle tehdit dahil, farklı tehdit türleri ve nitelikli haller",
    tags: ["Nitelikli hal"],
    clauses: [
      {
        label: "(1)",
        text: "Bir başkasını, kendisinin veya yakınının hayatına, vücut veya cinsel dokunulmazlığına yönelik bir saldırı gerçekleştireceğinden bahisle tehdit etmek.",
        penalty: "6 aydan 2 yıla kadar hapis",
      },
      {
        label: "(2)",
        text: "Malvarlığı itibarıyla büyük bir zarara uğratacağından veya sair bir kötülük edeceğinden bahisle tehdit.",
        penalty: "6 aya kadar hapis veya adlî para cezası",
      },
      {
        label: "(3)",
        text: "Tehdidin; silahla, kimliğini gizleyerek, birden fazla kişiyle birlikte veya örgüt korkutucu gücüyle vb. işlenmesi (nitelikli haller).",
        penalty: "2 yıldan 5 yıla kadar hapis",
      },
    ],
  },
  {
    id: "tck-125-hakaret",
    title: "Hakaret",
    law: "TCK 125",
    summary: "Onur/şeref/saygınlığa saldırı; iletiyle işlenmesi",
    tags: ["Yazılı/Sesli/Görüntülü"],
    clauses: [
      {
        label: "(1)",
        text: "Bir kimseye onur, şeref ve saygınlığını rencide edebilecek nitelikte somut bir fiil veya olgu isnat etmek veya sövmek suretiyle saldırmak.",
        penalty: "3 aydan 2 yıla kadar hapis veya adlî para cezası",
      },
      {
        label: "(2)",
        text: "Fiilin, mağduru muhatap alan sesli, yazılı veya görüntülü bir iletiyle işlenmesi.",
        penalty: "3 aydan 2 yıla kadar hapis veya adlî para cezası",
      },
    ],
  },
  {
    id: "tck-105-cinsel-taciz",
    title: "Cinsel Taciz",
    law: "TCK 105",
    summary: "Rıza dışı mesajlar/cinsel içerikler; çocuğa karşı ve nitelikli haller",
    tags: ["Nitelikli hal", "Çocuk"],
    clauses: [
      {
        label: "(1)",
        text: "Bir kimseyi cinsel amaçlı olarak taciz etmek.",
        penalty: "3 aydan 2 yıla kadar hapis veya adlî para cezası",
      },
      {
        label: "(2)",
        text: "Fiilin çocuğa karşı işlenmesi.",
        penalty: "6 aydan 3 yıla kadar hapis",
      },
      {
        label: "(3)",
        text: "Kamu görevi/hizmet ilişkisi, aile içi ilişki, işyeri, elektronik haberleşme araçları kolaylığı, teşhir vb. nitelikli haller.",
        penalty: "Ceza yarı oranında artırılır",
      },
    ],
  },
  {
    id: "tck-135-kisisel-verilerin-kaydedilmesi",
    title: "Kişisel Verilerin Kaydedilmesi",
    law: "TCK 135",
    summary:
      "Parola ele geçirip hesaplara girme, izinsiz cihaz bilgilerine bakma gibi gizlilik ihlali senaryoları",
    tags: ["Kişisel veri"],
    clauses: [
      {
        label: "(1)",
        text: "Hukuka aykırı olarak kişisel verileri kaydetmek.",
        penalty: "1 yıldan 3 yıla kadar hapis",
      },
      {
        label: "(2)",
        text: "Verinin; siyasi/felsefi/dini görüş, ırki köken, ahlaki eğilim, cinsel yaşam, sağlık, sendikal bağlantı gibi özel nitelikli olması.",
        penalty: "Ceza yarı oranında artırılır",
      },
    ],
  },
  {
    id: "tck-136",
    title: "Verileri hukuka aykırı olarak verme veya ele geçirme",
    law: "TCK Madde 136",
    summary:
      "Kişisel verileri, hukuka aykırı olarak bir başkasına vermek, yaymak veya ele geçirmek",
    tags: ["Kişisel veri"],
    clauses: [
      {
        label: "(1)",
        text: "Kişisel verileri, hukuka aykırı olarak bir başkasına vermek, yaymak veya ele geçirmek",
        penalty: "İki yıldan dört yıla kadar hapis cezası",
      },
      {
        label: "(2)",
        text: " Suçun konusunun, TCK 236/5-6 fıkraları uyarınca kayda alınan beyan ve görüntüler olması ",
        penalty: "Ceza bir kat artırılır.",
      },
    ],
  },
  {
    id: "tck-137",
    title: "Nitelikli haller",
    law: " TCK Madde 137",
    summary:
      "Yukarıdaki maddelerde tanımlanan suçların;",
    tags: ["Kişisel veri"],
    clauses: [
      {
        label: "(1)",
        text: "Kamu görevlisi tarafından ve görevinin verdiği yetki kötüye kullanılmak suretiyle",
        penalty: "Verilecek ceza yarı oranında artırılır.",
      },
      {
        label: "(2)",
        text: "Belli bir meslek ve sanatın sağladığı kolaylıktan yararlanmak suretiyle, İşlenmesi",
        penalty: "Verilecek ceza yarı oranında artırılır.",
      },
    ],
  },
  {
    id: "tck-138",
    title: "Verileri yok etmeme",
    law: " TCK Madde 138",
    summary:
      "Kanunların belirlediği sürelerin geçmiş olmasına karşın verileri sistem içinde yok etmemek",
    tags: ["Kişisel veri"],
    clauses: [
      {
        label: "(1)",
        text: "Kanunların belirlediği sürelerin geçmiş olmasına karşın verileri sistem içinde yok etmekle yükümlü olanların görevlerini yerine getirmemes",
        penalty: "Bir yıldan iki yıla kadar hapis cezası",
      },
      {
        label: "(2)",
        text: "Suçun konusunun Ceza Muhakemesi Kanunu hükümlerine göre ortadan kaldırılması veya yok edilmesi gereken veri olması hâlinde. ",
        penalty: "Verilecek ceza bir kat artırılır",
      },
    ],
  },
  {
    id: "tck-243",
    title: "Bilişim sistemine girme",
    law: " TCK Madde 243",
    summary:
      "Bir bilişim sisteminin bütününe veya bir kısmına, hukuka aykırı olarak girmek ",
    tags: ["Kişisel veri","Bilişim"],
    clauses: [
      {
        label: "(1)",
        text: "Bir bilişim sisteminin bütününe veya bir kısmına, hukuka aykırı olarak girmek veya orada kalmaya devam etmek",
        penalty: "Bir yıla kadar hapis veya adlî para cezası",
      },
      {
        label: "(2)",
        text: "Yukarıdaki fıkrada tanımlanan fiillerin bedeli karşılığı yararlanılabilen sistemler hakkında işlenmesi ",
        penalty: "Verilecek ceza yarı oranına kadar indirilir.",
      },
      {
        label: "(3)",
        text: "Bu fiil nedeniyle sistemin içerdiği verilerin yok olması veya değişmesi ",
        penalty: "Altı aydan iki yıla kadar hapis cezası",
      },
      {
        label: "(4)",
        text: "Bir bilişim sisteminin kendi içinde veya bilişim sistemleri arasında gerçekleşen veri nakillerini, sisteme girmeksizin teknik araçlarla hukuka aykırı olarak izlemek ",
        penalty: "Bir yıldan üç yıla kadar hapis cezası",
      },
    ],
  },
  {
    id: "tck-244",
    title: "Sistemi engelleme, bozma, verileri yok etme veya değiştirme",
    law: " TCK Madde 244",
    summary:
      "Bir bilişim sisteminin işleyişini engellemek veya bozmak",
    tags: ["Kişisel veri","Bilişim"],
    clauses: [
      {
        label: "(1)",
        text: "Bir bilişim sistemindeki verileri bozmak, yok etmek, değiştirmek veya erişilmez kılmak, sisteme veri yerleştirmek, var olan verileri başka bir yere göndermek",
        penalty: "Altı aydan üç yıla kadar hapis cezası",
      },
      {
        label: "(2)",
        text: "Bu fiillerin bir banka veya kredi kurumuna ya da bir kamu kurum veya kuruluşuna ait bilişim sistemi üzerinde işlenmesi ",
        penalty: "Verilecek ceza yarı oranında artırılır.",
      },
      {
        label: "(3)",
        text: "Yukarıdaki fıkralarda tanımlanan fiillerin işlenmesi suretiyle kişinin kendisinin veya başkasının yararına haksız bir çıkar sağlamasının başka bir suç oluşturmaması.  ",
        penalty: "İki yıldan altı yıla kadar hapis ve beşbin güne kadar adlî para cezası",
      },
    ],
  },
];
