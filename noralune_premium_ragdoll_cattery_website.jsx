import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function LogoMark({ size = "md" }) {
  const logoSrc = "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADcANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAMEBQYHAgEICQoL/8QASRAAAQMDAwMCAwQFBgQEAwkAAQIDBAAFERIhBjETQVEHImEycRQjQoGRFVJiscHwM1NygpKyJDREY3OTw+EkRZOjs8Lx/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACMRAQEBAQADAQEAAwEAAAAAAAAAARECAyExEjJBEyJRUmH/2gAMAwEAAhEDEQA/APtUIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAif/Z";

  const sizes = {
    sm: "h-14 w-14",
    nav: "h-28 w-28 -mt-5 -mb-10",
    md: "h-28 w-28",
    lg: "h-40 w-40",
  };

  return (
    <img
      src={logoSrc}
      alt="Noralune logo"
      className={`${sizes[size]} rounded-full object-cover shadow-md ring-1 ring-[#eadfd2] bg-white`}
    />
  );
}

export default function NoraluneWebsite() {
  const [lang, setLang] = useState("EN");
  const [selectedImage, setSelectedImage] = useState(null);

  const cats = [
    {
      name: "HippieSoul Beesha*PL",
      img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
      pedigree: "https://pawpeds.com/db/?a=p&id=example",
      color: "Blue Bicolor",
      status: "Breeding female",
    },
    {
      name: "S*Gunbertus Noxx",
      img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=900&q=80",
      pedigree: "#",
      color: "Seal Mitted",
      status: "Breeding male",
    },
    {
      name: "Maxx",
      img: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80",
      pedigree: "#",
      color: "Blue Point",
      status: "Breeding male",
    },
    {
      name: "Nala",
      img: "https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=900&q=80",
      pedigree: "#",
      color: "Seal Bicolor",
      status: "Young female",
    },
  ];

  const seo = {
    EN: {
      title: "Noralune Ragdoll Cattery Norway | Ethical Ragdoll Kittens",
      description:
        "Noralune is a home-based ethical Ragdoll cattery in Norway focused on healthy, well-socialized Ragdoll kittens raised in a loving family environment. We place strong emphasis on quality bloodlines and health is our top priority.",
      keywords:
        "ragdoll kittens norway, ragdoll breeder norway, ethical cat breeder norway, noralune cattery, ragdoll cats norway, ragdoll oslo",
    },
    NO: {
      title: "Noralune Ragdoll oppdrett Norge | Etisk Ragdoll oppdrett",
      description:
        "Noralune er et etisk Ragdoll-oppdrett i Norge som fokuserer på sunne og sosialiserte Ragdoll-kattunger oppvokst i et trygt familiemiljø. Vi legger stor vekt på gode blodlinjer og helse er vår høyeste prioritet.",
      keywords:
        "ragdoll kattunger norge, ragdoll oppdrett norge, etisk katteoppdrett, noralune, ragdoll oslo",
    },
    PL: {
      title: "Noralune hodowla Ragdoll Norwegia | etyczna hodowla Ragdoll",
      description:
        "Noralune to domowa hodowla Ragdoll w Norwegii skupiona na zdrowych i dobrze socjalizowanych kociętach wychowywanych w rodzinie. Stawiamy na dobre linie hodowlane, a zdrowie jest naszym najwyższym priorytetem.",
      keywords:
        "ragdoll norwegia, hodowla ragdoll, kocięta ragdoll, noralune hodowla",
    },
  };

  const content = {
    EN: {
      heroKicker: "NORALUNE RAGDOLLS",
      heroTitle: "Noralune Ragdolls",
      heroSubtitle: "Raised with love. Rooted in health, temperament and calm beauty.",
      aboutTitle: "Welcome to Noralune",
      aboutText:
        "Noralune is a small, ethical Ragdoll cattery located in Norway. Our cats are raised in a loving home environment with full family integration, ensuring confident and social kittens. We focus on strong bloodlines and health is our top priority.",
      catsTitle: "Our Cats",
      kittensTitle: "Available Kittens",
      contactTitle: "Contact",
      buttonCats: "Discover Our Cats",
      buttonKittens: "Join Waiting List",
      navHome: "Home",
      navAbout: "About Us",
      navCats: "Our Cats",
      navKittens: "Kittens",
      navContact: "Contact",
      badgeLeft: "Home-based cattery in Norway",
      badgeRight: "Health · Temperament · Type are our priority",
      kittensIntro1:
        "Our Ragdoll kittens are raised inside our home in Norway with constant human contact, ensuring a calm, confident and affectionate temperament from the very beginning. They are raised among children and treated as full members of our family.",
      kittensIntro2:
        "We focus on strong, healthy bloodlines, responsible breeding and early socialization. Each kitten leaves us fully prepared for family life — not just beautiful, but emotionally balanced and secure.",
      kittensIntro3:
        "Due to high demand and limited litters, we recommend joining our waiting list early.",
      availableLitter: "Available litter",
      availableStatus: "Status: Planning / Available soon",
      reservation: "Reservation",
      reservationText: "Contact for waiting list",
      pedigree: "Pedigree",
      breedingCats: "Our breeding cats",
      reservationKicker: "Reservation",
    },
    NO: {
      heroKicker: "NORALUNE RAGDOLLS",
      heroTitle: "Noralune Ragdolls",
      heroSubtitle: "Oppvokst med kjærlighet. Med fokus på helse, temperament og rolig skjønnhet.",
      aboutTitle: "Velkommen til Noralune",
      aboutText:
        "Noralune er et etisk Ragdoll-oppdrett i Norge. Kattene våre vokser opp i et trygt hjemmemiljø som en del av familien, noe som gir trygge og sosiale kattunger. Vi legger stor vekt på gode blodlinjer og helse er vår høyeste prioritet.",
      catsTitle: "Våre Katter",
      kittensTitle: "Tilgjengelige Kattunger",
      contactTitle: "Kontakt",
      buttonCats: "Se kattene våre",
      buttonKittens: "Bli med på venteliste",
      navHome: "Hjem",
      navAbout: "Om oss",
      navCats: "Våre katter",
      navKittens: "Kattunger",
      navContact: "Kontakt",
      badgeLeft: "Ragdoll-oppdrett i Norge",
      badgeRight: "Helse · Temperament · Type er vår prioritet",
      kittensIntro1:
        "Våre Ragdoll-kattunger vokser opp i hjemmet vårt i Norge med tett menneskelig kontakt, noe som gir trygge, rolige og sosiale personligheter. De vokser opp sammen med barn og behandles som fullverdige familiemedlemmer.",
      kittensIntro2:
        "Vi legger stor vekt på sunne blodlinjer, ansvarlig avl og tidlig sosialisering. Hver kattunge er godt forberedt på livet i en familie.",
      kittensIntro3: "På grunn av høy etterspørsel anbefaler vi å stå på venteliste tidlig.",
      availableLitter: "Tilgjengelig kull",
      availableStatus: "Status: Planlagt / kommer snart",
      reservation: "Reservasjon",
      reservationText: "Kontakt oss for venteliste",
      pedigree: "Stamtavle",
      breedingCats: "Våre avlskatter",
      reservationKicker: "Reservasjon",
    },
    PL: {
      heroKicker: "NORALUNE RAGDOLLS",
      heroTitle: "Noralune Ragdolls",
      heroSubtitle: "Wychowywane z miłością. Z naciskiem na zdrowie, temperament i spokojne piękno.",
      aboutTitle: "Witamy w Noralune",
      aboutText:
        "Noralune to mała, etyczna hodowla Ragdoll w Norwegii. Nasze koty wychowują się w domowym, rodzinnym środowisku. Stawiamy na dobre linie hodowlane, a zdrowie jest naszym najwyższym priorytetem.",
      catsTitle: "Nasze koty",
      kittensTitle: "Dostępne kocięta",
      contactTitle: "Kontakt",
      buttonCats: "Poznaj nasze koty",
      buttonKittens: "Dołącz do listy oczekujących",
      navHome: "Start",
      navAbout: "O nas",
      navCats: "Koty",
      navKittens: "Kocięta",
      navContact: "Kontakt",
      badgeLeft: "Domowa hodowla w Norwegii",
      badgeRight: "Zdrowie · Temperament · Typ są naszym priorytetem",
      kittensIntro1:
        "Nasze kocięta Ragdoll wychowują się w domu w Norwegii, mając stały kontakt z ludźmi, co zapewnia im spokojny i zrównoważony charakter. Są wychowywane wśród dzieci i traktowane jak pełnoprawni członkowie naszej rodziny.",
      kittensIntro2:
        "Stawiamy na zdrowe linie hodowlane, odpowiedzialną hodowlę i wczesną socjalizację. Każde kocię jest przygotowane do życia w rodzinie.",
      kittensIntro3: "Ze względu na duże zainteresowanie zalecamy wcześniejszy kontakt i zapis na listę oczekujących.",
      availableLitter: "Dostępny miot",
      availableStatus: "Status: Planowany / dostępny wkrótce",
      reservation: "Rezerwacja",
      reservationText: "Skontaktuj się w sprawie listy oczekujących",
      pedigree: "Rodowód",
      breedingCats: "Nasze koty hodowlane",
      reservationKicker: "Rezerwacja",
    },
  };

  useEffect(() => {
    document.title = seo[lang].title;

    const setMeta = (name, value) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMeta("description", seo[lang].description);
    setMeta("keywords", seo[lang].keywords);
  }, [lang]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fbf7f1] text-[#51483f] selection:bg-[#d8c7b6]/30">
      <nav className="sticky top-0 z-40 border-b border-[#eadfd2]/70 bg-[#fbf7f1]/75 backdrop-blur-xl overflow-visible">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
          <button onClick={() => scrollTo("home")} className="absolute -left-1 top-1/2 z-50 -translate-y-1/2 md:-left-8 lg:-left-10">
            <LogoMark size="nav" />
          </button>

          <div className="w-28 md:w-36" />

          <div className="hidden items-center gap-7 text-sm uppercase tracking-[0.28em] text-[#3f3934] lg:flex">
            <button onClick={() => scrollTo("home")} className="hover:text-[#b08f73]">{content[lang].navHome}</button>
            <button onClick={() => scrollTo("about")} className="hover:text-[#b08f73]">{content[lang].navAbout}</button>
            <button onClick={() => scrollTo("cats")} className="hover:text-[#b08f73]">{content[lang].navCats}</button>
            <button onClick={() => scrollTo("kittens")} className="hover:text-[#b08f73]">{content[lang].navKittens}</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-[#b08f73]">{content[lang].navContact}</button>
          </div>

          <div className="flex items-center gap-2">
            {["EN", "NO", "PL"].map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={`rounded-full px-3 py-1 text-xs tracking-widest transition ${
                  lang === item ? "bg-[#b89577] text-white" : "bg-white/70 text-[#7a6d62] hover:bg-[#f1e8df]"
                }`}
              >
                {item}
              </button>
            ))}
            <Button onClick={() => scrollTo("kittens")} className="hidden rounded-full bg-[#b89577] px-6 text-xs uppercase tracking-[0.22em] hover:bg-[#a78063] md:inline-flex">
              {content[lang].buttonKittens} ♡
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden border-b border-[#eadfd2]">
        <div className="absolute inset-0 bg-[#4a3a2f]/25 z-10" />

        <img
          src="a_serene_cozy_indoor_scene_with_a_large_fluffy_li.png"
          alt="Ragdoll cat"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative z-20 flex min-h-[72vh] items-center justify-center px-6 py-24 text-center md:min-h-[78vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            

            <h1 className="font-serif text-4xl font-light leading-tight text-white drop-shadow-xl md:text-6xl">
              {content[lang].heroTitle}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm uppercase tracking-[0.28em] text-white/80 md:text-base">
              ♡ {content[lang].heroSubtitle}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => scrollTo("cats")}
                className="rounded-full bg-white/90 px-8 py-6 text-xs uppercase tracking-[0.25em] text-[#4d443d] hover:bg-white"
              >
                {content[lang].buttonCats}
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollTo("about")}
                className="rounded-full border border-white/40 bg-white/10 px-8 py-6 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-sm hover:bg-white/20"
              >
                {content[lang].navAbout}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-20 -mt-20 flex justify-center">
        <LogoMark size="lg" />
      </div>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr_1fr]">
          <div className="hidden border-r border-[#dfd0c1] pr-10 text-center md:block">
            <div className="mx-auto mb-5 text-5xl text-[#b89577]">⌂</div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#7a6d62]">{content[lang].badgeLeft}</p>
            <p className="mt-6 text-xl text-[#b89577]">♡</p>
          </div>

          <div className="text-center">
            
            <h2 className="font-serif text-3xl font-light text-[#4d443d] md:text-4xl">{content[lang].aboutTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#736960]">{content[lang].aboutText}</p>
            <button onClick={() => scrollTo("kittens")} className="mt-7 text-xs uppercase tracking-[0.3em] text-[#b08f73] hover:opacity-70">
              {content[lang].buttonKittens} ›
            </button>
          </div>

          <div className="hidden border-l border-[#dfd0c1] pl-10 text-center md:block">
            <div className="mx-auto mb-5 text-5xl text-[#b89577]">♡</div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#7a6d62]">{content[lang].badgeRight}</p>
            <p className="mt-6 text-xl text-[#b89577]">♡</p>
          </div>
        </div>
      </section>

      <section id="cats" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b08f73]">{content[lang].breedingCats}</p>
          <h2 className="mt-3 font-serif text-4xl font-light text-[#4d443d]">{content[lang].catsTitle}</h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {cats.map((cat) => (
            <Card key={cat.name} className="group cursor-pointer overflow-hidden rounded-2xl border-0 bg-white/90 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b89577]/20">
              <CardContent className="p-0 text-center">
                <div className="overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onClick={() => setSelectedImage(cat)}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#4d443d]">{cat.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#9a8c7d]">{cat.color}</p>
                  <a href={cat.pedigree} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs uppercase tracking-[0.22em] text-[#b08f73] underline-offset-4 hover:underline">
                    {content[lang].pedigree} ↗
                  </a>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#9a8c7d]">♡ {cat.status}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="kittens" className="bg-[#f4ece4] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b08f73]">{content[lang].reservationKicker}</p>
            <h2 className="mt-3 font-serif text-4xl font-light text-[#4d443d]">{content[lang].kittensTitle}</h2>
          </div>

          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center leading-relaxed text-[#736960]">
            <p>{content[lang].kittensIntro1}</p>
            <p>{content[lang].kittensIntro2}</p>
            <p className="font-medium text-[#4d443d]">{content[lang].kittensIntro3}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-0 bg-white/80 shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl text-[#4d443d]">{content[lang].availableLitter}</h3>
                <p className="mt-3 text-[#736960]">{content[lang].availableStatus}</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-0 bg-white/80 shadow-sm">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl text-[#4d443d]">{content[lang].reservation}</h3>
                <p className="mt-3 text-[#736960]">{content[lang].reservationText}</p>
                <Button onClick={() => scrollTo("contact")} className="mt-6 rounded-full bg-[#b89577] px-7 text-xs uppercase tracking-[0.25em] hover:bg-[#a78063]">
                  {content[lang].navContact}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10">
        <h2 className="font-serif text-4xl font-light text-[#4d443d]">{content[lang].contactTitle}</h2>
        <p className="mt-5 text-[#736960]">noralune@example.com</p>
        <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm uppercase tracking-[0.22em] text-[#b08f73]">
          <a href="#" className="hover:opacity-70">Instagram</a>
          <a href="#" className="hover:opacity-70">Facebook</a>
          <a href="#" className="hover:opacity-70">TikTok</a>
        </div>
      </section>

      <footer className="border-t border-[#eadfd2] py-8 text-center text-xs uppercase tracking-[0.2em] text-[#9a8c7d]">
        © {new Date().getFullYear()} Noralune Cattery · Norway · Ragdoll Cats
      </footer>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-1 text-[#4d443d] shadow-lg">×</button>
            <img src={selectedImage.img} alt={selectedImage.name} className="max-h-[82vh] rounded-2xl object-contain shadow-2xl" />
            <p className="mt-4 text-center font-serif text-xl text-white">{selectedImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
