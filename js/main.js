const revealTargets = document.querySelectorAll(".image-card, .text-card, .principle");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealTargets.forEach((el) => observer.observe(el));

document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ---------- I18N (Català / Castellà) ---------- */
const translations = {
  es: {
    "meta.description": "Política de Calidad, Seguridad Alimentaria y Responsabilidad Ambiental de Font Teix S.A., envasadora de agua mineral natural en Bunyola, Serra de Tramuntana.",
    "brandbar.ibAlt": "Illes Balears — Producte Local",
    "brandbar.sdtAlt": "Distintiu Serra de Tramuntana — Patrimoni Mundial",
    "nav.nosotros": "Nosotros",
    "nav.politica": "Política",
    "nav.compromisos": "Compromisos",
    "nav.instalaciones": "Instalaciones",
    "nav.territorio": "Territorio",
    "nav.contacto": "Contacto",
    "about.eyebrow": "Sobre nosotros",
    "about.title": "Quiénes somos",
    "about.lead": "En Font des Teix sabemos que la calidad empieza en el origen. Nuestra agua mineral natural de débil mineralización nace en la Serra de Tramuntana, donde la lluvia se infiltra lentamente a través de la roca hasta emerger de forma natural en el manantial Font des Teix, en las proximidades de Bunyola.",
    "about.body1": "Cada botella recoge la pureza de un entorno único y el resultado de un proceso natural que ha dado forma a nuestra agua durante años. Nuestra misión es preservar esas cualidades desde el manantial hasta el consumidor, manteniendo intactas sus características naturales mediante un envasado realizado en origen.",
    "about.body2": "Trabajamos cada día con un firme compromiso con la calidad, la seguridad alimentaria, la sostenibilidad y el respeto por el entorno que hace posible nuestra agua. Como empresa de proximidad, creemos en el valor de las cosas bien hechas, combinando tradición, responsabilidad y mejora continua para ofrecer un producto auténtico ligado a la tierra que lo ve nacer.",
    "about.tagline": "Font des Teix es naturaleza, origen y compromiso.",
    "about.subtagline": "Nacida en la Serra de Tramuntana. Envasada en origen. Conservada tal como la naturaleza la creó.",
    "territorio.eyebrow": "Compromiso con el territorio",
    "territorio.title": "¿Qué nos hace únicos?",
    "territorio.body1": "Nuestra historia está estrechamente ligada a la Serra de Tramuntana, un territorio excepcional reconocido por su riqueza natural, paisajística y cultural.",
    "territorio.body2": "Por ello, Font des Teix cuenta con la condición de <strong>Producto Local</strong> y además cuenta con el <strong>Distintiu Serra de Tramuntana Patrimoni Mundial</strong>, un reconocimiento otorgado por el Consorci Serra de Tramuntana a las empresas y entidades comprometidas con la preservación y promoción de los valores que hicieron de este paisaje un enclave declarado Patrimonio Mundial por la UNESCO.",
    "territorio.body3": "Estos reconocimientos reflejan nuestro compromiso con el territorio, la sostenibilidad y la conservación del entorno, así como nuestra voluntad de contribuir al desarrollo de una economía local vinculada a la identidad y los valores de Mallorca.",
    "territorio.body4": "Porque elegir Font des Teix es elegir un agua nacida en Mallorca, envasada en su origen y estrechamente vinculada a uno de los paisajes más emblemáticos del Mediterráneo.",
    "hero.eyebrow": "Font Teix S.A. · Bunyola, Mallorca",
    "hero.title": "Política de Calidad,<br>Seguridad&nbsp;Alimentaria<br>y Medio Ambiente",
    "hero.meta": "Sistema de Gestión Integrado — En Bunyola, Junio 2026",
    "hero.scrollCue": "Bajar a la política",
    "intro.lead": "La Dirección de FONT TEIX, consciente de la importancia de satisfacer las necesidades y expectativas de sus clientes y demás partes interesadas, así como de desarrollar su actividad de envasado de agua mineral natural de manera responsable con el entorno, establece la presente Política de Calidad, Seguridad Alimentaria y Responsabilidad Ambiental.",
    "intro.body": "A través de su Sistema de Gestión, la organización garantiza la calidad y seguridad de sus productos, el cumplimiento de los requisitos aplicables y la mejora continua de sus procesos, basándose en los siguientes principios:",
    "principles.eyebrow": "Nuestros compromisos",
    "principles.title": "Principios del Sistema de Gestión",
    "p1.title": "Valores fundamentales",
    "p1.body": "La calidad, la seguridad alimentaria y el respeto por el entorno forman parte de los valores fundamentales de la empresa y de la gestión diaria de sus actividades.",
    "p2.title": "Responsabilidad ambiental",
    "p2.body": "Nos comprometemos a desarrollar nuestra actividad de forma responsable, promoviendo la prevención de la contaminación, el uso eficiente de los recursos naturales, la reducción de residuos y la protección del entorno y del recurso hídrico en el que operamos.",
    "p3.title": "Cumplimiento normativo",
    "p3.body": "Garantizamos el cumplimiento de los requisitos legales, reglamentarios y de cliente aplicables a nuestra actividad, así como de los requisitos establecidos por los estándares de certificación adoptados por la organización, incluyendo la prevención del fraude alimentario y la protección de nuestros productos (Food Defense).",
    "p4.title": "Compromiso con el cliente",
    "p4.body": "Nos comprometemos a comprender y satisfacer las necesidades y expectativas de nuestros clientes, garantizando productos seguros, legales y de calidad.",
    "p5.title": "Mejora continua",
    "p5.body": "Establecemos y revisamos periódicamente objetivos para la mejora continua de la calidad, la seguridad alimentaria y el desempeño de nuestros procesos.",
    "p6.title": "Comunicación y transparencia",
    "p6.body": "Comunicamos esta Política y los compromisos adquiridos en materia de calidad, seguridad alimentaria y responsabilidad ambiental a todo el personal de la organización, y la mantenemos a disposición de las partes interesadas que la soliciten.",
    "p7.title": "Personas y seguridad",
    "p7.body": "Promovemos un entorno de trabajo seguro, saludable y participativo, fomentando la implicación y concienciación del personal en materia de seguridad, calidad, seguridad alimentaria y protección ambiental.",
    "p8.title": "Compromiso de la Dirección",
    "p8.body": "La Dirección se compromete a mantener esta política como marco de referencia para la definición y revisión de los objetivos de la organización, evaluando periódicamente su adecuación y eficacia mediante la revisión del Sistema de Gestión.",
    "instalaciones.imgAlt": "Instalaciones de Font Teix S.A. en Bunyola",
    "instalaciones.eyebrow": "Nuestras instalaciones",
    "instalaciones.title": "Bunyola, Serra de Tramuntana",
    "instalaciones.body1": "Al pie de los manantiales Font Teix, en el término de Bunyola, se encuentran las instalaciones encargadas de envasar el agua que nace en el corazón de la Serra de Tramuntana.",
    "instalaciones.body2": "Nuestra planta cuenta con las certificaciones IFS Food e ISO 14001, que acompañan cada uno de los principios recogidos en esta política y garantizan que el agua llega al consumidor con la misma calidad e integridad que tiene en su punto de surgencia.",
    "producto.imgAlt": "Botellas de agua mineral natural Font des Teix",
    "producto.eyebrow": "Nuestro compromiso",
    "producto.title": "Un agua segura, legal y de calidad",
    "producto.body1": "Cada formato que sale de nuestra planta —del biberón de bolsillo a la garrafa de ocho litros— responde a un mismo Sistema de Gestión, pensado para satisfacer las necesidades y expectativas de quien la consume.",
    "producto.body2": "Detrás de cada etiqueta hay un compromiso firmado por la Dirección: el mismo que puede leerse íntegro en esta página, y que se revisa y actualiza de forma periódica.",
    "signature.place": "En Bunyola, Junio 2026",
    "signature.signed": "Firmado: Dirección de Font Teix",
    "signature.print": "Imprimir / Guardar como PDF",
    "footer.doc": "Política de Calidad, Seguridad Alimentaria y Medio Ambiente — Vigente desde Junio 2026",
  },
  ca: {
    "meta.description": "Política de Qualitat, Seguretat Alimentària i Responsabilitat Ambiental de Font Teix S.A., envasadora d'aigua mineral natural a Bunyola, Serra de Tramuntana.",
    "brandbar.ibAlt": "Illes Balears — Producte Local",
    "brandbar.sdtAlt": "Distintiu Serra de Tramuntana — Patrimoni Mundial",
    "nav.nosotros": "Nosaltres",
    "nav.politica": "Política",
    "nav.compromisos": "Compromisos",
    "nav.instalaciones": "Instal·lacions",
    "nav.territorio": "Territori",
    "nav.contacto": "Contacte",
    "about.eyebrow": "Sobre nosaltres",
    "about.title": "Qui som",
    "about.lead": "A Font des Teix sabem que la qualitat comença en l'origen. La nostra aigua mineral natural de feble mineralització neix a la Serra de Tramuntana, on la pluja s'infiltra lentament a través de la roca fins a emergir de forma natural al manantial Font des Teix, a les proximitats de Bunyola.",
    "about.body1": "Cada ampolla recull la puresa d'un entorn únic i el resultat d'un procés natural que ha donat forma a la nostra aigua durant anys. La nostra missió és preservar aquestes qualitats des del manantial fins al consumidor, mantenint intactes les seves característiques naturals mitjançant un envasat realitzat en origen.",
    "about.body2": "Treballem cada dia amb un ferm compromís amb la qualitat, la seguretat alimentària, la sostenibilitat i el respecte per l'entorn que fa possible la nostra aigua. Com a empresa de proximitat, creiem en el valor de les coses ben fetes, combinant tradició, responsabilitat i millora contínua per oferir un producte autèntic lligat a la terra que el veu néixer.",
    "about.tagline": "Font des Teix és naturalesa, origen i compromís.",
    "about.subtagline": "Nascuda a la Serra de Tramuntana. Envasada en origen. Conservada tal com la naturalesa la va crear.",
    "territorio.eyebrow": "Compromís amb el territori",
    "territorio.title": "Què ens fa únics?",
    "territorio.body1": "La nostra història està estretament lligada a la Serra de Tramuntana, un territori excepcional reconegut per la seva riquesa natural, paisatgística i cultural.",
    "territorio.body2": "Per això, Font des Teix compta amb la condició de <strong>Producte Local</strong> i, a més, compta amb el <strong>Distintiu Serra de Tramuntana Patrimoni Mundial</strong>, un reconeixement atorgat pel Consorci Serra de Tramuntana a les empreses i entitats compromeses amb la preservació i promoció dels valors que van fer d'aquest paisatge un enclavament declarat Patrimoni Mundial per la UNESCO.",
    "territorio.body3": "Aquests reconeixements reflecteixen el nostre compromís amb el territori, la sostenibilitat i la conservació de l'entorn, així com la nostra voluntat de contribuir al desenvolupament d'una economia local vinculada a la identitat i els valors de Mallorca.",
    "territorio.body4": "Perquè triar Font des Teix és triar una aigua nascuda a Mallorca, envasada en el seu origen i estretament vinculada a un dels paisatges més emblemàtics de la Mediterrània.",
    "hero.eyebrow": "Font Teix S.A. · Bunyola, Mallorca",
    "hero.title": "Política de Qualitat,<br>Seguretat&nbsp;Alimentària<br>i Medi Ambient",
    "hero.meta": "Sistema de Gestió Integrat — A Bunyola, juny de 2026",
    "hero.scrollCue": "Baixar a la política",
    "intro.lead": "La Direcció de FONT TEIX, conscient de la importància de satisfer les necessitats i expectatives dels seus clients i altres parts interessades, així com de desenvolupar la seva activitat d'envasat d'aigua mineral natural de manera responsable amb l'entorn, estableix la present Política de Qualitat, Seguretat Alimentària i Responsabilitat Ambiental.",
    "intro.body": "Mitjançant el seu Sistema de Gestió, l'organització garanteix la qualitat i seguretat dels seus productes, el compliment dels requisits aplicables i la millora contínua dels seus processos, basant-se en els principis següents:",
    "principles.eyebrow": "Els nostres compromisos",
    "principles.title": "Principis del Sistema de Gestió",
    "p1.title": "Valors fonamentals",
    "p1.body": "La qualitat, la seguretat alimentària i el respecte per l'entorn formen part dels valors fonamentals de l'empresa i de la gestió diària de les seves activitats.",
    "p2.title": "Responsabilitat ambiental",
    "p2.body": "Ens comprometem a desenvolupar la nostra activitat de manera responsable, promovent la prevenció de la contaminació, l'ús eficient dels recursos naturals, la reducció de residus i la protecció de l'entorn i del recurs hídric en què operem.",
    "p3.title": "Compliment normatiu",
    "p3.body": "Garantim el compliment dels requisits legals, reglamentaris i de client aplicables a la nostra activitat, així com dels requisits establerts pels estàndards de certificació adoptats per l'organització, incloent-hi la prevenció del frau alimentari i la protecció dels nostres productes (Food Defense).",
    "p4.title": "Compromís amb el client",
    "p4.body": "Ens comprometem a comprendre i satisfer les necessitats i expectatives dels nostres clients, garantint productes segurs, legals i de qualitat.",
    "p5.title": "Millora contínua",
    "p5.body": "Establim i revisem periòdicament objectius per a la millora contínua de la qualitat, la seguretat alimentària i l'acompliment dels nostres processos.",
    "p6.title": "Comunicació i transparència",
    "p6.body": "Comuniquem aquesta Política i els compromisos adquirits en matèria de qualitat, seguretat alimentària i responsabilitat ambiental a tot el personal de l'organització, i la mantenim a disposició de les parts interessades que la sol·licitin.",
    "p7.title": "Persones i seguretat",
    "p7.body": "Promovem un entorn de treball segur, saludable i participatiu, fomentant la implicació i conscienciació del personal en matèria de seguretat, qualitat, seguretat alimentària i protecció ambiental.",
    "p8.title": "Compromís de la Direcció",
    "p8.body": "La Direcció es compromet a mantenir aquesta política com a marc de referència per a la definició i revisió dels objectius de l'organització, avaluant periòdicament la seva adequació i eficàcia mitjançant la revisió del Sistema de Gestió.",
    "instalaciones.imgAlt": "Instal·lacions de Font Teix S.A. a Bunyola",
    "instalaciones.eyebrow": "Les nostres instal·lacions",
    "instalaciones.title": "Bunyola, Serra de Tramuntana",
    "instalaciones.body1": "Al peu dels brolladors de Font Teix, al terme de Bunyola, es troben les instal·lacions encarregades d'envasar l'aigua que neix al cor de la Serra de Tramuntana.",
    "instalaciones.body2": "La nostra planta compta amb les certificacions IFS Food i ISO 14001, que acompanyen cadascun dels principis recollits en aquesta política i garanteixen que l'aigua arriba al consumidor amb la mateixa qualitat i integritat que té al seu punt de sorgència.",
    "producto.imgAlt": "Ampolles d'aigua mineral natural Font des Teix",
    "producto.eyebrow": "El nostre compromís",
    "producto.title": "Una aigua segura, legal i de qualitat",
    "producto.body1": "Cada format que surt de la nostra planta —del biberó de butxaca a la garrafa de vuit litres— respon a un mateix Sistema de Gestió, pensat per satisfer les necessitats i expectatives de qui la consumeix.",
    "producto.body2": "Darrere de cada etiqueta hi ha un compromís signat per la Direcció: el mateix que es pot llegir íntegrament en aquesta pàgina, i que es revisa i actualitza de manera periòdica.",
    "signature.place": "A Bunyola, juny de 2026",
    "signature.signed": "Signat: Direcció de Font Teix",
    "signature.print": "Imprimir / Desar com a PDF",
    "footer.doc": "Política de Qualitat, Seguretat Alimentària i Medi Ambient — Vigent des de juny de 2026",
  },
};

const pageTitles = {
  es: "Política de Calidad, Seguridad Alimentaria y Medio Ambiente — Font Teix S.A.",
  ca: "Política de Qualitat, Seguretat Alimentària i Medi Ambient — Font Teix S.A.",
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
    } else if (el.getAttribute("data-i18n-html") === "true") {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.title = pageTitles[lang] || document.title;
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("fontteix-lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

const savedLang = localStorage.getItem("fontteix-lang");
applyLanguage(savedLang === "es" || savedLang === "ca" ? savedLang : "ca");
