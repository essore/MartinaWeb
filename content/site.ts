export const siteContent = {
  identity: {
    name: "Martina Pallottini",
    role: "Psicologa clinica e psicoterapeuta",
    city: "Fermo e online",
    ctaLabel: "Richiedi un primo contatto",
    ctaHref: "#contatti",
  },
  hero: {
    eyebrow: "Demo Sites v1",
    title: "Uno spazio sobrio e contemporaneo per presentare Martina in modo chiaro.",
    description:
      "Questa prima release e una demo minimale: identita, approccio, aree di intervento, studio e contatti. La base e pensata per crescere senza cambiare struttura.",
  },
  introduction: [
    "Il sito deve trasmettere autorevolezza, accoglienza e chiarezza fin dal primo schermo.",
    "I contenuti del WordPress attuale verranno mantenuti coerenti, ma redistribuiti con una gerarchia piu leggibile e orientata al primo contatto.",
  ],
  sections: [
    {
      id: "approccio",
      title: "Approccio",
      body: "Ascolto, relazione e consapevolezza restano il centro. In v1 la sezione spiega in modo sintetico il taglio clinico senza appesantire la lettura.",
    },
    {
      id: "percorsi",
      title: "Percorsi",
      body: "La demo anticipa le principali aree di intervento: sostegno psicologico, psicoterapia individuale, consulenza, genitorialita e percorsi per coppie.",
    },
    {
      id: "studio",
      title: "Studio e modalita",
      body: "Il sito deve chiarire subito dove riceve Martina, la possibilita di lavorare online e il valore del setting terapeutico.",
    },
  ],
  contacts: [
    {
      label: "Telefono",
      value: "+39 000 000 0000",
      href: "#",
    },
    {
      label: "Email",
      value: "contatti@martinaweb.demo",
      href: "#",
    },
    {
      label: "Facebook",
      value: "@martinaweb.demo",
      href: "#",
    },
  ],
  releaseGoals: [
    "Presentare una direzione visiva credibile e moderna.",
    "Validare una struttura scalabile per le prossime iterazioni.",
    "Preparare una prima release demo su Netlify prima di qualunque migrazione dal WordPress.",
  ],
} as const;
