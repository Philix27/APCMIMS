const SR = {
  name: "KWARA",
  email: "kwara@gmail.com",
  password: "kwara1",
  phone: "08108850572",
  statecode: "KWARA",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "KWARA",
  state: "KWARA",
  lga: [
    {
      wards: [
        "ADIGBONGBO/AWE/ORIMARO",
        "AFON",
        "AGO/OJA/OSHIN/SAPATI/LADUBA",
        "BALLAH/OTTE",
        "BUDO-EGBA",
        "EFUE/BERIKODO",
        "ELEBUE/AGBONA/FATA",
        "GAMBARI/AIYEKALE",
        "ILA-OJA",
        "ODO-ODE/ABOTO",
        "OGBONDOROKO/REKE",
        "OGELE",
        "OKESHO",
        "ONIRE/ODEGIWA/ALAPA",
        "OWODE/GBOGUN",
        "YOWERE 11/OKEWERU",
        "YOWERE/SOSOKI",
      ],
      name: "ASA",
    },
    {
      wards: [
        "BORIYA/SHIYA",
        "GURE/GWASORO",
        "GWANARA",
        "GWEDEBERERU/BABANE",
        "ILESHA",
        "KENU/TABERU",
        "KIYORU/BWEN",
        "KPAURA/YAKIRU",
        "OKUTA",
        "SHINAWU/TUNBUYAN",
        "YASHIKIRA",
      ],
      name: "BARUTEN",
    },
    {
      wards: [
        "LAFIAGI 1",
        "LAFIAGI 11",
        "LAFIAGI 111",
        "LAFIAGI 1V",
        "TSARAGI 1",
        "TSARAGI 11",
        "TSARAGI 111",
        "TSONGA 1",
        "TSONGA 11",
        "TSONGA 111",
      ],
      name: "EDU",
    },
    {
      wards: [
        "ERUKU",
        "ISAPA",
        "KORO",
        "OBBO-AIYEGGUNLE 1",
        "OBBO-AIYEGGUNLE 11",
        "OBBO-ILE",
        "OKE-OPIN/ETAN",
        "OPIN",
        "OSI 1",
        "OSI 11",
      ],
      name: "EKITI",
    },
    {
      wards: [
        "AGUNJIN",
        "IDOFIAN 1",
        "IDOFIAN 11",
        "IGBAJA 1",
        "IGBAJA 11",
        "IGBAJA 111",
        "ILE-IRE",
        "OKE-ODE 1",
        "OKE-ODE 11",
        "OKE-ODE 111",
        "OMUPO",
        "ORA",
        "ORO-AGO",
        "SHARE 1",
        "SHARE 11",
        "SHARE 111",
        "SHARE 1V",
        "SHARE V",
      ],
      name: "IFELODUN",
    },
    {
      wards: [
        "AGBEYANGI/GBADAMU/OSIN",
        "APADO",
        "BOLOGUN GAMBARI 11",
        "GAMBARI 1",
        "IBAGUN",
        "IPONRIN",
        "MAGAJI ARE 1",
        "MAGAJI ARE 11",
        "MARAFA/PEPELE",
        "MAYA/ILE-APA",
        "OKE OYI/OKE OSE/ALALUBOSA",
        "ZANGO",
      ],
      name: "ILLORIN EAST",
    },
    {
      wards: [
        "AKANBI -1",
        "AKANBI -11",
        "AKANBI -111",
        "AKANBI -1V",
        "AKANBI -V",
        "BALOGUN-FULANI 11",
        "BALOGUN-FULANI 111",
        "BALOGUN-FULANI I",
        "OKAKA 1",
        "OKAKA 11",
        "OKE-OGUN",
      ],
      name: "ILORIN-SOUTH",
    },
    {
      wards: [
        "ADEWOLE",
        "AJIKOBI",
        "BABOKO",
        "BADARI",
        "BALOGUN ALANAMU CENTRAL",
        "MAGAJI NGERI",
        "OGIDI",
        "OJUEKUN/ZARUMI",
        "OKO-ERIN",
        "OLOJE",
        "UBANDAWAKI",
        "WARRAH/EGBE JILA/OSHIN",
      ],
      name: "ILORIN-WEST",
    },
    {
      wards: [
        "AJASE IPO 1",
        "AJASE IPO 11",
        "ARANDUN",
        "ESIE/IJAN",
        "IPETU/RORE/ARAN-ORIN",
        "OKO",
        "OMU-ARAN 1 (ARAN)",
        "OMU-ARAN 11 (IHAYE)",
        "OMU-ARAN 111 (IFAJA)",
        "ORO 1",
        "ORO 11",
      ],
      name: "IREPODUN",
    },
    {
      wards: [
        "ALLA",
        "EDIDI",
        "IJARA ISIN",
        "ISANLU 1",
        "ISANLU 11",
        "IWO",
        "OKE ABA",
        "OKE ONIGBIN",
        "OLLA",
        "OWU ISIN",
        "SABAJA/PAMO",
      ],
      name: "ISIN",
    },
    {
      wards: [
        "ADENA",
        "BANI",
        "GWANABE 1",
        "GWANABE 11",
        "GWARI A (GWARIA)",
        "KAIAMA 1",
        "KAIAMA 11",
        "KAIAMA 111",
        "KEMANJI",
        "WAJIBE",
      ],
      name: "KAIAMA",
    },
    {
      wards: [
        "ABATI/ALARA",
        "AJANAKU",
        "AROBADI",
        "BABADUDU",
        "BODE-SAADU",
        "EJIDONGARI",
        "JEBBA",
        "LANWA",
        "LOGUN/JEHUNKUNNU",
        "MALETE/GBUGUDU",
        "MEGIDA",
        "OKEMI",
        "OKUTALA",
        "OLORU",
        "PAKUNMO",
        "SHAO",
        "WOMI/AYAKI",
      ],
      name: "MORO",
    },
    {
      wards: [
        "BALOGUN",
        "ESSA - A",
        "ESSA - B",
        "ESSA - C",
        "IGBOIDUN",
        "OJOMU CENTRAL 1",
        "OJOMU CENTRAL 11",
        "OJOMU SOUTH EAST",
        "OJOMU NORTH/NORTH WEST",
        "SHAWO CENTRAL",
        "SHAWO SOUTH EAST",
        "SHAWO SOUTH WEST",
      ],
      name: "OFFA",
    },
    {
      wards: [
        "AIYEDUN",
        "EKAN",
        "IDOFIN /ODO-ASHE",
        "IDOFIN IGBANA 1",
        "IDOFIN IGBANA 11",
        "ILOFFA",
        "IMODE/EGOSI",
        "IMOJI/ILALE/ERINMOPE",
        "ODO-OWA 1",
        "ODO-OWA 11",
      ],
      name: "OKE-ERO",
    },
    {
      wards: [
        "ERIN-ILE NORTH",
        "ERIN-ILE SOUTH",
        "IGBONA",
        "IGOSUN",
        "IJAGBO",
        "IKOTUN",
        "ILEMONA",
        "INAJA/AHOGBADA",
        "IPEE",
        "IRRA",
        "OJOKU",
      ],
      name: "OYUN",
    },
    {
      wards: [
        "KPADA 1",
        "KPADA 11",
        "KPADA 111",
        "LADE 1",
        "LADE 11",
        "LADE 111",
        "PATIGI 1",
        "PATIGI 11",
        "PATIGI 111",
        "PATIGI 1V",
      ],
      name: "PATIGI",
    },
  ],
};

export const KWARA = { states, SR };
