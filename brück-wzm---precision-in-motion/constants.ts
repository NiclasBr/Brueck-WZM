

import { Product, Service, Translations, ServiceDetail, BlogPost } from './types';

export const CONTENT: Record<string, Translations> = {
  de: {
    nav: { products: "Produkte", services: "Dienstleistungen", company: "Unternehmen", contact: "Kontakt" },
    nav_sub: {
      prod_all: "Alle Produkte",
      prod_milling: "Frästechnologie",
      prod_turning: "Drehzentren",
      prod_automation: "Automationslösungen",
      serv_maintenance: "Präventive Wartung",
      serv_automation: "Ind. Automatisierung",
      serv_training: "Schulung & Training",
      comp_overview: "Unternehmensübersicht",
      comp_team: "Unser Team",
      comp_history: "Geschichte",
      comp_news: "News & Blog"
    },
    hero: { title: "Präzision in Bewegung", subtitle: "Führende Technologie für industrielle Fertigung und CNC-Lösungen der nächsten Generation von Brück WZM.", cta: "Produkte entdecken" },
    stats: { machines: "Installierte Maschinen", clients: "Zufriedene Kunden", countries: "Länder weltweit", experience: "Jahre Erfahrung" },
    products: { title: "Unsere Maschinen", desc: "Hochleistungs-CNC-Lösungen für höchste Ansprüche.", viewAll: "Alle Modelle ansehen", inquiry: "Anfrage Senden", details: "Details Ansehen", sold: "Verkauft" },
    services: { title: "Service & Support", s1_title: "Wartung", s1_desc: "24/7 Support und regelmäßige Wartung für maximale Laufzeit.", s2_title: "Automatisierung", s2_desc: "Integrierte Robotiklösungen zur Steigerung Ihrer Produktivität.", s3_title: "Training", s3_desc: "Schulung Ihres Personals an den neuesten Steuerungssystemen.", viewAll: "Alle Dienstleistungen" },
    company: { 
      title: "Über Brück WZM", 
      desc: "Seit 1984 stehen wir für Innovation und Qualität im Werkzeugmaschinenbau. Brück WZM hat sich von einem kleinen Handwerksbetrieb zu einem international führenden Anbieter für CNC-Technologie entwickelt. Wir verbinden traditionelle Werte mit zukunftsweisender Innovation.", 
      history: "Unsere Geschichte", 
      values: "Unsere Werte",
      viewAll: "Unternehmensübersicht"
    },
    proven: {
      tag: "Globale Strategie",
      title: "Bewährte Leistung,\nMessbare Ergebnisse",
      desc: "Unsere Arbeit stützt sich auf messbare Ergebnisse. Diese Zahlen spiegeln das Vertrauen, den Erfolg und die Resultate wider, die wir für unsere B2B-Partner über Branchen und Regionen hinweg geliefert haben.",
      stat_roi: "Durchschnittlicher ROI für\ndigitale Anlagen",
      stat_countries: "Belieferte Länder mit\nB2B Services",
      tags: ["Globale Lieferkette", "Smart Factory", "KPIs"]
    },
    blog: {
      title: "Aktuelles",
      subtitle: "Neuigkeiten, Technologie-Updates und Einblicke in die Welt von Brück WZM.",
      readMore: "Artikel lesen",
      backToBlog: "Zurück zur Übersicht",
      publishedOn: "Veröffentlicht am"
    },
    footer: { rights: "Alle Rechte vorbehalten.", address: "Industriestraße 1, 8000 Zürich", desc: "Hochpräzisionsmaschinen von Brück WZM für die moderne Industrie." },
    contact: { 
      title: "Kontaktieren\nSie uns", 
      subtitle: "Technische Beratung",
      visionText: "Starten Sie Ihr nächstes Projekt mit Brück WZM. Unser Expertenteam analysiert Ihre Anforderungen und erstellt eine maßgeschneiderte Lösung.",
      name: "Ihr Name", 
      email: "Geschäftliche E-Mail",
      companyName: "Unternehmen",
      projectInfo: "Wie können wir Sie unterstützen?",
      phone: "Telefon",
      message: "Nachricht", 
      send: "Anfrage Absenden", 
      modalTitle: "Unverbindliche Anfrage", 
      productRef: "Bezugnehmend auf",
      addressCard: "Unser Hauptsitz",
      emailCard: "Schreiben Sie uns",
      phoneCard: "Rufen Sie uns an"
    }
  },
  en: {
    nav: { products: "Products", services: "Services", company: "Company", contact: "Contact" },
    nav_sub: {
      prod_all: "All Products",
      prod_milling: "Milling Technology",
      prod_turning: "Turning Centers",
      prod_automation: "Automation Solutions",
      serv_maintenance: "Preventive Maintenance",
      serv_automation: "Ind. Automation",
      serv_training: "Education & Training",
      comp_overview: "Company Overview",
      comp_team: "Our Team",
      comp_history: "History",
      comp_news: "News & Blog"
    },
    hero: { title: "Precision in Motion", subtitle: "Leading technology for industrial manufacturing and next-gen CNC solutions by Brück WZM.", cta: "Discover Products" },
    stats: { machines: "Machines Installed", clients: "Satisfied Clients", countries: "Countries Worldwide", experience: "Years Experience" },
    products: { title: "Our Machines", desc: "High-performance CNC solutions for the highest demands.", viewAll: "View All Models", inquiry: "Send Inquiry", details: "View Details", sold: "Sold" },
    services: { title: "Service & Support", s1_title: "Maintenance", s1_desc: "24/7 support and regular maintenance for maximum uptime.", s2_title: "Automation", s2_desc: "Integrated robotics solutions to boost your productivity.", s3_title: "Training", s3_desc: "Training your staff on the latest control systems.", viewAll: "All Services" },
    company: { 
      title: "About Brück WZM", 
      desc: "Since 1984, we stand for innovation and quality in machine tool manufacturing. Brück WZM has evolved from a small craft workshop into a leading international provider of CNC technology. We combine traditional values with future-oriented innovation.", 
      history: "Our History", 
      values: "Our Values",
      viewAll: "Company Overview"
    },
    proven: {
      tag: "Global Strategy",
      title: "Proven performance,\nMeasurable results",
      desc: "Our work is backed by measurable results. These numbers reflect the trust, success, and outcomes we've delivered for our B2B partners across industries and regions.",
      stat_roi: "Average ROI on\ndigital machinery",
      stat_countries: "Countries served\nwith B2B services",
      tags: ["Global Supply", "Smart Factory", "KPIs"]
    },
    blog: {
      title: "Latest News",
      subtitle: "News, technology updates, and insights into the world of Brück WZM.",
      readMore: "Read Article",
      backToBlog: "Back to Overview",
      publishedOn: "Published on"
    },
    footer: { rights: "All rights reserved.", address: "Industrial Street 1, 8000 Zurich", desc: "High-precision machinery from Brück WZM for modern industry." },
    contact: { 
      title: "Contact\nUs", 
      subtitle: "Technical Consultation",
      visionText: "Start your next project with Brück WZM. Our team of experts will analyze your requirements and create a customized solution.",
      name: "Your Name", 
      email: "Business Email", 
      companyName: "Company",
      projectInfo: "How can we help you?",
      phone: "Phone Number",
      message: "Message", 
      send: "Submit Inquiry", 
      modalTitle: "Non-binding Inquiry", 
      productRef: "Regarding",
      addressCard: "Our Headquarters",
      emailCard: "Email Us",
      phoneCard: "Call Us"
    }
  }
};

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "DMU 50 3rd Gen", 
    category: "5-Axis Universal", 
    systemType: "milling",
    image: "https://at.dmgmori.com/resource/image/18340/product_picture/xlg/10/dmu-50-3rd-product-picture.webp", 
    specs: ["20,000 RPM", "H: 500mm", "Celos Control"], 
    status: "available",
    description: "Universal milling machine for 5-sided machining.",
    longDescription: "Die DMU 50 der 3. Generation setzt neue Maßstäbe in der 5-Achs-Simultanbearbeitung. Mit ihrem innovativen Maschinenbaukonzept und den leistungsstarken Spindeln bietet sie höchste Präzision und Oberflächengüte für komplexe Bauteile. Ideal für anspruchsvolle Anwendungen in der Aerospace-, Medical- und Automotive-Industrie.",
    features: [
      "Schwenkrundtisch für 5-Achs-Simultanbearbeitung",
      "Kühlkonzept für höchste thermische Stabilität",
      "Celos Steuerung für intuitive Bedienung",
      "Großer Arbeitsraum bei geringer Stellfläche"
    ]
  },
  { 
    id: 2, 
    name: "INTEGREX i-200H S", 
    category: "Multi-Tasking",
    systemType: "turning", 
    image: "https://www.mazak.com/adobe/dynamicmedia/deliver/dm-aid--cdb419e0-7a1f-4511-b3f1-1781e6518f83/inte-i200hs-smoothai-240321.png?width=1920&preferwebp=true&quality=100", 
    specs: ["SmoothAi", "Dual Spindle", "Done-In-One"], 
    status: "available",
    description: "The ultimate done-in-one machine.",
    longDescription: "Die INTEGREX i-200H S verbindet die Vielseitigkeit eines Drehzentrums mit der Leistung eines Bearbeitungszentrums. Ausgestattet mit der revolutionären MAZATROL SmoothAi Steuerung, ermöglicht sie die komplette Fertigbearbeitung komplexer Werkstücke in einer einzigen Aufspannung.",
    features: [
      "KI-gestützte Prozessoptimierung",
      "Haupt- und Gegenspindel für Komplettbearbeitung",
      "Kompaktes Design mit hoher Ergonomie",
      "Hocheffiziente Späneentsorgung"
    ]
  },
  { 
    id: 3, 
    name: "Haas VF-2", 
    category: "Vertical Center", 
    systemType: "milling",
    image: "https://www.haascnc.com/content/dam/haascnc/pdp_feed/machines/VF-2.png", 
    specs: ["30 hp Vector Drive", "8100 RPM", "Inline Direct-Drive"], 
    status: "sold",
    description: "The industry workhorse.",
    longDescription: "Die Haas VF-2 ist das beliebteste Modell unter den vertikalen Bearbeitungszentren. Bekannt für ihre Zuverlässigkeit und das hervorragende Preis-Leistungs-Verhältnis, ist sie die perfekte Maschine für jede Werkstatt, die hohe Zerspanungsleistung und Flexibilität benötigt.",
    features: [
      "Inline-Direktantriebsspindel",
      "Schneller Werkzeugwechsel",
      "Robuster Gussrahmen",
      "Benutzerfreundliche Haas-Steuerung"
    ]
  },
  { 
    id: 4, 
    name: "LaserCut Precision", 
    category: "Laser Cutting", 
    systemType: "automation",
    image: "https://www.yupeclaser.com/wp-content/uploads/2023/09/Yupec-Precision-Fiber-Laser-Cutting-Machine-LCF0120.png", 
    specs: ["4kW Fiber", "3000x1500mm", "Auto-Nozzle"], 
    status: "available",
    description: "High speed fiber laser cutting.",
    longDescription: "Unsere LaserCut Precision Serie bietet Hochgeschwindigkeits-Faserlaserschneiden mit maximaler Genauigkeit. Ausgestattet mit modernsten Laserquellen und einem hochdynamischen Antriebssystem, schneidet sie dünne bis dicke Bleche mit exzellenter Kantenqualität.",
    features: [
      "Hocheffiziente Faserlaserquelle",
      "Automatisches Düsenwechselsystem",
      "Kamerasystem zur Prozessüberwachung",
      "Niedrige Betriebskosten"
    ]
  }
];

export const SERVICES: Service[] = [
  { id: 's1', icon: 'settings', titleKey: 's1_title', descKey: 's1_desc' },
  { id: 's2', icon: 'wrench', titleKey: 's2_title', descKey: 's2_desc' },
  { id: 's3', icon: 'shield-check', titleKey: 's3_title', descKey: 's3_desc' },
];

export const PARTNERS = [
  "DMG MORI", "Mazak", "Haas", "Makino", "Fanuc", "Siemens", "Okuma"
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  maintenance: {
    id: "maintenance",
    title: "Präventive Wartung",
    subtitle: "Vorausschauende Instandhaltung für maximale Maschinenlaufzeit.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    description: "Maschinenausfälle kommen meist unerwartet und verursachen hohe Kosten. Unser Konzept der präventiven Wartung zielt darauf ab, Verschleiß frühzeitig zu erkennen und Ausfälle zu vermeiden, bevor sie passieren. Mit modernster Diagnosetechnik und erfahrenen Servicetechnikern halten wir Ihre Fertigung am Laufen.",
    features: [
      "24/7 Notfall-Support Hotline",
      "Regelmäßige Inspektionen nach Herstellervorgaben",
      "Lasermessung und Geometriekorrektur",
      "Software-Updates und Datensicherung",
      "Fluid-Management und Filterwechsel"
    ],
    benefits: [
      { title: "Kostenersparnis", desc: "Vermeidung teurer Reparaturen und Produktionsausfälle durch frühzeitiges Eingreifen." },
      { title: "Längere Lebensdauer", desc: "Gepflegte Maschinen halten länger und behalten ihren Wert." },
      { title: "Präzision", desc: "Regelmäßige Kalibrierung sichert gleichbleibende Fertigungsqualität." },
      { title: "Planbarkeit", desc: "Wartungsintervalle werden in Ihren Produktionsplan integriert." }
    ]
  },
  automation: {
    id: "automation",
    title: "Industrielle Automatisierung",
    subtitle: "Effizienzsteigerung durch intelligente Robotik und Handling-Systeme.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2000",
    description: "In der modernen Fertigung ist Automatisierung der Schlüssel zur Wettbewerbsfähigkeit. Wir entwickeln und integrieren maßgeschneiderte Automatisierungslösungen – von einfachen Palettenwechslern bis hin zu komplexen Roboterzellen, die Ihre Maschinen rund um die Uhr beschicken.",
    features: [
      "Robotergestützte Be- und Entladung",
      "Paletten-Pool-Systeme",
      "Portal-Lader für Wellen und Flanschteile",
      "Integration in bestehende Leitsysteme (ERP/MES)",
      "Greiferkonstruktion und Vorrichtungsbau"
    ],
    benefits: [
      { title: "Produktivität", desc: "Ermöglicht mannlose Schichten und Produktion am Wochenende." },
      { title: "Konsistenz", desc: "Gleichbleibende Zykluszeiten und Handling-Qualität." },
      { title: "Flexibilität", desc: "Schnelles Umrüsten auf verschiedene Werkstücke durch intelligente Greifer." },
      { title: "Arbeitssicherheit", desc: "Entlastung der Mitarbeiter von schweren und monotonen Tätigkeiten." }
    ]
  }
};

// NOTE: This array simulates the response from a Headless CMS (like Contentful, Strapi, Sanity)
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "neue-5-achs-technologie",
    title: "Revolution in der 5-Achs-Bearbeitung",
    excerpt: "Wie die neue DMU-Serie die Fertigungszeiten um 30% reduziert und die Präzision auf ein neues Level hebt.",
    coverImage: "https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg",
    date: "24. Mai 2024",
    author: "Dr. Thomas Brück",
    tags: ["Technologie", "Innovation", "Fräsen"],
    content: "<p>Die Anforderungen an die moderne Fertigung steigen stetig. Komplexere Geometrien, härtere Materialien und engere Toleranzen fordern Mensch und Maschine. Mit der Einführung der neuen 5-Achs-Simultan-Technologie bieten wir eine Antwort auf diese Herausforderungen.</p><h3>Höhere Dynamik</h3><p>Durch optimierte Antriebe und leichtere Komponenten konnte die Dynamik der Maschine deutlich gesteigert werden. Eilgänge von bis zu 80 m/min sind nun Standard.</p>"
  },
  {
    id: "2",
    slug: "nachhaltigkeit-in-der-industrie",
    title: "Nachhaltigkeit: Green Manufacturing",
    excerpt: "Energieeffizienz ist nicht nur gut für die Umwelt, sondern senkt auch Ihre Betriebskosten massiv.",
    coverImage: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1200",
    date: "10. Juni 2024",
    author: "Sarah Weber",
    tags: ["Nachhaltigkeit", "Energie", "Zukunft"],
    content: "<p>Green Manufacturing ist mehr als ein Schlagwort. Es ist eine Notwendigkeit. Unsere neuen Maschinen verfügen über intelligente Standby-Modi, Rückspeisung von Bremsenergie und optimierte Kühlkreisläufe.</p>"
  },
  {
    id: "3",
    slug: "brueck-wzm-erweitert-standort",
    title: "Expansion: Neuer Standort in Bern",
    excerpt: "Um unseren Kunden in der Westschweiz noch besseren Service zu bieten, eröffnen wir ein neues Technologiezentrum.",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    date: "02. Juli 2024",
    author: "Marketing Team",
    tags: ["News", "Unternehmen", "Expansion"],
    content: "<p>Wir freuen uns, die Eröffnung unseres neuen Standorts in Bern bekannt zu geben. Auf über 2000 Quadratmetern präsentieren wir die neuesten Maschinen live unter Span.</p>"
  }
];