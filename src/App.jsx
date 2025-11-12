import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {
  Bed,
  Utensils,
  Calendar,
  Bell,
  Wifi,
  BadgeDollarSign,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Waves,
} from 'lucide-react'

// Palette: blanc, or, noir
const btnPrimary =
  'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-yellow-600' : 'text-gray-700 hover:text-gray-900'}`

function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { to: '/', label: 'Accueil' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/galerie', label: 'Galerie' },
    { to: '/chambres', label: 'Chambres & Tarifs' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 shadow-lg" />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-wide text-gray-900">GROUPE TANOH HOTEL</span>
              <span className="text-xs text-gray-500">Grand-Bassam, Côte d’Ivoire</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {items.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className={`${btnPrimary} ml-2`}>
              Réserver maintenant
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-black/5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 space-y-2">
            {items.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-2 py-2 rounded-md text-sm ${isActive ? 'text-yellow-700 bg-yellow-50' : 'text-gray-800 hover:bg-black/5'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className={`${btnPrimary} block text-center`}>
              Réserver maintenant
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600" />
            <span className="font-semibold">GROUPE TANOH HOTEL</span>
          </div>
          <p className="text-sm text-gray-600">Luxe, confort et hospitalité ivoirienne au cœur de Grand-Bassam.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Coordonnées</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-yellow-600"/> En face de SANGEL, à 50 mètres, Grand-Bassam</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-yellow-600"/> WhatsApp: +225 07 00 00 00</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-yellow-600"/> contact@grouptanohhotel.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Suivez-nous</h4>
          <div className="flex gap-3 text-sm text-gray-600">
            <a href="#" className="hover:text-yellow-700">Facebook</a>
            <a href="#" className="hover:text-yellow-700">Instagram</a>
            <a href="#" className="hover:text-yellow-700">Tripadvisor</a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Groupe Tanoh Hotel. Tous droits réservés.</div>
    </footer>
  )
}

export function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">{/* spacer for fixed nav */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="relative z-10">
        <div className="bg-gradient-to-b from-black/60 to-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-yellow-500/20 ring-1 ring-yellow-500/40 text-yellow-50 px-3 py-1 text-xs font-medium mb-4">Hôtel de luxe à Grand-Bassam</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Bienvenue au Groupe Tanoh Hotel, où le confort rencontre l’excellence.
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Découvrez votre havre de paix et de luxe au cœur de Grand-Bassam, à seulement quelques pas de la mer.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className={btnPrimary}>Réserver maintenant</Link>
                <Link to="/galerie" className="inline-flex items-center text-white font-medium hover:underline">Voir la galerie</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  const features = [
    { icon: <Bed className="h-5 w-5" />, title: 'Chambres élégantes', text: 'Confort absolu et design raffiné' },
    { icon: <Wifi className="h-5 w-5" />, title: 'Wi‑Fi haut débit', text: 'Restez connecté en toutes circonstances' },
    { icon: <Utensils className="h-5 w-5" />, title: 'Cuisine gourmande', text: 'Saveurs locales et internationales' },
    { icon: <Waves className="h-5 w-5" />, title: 'Piscine & détente', text: 'Moments de fraîcheur et bien‑être' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 p-6 bg-white/60 hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  const imgs = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501117716987-c8e1ecb21009?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Aperçu de la galerie</h2>
          <Link to="/galerie" className="text-sm font-medium text-yellow-700 hover:underline">Tout voir</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-xl shadow-sm">
              <img src={src} alt="Hôtel" className="h-56 w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      name: 'Aïcha K.',
      text: 'Séjour exceptionnel ! Personnel chaleureux, chambre impeccable et vue magnifique. Je reviendrai sans hésiter.',
      stars: 5,
    },
    {
      name: 'Yao M.',
      text: 'Excellent service et cuisine délicieuse. L’emplacement à Grand‑Bassam est idéal pour se détendre.',
      stars: 5,
    },
    {
      name: 'Nadia B.',
      text: 'Ambiance raffinée, literie très confortable et piscine superbe. Un vrai havre de paix.',
      stars: 4,
    },
  ]
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8">Témoignages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-black/5 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-yellow-600">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-medium text-gray-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <GalleryPreview />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Luxe, confort et hospitalité ivoirienne</h2>
            <p className="text-gray-700 mb-4">
              Depuis sa création, le Groupe Tanoh Hotel s’engage à offrir une expérience d’exception où chaque détail compte. Notre mission: allier confort moderne, service de qualité et authenticité de l’accueil ivoirien.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-yellow-600"/> Confort</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-yellow-600"/> Service de qualité</div>
              <div className="flex items-center gap-2"><BadgeDollarSign className="h-4 w-4 text-yellow-600"/> Meilleur rapport qualité‑prix</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFtYnJlfGVufDB8MHx8fDE3NjI5NjE1MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Chambre" />
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop" alt="Suite" />
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1200&auto=format&fit=crop" alt="Piscine" />
            <img className="rounded-xl object-cover h-40 w-full" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" alt="Restaurant" />
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold">Prêt à vivre l’expérience Tanoh ?</h2>
          <p className="text-gray-700 mt-2">Réservez votre séjour dès aujourd’hui et profitez d’offres exclusives.</p>
          <div className="mt-6">
            <Link to="/contact" className={btnPrimary}>Réserver maintenant</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export function Apropos() {
  return (
    <div>
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mb-4">À propos</h1>
          <p className="text-gray-700 mb-4">
            Situé à Grand‑Bassam, en face de SANGEL à 50 mètres, le Groupe Tanoh Hotel incarne l’élégance moderne et l’hospitalité ivoirienne. Depuis nos débuts, nous plaçons le confort de nos hôtes au cœur de notre engagement.
          </p>
          <p className="text-gray-700 mb-4">
            Notre mission est simple: offrir un cadre raffiné, un service irréprochable et une expérience inoubliable. Nos valeurs reposent sur le confort, la qualité de service et l’accueil chaleureux typiquement ivoirien.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl border border-black/5 p-5"><h3 className="font-semibold mb-1">Confort</h3><p className="text-sm text-gray-600">Chambres spacieuses, literie premium et ambiance apaisante.</p></div>
            <div className="rounded-xl border border-black/5 p-5"><h3 className="font-semibold mb-1">Service</h3><p className="text-sm text-gray-600">Équipe attentionnée, disponible 24/7 et aux petits soins.</p></div>
            <div className="rounded-xl border border-black/5 p-5"><h3 className="font-semibold mb-1">Hospitalité</h3><p className="text-sm text-gray-600">Chaleur, respect des traditions et partage de la culture locale.</p></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function Galerie() {
  const imgs = [
    'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540202404-c65aee04c09f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584132967334-10e0382b3a00?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop',
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-6">Galerie</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt={`Galerie ${i+1}`} className="h-56 w-full object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Chambres() {
  const rooms = [
    {
      name: 'Chambre Standard',
      price: '45 000 FCFA / nuit',
      img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop',
      features: ['Lit queen‑size', 'Climatisation', 'Wi‑Fi gratuit', 'Petit‑déjeuner inclus'],
    },
    {
      name: 'Chambre Deluxe',
      price: '65 000 FCFA / nuit',
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
      features: ['Lit king‑size', 'Vue piscine', 'Mini‑bar', 'Service en chambre'],
    },
    {
      name: 'Suite Prestige',
      price: '120 000 FCFA / nuit',
      img: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1600&auto=format&fit=crop',
      features: ['Salon privé', 'Baignoire', 'Balcon', 'Transfert aéroport'],
    },
  ]
  const whatsapp = (room) =>
    `https://wa.me/2250700000000?text=${encodeURIComponent('Bonjour, je souhaite réserver: ' + room)}`
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-6">Chambres & Tarifs</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((r) => (
            <div key={r.name} className="rounded-2xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src={r.img} alt={r.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">{r.name}</h3>
                <div className="text-yellow-700 font-semibold mt-1">{r.price}</div>
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-yellow-500"/> {f}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <a href={whatsapp(r.name)} target="_blank" rel="noreferrer" className={btnPrimary}>Réserver via WhatsApp</a>
                  <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold border border-yellow-600 text-yellow-700 hover:bg-yellow-50">Nous contacter</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const services = [
    { icon: <Bed className="h-5 w-5" />, title: 'Hébergement', desc: 'Chambres et suites alliant élégance et confort' },
    { icon: <Utensils className="h-5 w-5" />, title: 'Restauration', desc: 'Restaurant et bar avec cuisine locale & internationale' },
    { icon: <Calendar className="h-5 w-5" />, title: 'Salle de conférence', desc: 'Espaces modulables pour réunions et séminaires' },
    { icon: <Bell className="h-5 w-5" />, title: 'Service en chambre', desc: 'Disponibilité et discrétion 24/7' },
    { icon: <Waves className="h-5 w-5" />, title: 'Piscine', desc: 'Espace détente pour petits et grands' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'Événements', desc: 'Mariages, cocktails, anniversaires, etc.' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-6">Services</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/5 p-6 bg-white/70 hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' })
  const mailto = () => {
    const subject = encodeURIComponent('Demande de réservation – Groupe Tanoh Hotel')
    const body = encodeURIComponent(`Nom: ${form.nom}\nEmail: ${form.email}\nTéléphone: ${form.telephone}\n\nMessage:\n${form.message}`)
    return `mailto:contact@grouptanohhotel.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = mailto()
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Contact</h1>
          <p className="text-gray-700 mb-6">Une question, une demande de devis ou une réservation ? Écrivez‑nous ou contactez‑nous par WhatsApp. Nous vous répondrons rapidement.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet</label>
              <input required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Votre nom" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="exemple@mail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Téléphone</label>
                <input value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="WhatsApp" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Parlez‑nous de votre projet ou séjour" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className={btnPrimary}>Envoyer le message</button>
              <a href={`https://wa.me/2250700000000?text=${encodeURIComponent('Bonjour, je souhaite des informations sur les réservations.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold border border-green-600 text-green-700 hover:bg-green-50">
                <Phone className="h-4 w-4"/> WhatsApp
              </a>
              <a href="mailto:contact@grouptanohhotel.com" className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold border border-gray-600 text-gray-700 hover:bg-gray-50">
                <Mail className="h-4 w-4"/> Email
              </a>
            </div>
          </form>
        </div>

        <div className="rounded-2xl overflow-hidden border border-black/5 h-[420px]">
          <iframe
            title="Emplacement – Grand-Bassam"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.656876930442!2d-3.7401!3d5.211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1e2a1d9d8d8c5%3A0x2b5a7f2e5c1db6b!2sGrand-Bassam!5e0!3m2!1sfr!2sci!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default function App() {
  // This default export is unused (kept for backward compatibility)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-10">
        <h1 className="text-3xl font-semibold">GROUPE TANOH HOTEL</h1>
        <p className="text-gray-600 mt-2">Chargement…</p>
        <Link to="/" className="mt-6 inline-block text-yellow-700 hover:underline">Aller à l’accueil</Link>
      </div>
    </div>
  )
}
