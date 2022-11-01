const SR = {
  name: "Anambra",
  email: "anambra@gmail.com",
  password: "anambra1",
  phone: "08108850572",
  statecode: "ANAMBRA",
  img: "images/profile2.jpg",
  userType: "STATEREP",
};

const states = {
  statecode: "ANAMBRA",
  state: "ANAMBRA",
  lga: [
    {
      wards: [
        "ACHINA I",
        "ACHINA II",
        "AGULUEZE CHUKWU",
        "AKPO",
        "AMESI",
        "EKWULOBIA I",
        "EKWULOBIA II",
        "EZINIFITE I",
        "EZINIFITE II",
        "IGBO-UKWU I",
        "IGBO - UKWU II",
        "IKENGA",
        "ISUOFIA",
        "NKPOLOGWU",
        "ORERI",
        "UGA I",
        "UGA II",
        "UMUCHU I",
        "UMUCHU II",
        "UMUONA",
      ],
      name: "AGUATA",
    },
    {
      wards: [
        "AGULERI",
        "AGULERI II",
        "ENUGWU-OTU",
        "EZIAGULU-OTU",
        "IGBARIAM",
        "NANDO I",
        "NANDO II",
        "NANDO III",
        "NSUGBE I",
        "NSUGBE II",
        "OTUOCHA I",
        "OTUOCHA II",
        "UMULERI II",
        "UMUOBA-ANAM",
        "UMURELI I",
      ],
      name: "ANAMBRA EAST",
    },
    {
      wards: [
        "EZI-ANAM",
        "IFITE-ANAM",
        "NZAM",
        "OLUMBANASA - ODE",
        "OLUMBANASA-INOMA",
        "OROMA ETITI-ANAM",
        "UMUENWELUM-ANAM",
        "UMUEZE-ANAM I",
        "UMUEZE-ANAM II",
        "UMUOBA-ANAM",
        "ADAZI ANI I",
      ],
      name: "ANAMBRA WEST",
    },
    {
      wards: [
        "ADAZI ANI II",
        "ADAZI ENU I",
        "ADAZI ENU II",
        "ADAZI NNUKWU I",
        "ADAZI NNUKWU II",
        "AGULU IV",
        "AGULU I",
        "AGULU II",
        "AGULU III",
        "AGULU UZOIGBO",
        "AKWAEZE",
        "ICHIDA I",
        "ICHIDA II",
        "NENI I",
        "NENI II",
        "NRI I",
        "NRI II",
        "OBELEDU",
      ],
      name: "ANAOCHA",
    },
    {
      wards: [
        "ACHALLA I",
        "ACHALLA I1",
        "ACHALLA I1I",
        "AMANSEA",
        "AMANUKE",
        "AWBA-OFEMMILI",
        "EBENEBE I",
        "EBENEBE II",
        "EBENEBE III",
        "ISU ANIOCHA",
        "MABAKWU I (ANEZIKE)",
        "UGBENE",
        "UGBENU",
        "URUM",
      ],
      name: "AWKA NORTH",
    },
    {
      wards: [
        "AGU OKA",
        "AMAWBIA I",
        "AMAWBIA II",
        "AMAWBIA III",
        "AWKA I",
        "AWKA II",
        "AWKA III",
        "AWKA IV",
        "AWKA V",
        "AWKA VI",
        "AWKA VII",
        "EZINATO/ISIAGU",
        "MBA-UKWU",
        "NIBO I",
        "NIBO II",
        "NIBO III",
        "NISE I",
        "NISE II",
        "OKPUNO",
        "UMUAWULU",
      ],
      name: "AWKA SOUTH",
    },
    {
      wards: [
        "ANAKU",
        "IFITE OGWARI I",
        "IFITE OGWARI II",
        "IGBAKWU",
        "OMASI",
        "OMOR I",
        "OMOR II",
        "OMOR III",
        "UME RUM",
        "UMUEJE UMUEJE",
        "UMUMBO",
      ],
      name: "AYAMELUM",
    },
    {
      wards: [
        "AKWA",
        "IFITEDUNU I",
        "IFITEDUNU II",
        "NAWGU I",
        "NAWGU II",
        "UKPO I",
        "UKPO II",
        "UKPO III",
        "UKWULU I",
        "UKWULU II",
        "UMUDIOKA I",
        "UMUDIOKA II",
        "UMUNNACHI I",
        "UMUNNACHI II",
      ],
      name: "DUNUKOFIA",
    },
    {
      wards: [
        "AMAKWA II",
        "ICHI",
        "IHEMBOSI/ANAUBAHU",
        "IHITEOHA",
        "ORAIFITE I",
        "ORAIFITE II",
        "ORAIFITE III",
        "OZUBULU I",
        "OZUBULU II",
        "OZUBULU III",
        "OZUBULU IV",
        "OZUBULU V",
      ],
      name: "EKWUSIGO",
    },
    {
      wards: [
        "ABACHA",
        "ABATETE",
        "EZIOWELE",
        "IDEANI",
        "NKPOR I",
        "NKPOR II",
        "OBOSI",
        "OGIDI I",
        "OGIDI II",
        "ORAUKWU",
        "UKE",
        "UMUOJI",
      ],
      name: "IDEMILI NORTH",
    },
    {
      wards: [
        "AKWUKWU",
        "ALOR I",
        "ALOR II",
        "AWKA-ETITI I",
        "AWKA-ETITI II",
        "NNOBI III",
        "NNOBI I",
        "NNOBI II",
        "NNOKWA",
        "OBA I",
        "OBA II",
        "OJOTO",
      ],
      name: "IDEMILI-SOUTH",
    },
    {
      wards: [
        "AMAMU I",
        "AMAMU II",
        "AMORKA",
        "AZIA",
        "IHITE",
        "ISSEKE",
        "LILU",
        "MBOSI",
        "OGBOLO",
        "OKIJA I",
        "OKIJA II",
        "OKIJA III",
        "OKIJA IV",
        "OKIJA V",
        "ORSUMOGHU",
        "UBULUISIUZO",
        "ULI I",
        "ULI II",
        "ULI III",
        "UZOAKWA",
      ],
      name: "IHALA",
    },
    {
      wards: [
        "ABAGANA I",
        "ABAGANA II",
        "ABAGANA III",
        "ABAGANA IV",
        "ABBA I",
        "ABBA II",
        "ENUGWU UKWU I",
        "ENUGWU UKWU II",
        "ENUGWU UKWU III",
        "ENUGWU UKWU IV",
        "ENUGWU-AGIDI I",
        "ENUGWU-AGIDI II",
        "NAWFIA I",
        "NAWFIA II",
        "NIMO I",
        "NIMO II",
        "NIMO III",
        "NIMO IV",
      ],
      name: "NJIKOKA",
    },
    {
      wards: [
        "NNEWI-ICHI I",
        "NNEWI-ICHI II",
        "OTOLO I",
        "OTOLO III",
        "OTOLO II",
        "UMUDIM I",
        "UMUDIM II",
        "URUAGU I",
        "URUAGU II",
        "URUAGU III",
      ],
      name: "NNEWI NORTH",
    },
    {
      wards: [
        "AKWA-IHEDI",
        "AMICHI I",
        "AMICHI II",
        "AMICHI III",
        "AZUIGBO",
        "EBENATOR",
        "EKWULUMILI",
        "EZINIFITE",
        "EZINIFITE I",
        "EZINIFITE II",
        "EZINIFITE III",
        "OSUMENYI I",
        "OSUMENYI II",
        "UKPOR I",
        "UKPOR II",
        "UKPOR III",
        "UKPOR IV",
        "UKPOR V",
        "UKPOR VI",
        "UNUBI",
        "UTUH",
      ],
      name: "NNEWI SOUTH",
    },
    {
      wards: [
        "AKILI - OZIZOR",
        "AKILI OGIDI/OBEAGWE",
        "ATANI I",
        "ATANI II",
        "IYIOWA/ODEKPE/OHITA",
        "OCHUCHE-UMUODU/OGBAKUBA/AMIYI",
        "OGWU-IKPELE",
        "OGWUANIOCHA",
        "OKPOKO I",
        "OKPOKO II",
        "OKPOKO III",
        "OKPOKO IV",
        "OKPOKO V",
        "OKPOKO VI",
        "OSSOMALA",
        "UMUNANKWO/MPUTU",
      ],
      name: "OGBARU",
    },
    {
      wards: [
        "BRIDGE HEAD I",
        "BRIDGE HEAD II",
        "BRIDGE HEAD III",
        "FEGGE 1",
        "FEGGE 1V",
        "FEGGE II",
        "FEGGE III",
        "FEGGE V",
        "FEGGE VI",
        "FEGGE VII",
        "ODOAKPU I",
        "ODOAKPU II",
        "ODOAKPU III",
        "ODOAKPU IV",
        "ODOAKPU V",
        "ODOAKPU VI",
        "ODOAKPU VII",
      ],
      name: "ONITSHA -SOUTH",
    },
    {
      wards: [
        "AMERICAN QUARTERS",
        "G.R.A",
        "INLAND TOWN I",
        "INLAND TOWN II",
        "INLAND TOWN III",
        "INLAND TOWN IV",
        "INLAND TOWN V",
        "INLAND TOWN VI",
        "INLAND TOWN VII",
        "INLAND TOWN VIII",
        "OGBE UMUONICHA",
        "TRANS NKISI",
        "WATER-SIDE CENTRAL 1",
        "WATER-SIDE CENTRAL II",
        "WOLUWO LAYOUT",
      ],
      name: "ONITSHA-NORTH",
    },
    {
      wards: [
        "AGBUDU",
        "AKPU",
        "ENUGU/UMONYIA",
        "EZIAGU",
        "EZIRA",
        "IHITE",
        "ISULO",
        "NAWFIJA",
        "NKEREHI",
        "OGBOJI",
        "OGBUNKA I",
        "OGBUNKA II",
        "OWERRE-EZUKALA I",
        "OWERRE-EZUKALA II",
        "UMUNZE I",
        "UMUNZE II",
        "UMUNZE III",
        "UMUOMAKU",
      ],
      name: "ORUMBA SOUTH",
    },
    {
      wards: [
        "AJALLI I (OBINIKPA AND UMUEVE)",
        "AJALLI II (UMUABIAMA AND AMAGA)",
        "AMAETITI",
        "AMAOKPALA / OMOGHO",
        "AWA",
        "AWGBU I",
        "AWGBU II",
        "NANKA I",
        "NANKA II",
        "NDI OKPALAEZE",
        "NDIKELIONWU",
        "NDIOKOLO/NDIOKPALEKE",
        "NDIOWU",
        "NDIUKWUENU/OKPEZE",
        "OKO II",
        "OKO I",
        "UFUMA I",
        "UFUMA II",
      ],
      name: "ORUMBA NORTH",
    },
    {
      wards: [
        "AWKUZU I",
        "AWKUZU II",
        "AWKUZU III",
        "AWKUZU IV",
        "NKWELLE EZUNAKA I",
        "NKWELLE EZUNAKA II",
        "NTEJE I",
        "NTEJE II",
        "NTEJE III",
        "NTEJE IV",
        "NTEJE V",
        "OGBUNIKE I",
        "OGBUNIKE II",
        "UMUNYA I",
        "UMUNYA II",
      ],
      name: "OYI",
    },
  ],
};

export const ANAMBRA = { states, SR };
