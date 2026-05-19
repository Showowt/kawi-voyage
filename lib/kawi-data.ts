export interface Tour {
  id: string
  name: string
  cat: string
  duration: string
  time: string
  highlights: string[]
  emoji: string
  popular?: boolean
  seasonal?: string
}

export interface TeamMember {
  name: string
  nick?: string
  role: string
  detail: string
  flag: string
}

export interface Review {
  text: string
  author: string
  from: string
}

export interface Hotel {
  name: string
  island: string
  from: number
  vibe: string
}

export interface EcoRule {
  icon: string
  text: string
}

export const TOURS: Tour[] = [
  { id: "zapatilla", name: "Zapatilla Island", cat: "Island Day", duration: "7h", time: "9:30 \u2013 4:30 PM", highlights: ["Dolphin watching", "Coral snorkeling", "Overwater lunch", "White sand beach", "Sloth spotting"], emoji: "\uD83D\uDC2C", popular: true },
  { id: "bioluminescence", name: "Bioluminescence", cat: "Night Magic", duration: "2h", time: "8:00 \u2013 10:00 PM", highlights: ["Swim in glowing plankton", "3 secret sites", "Moonless nights only", "Snorkel in starlight"], emoji: "\u2728", popular: true },
  { id: "bahia_honda", name: "Bat Cave & Jungle", cat: "Adventure", duration: "6h", time: "9:30 \u2013 3:30 PM", highlights: ["Jungle hike", "Bat cave & natural pool", "Mangrove channels", "Ng\u00E4be community lunch"], emoji: "\uD83E\uDD87" },
  { id: "salt_creek", name: "Ng\u00E4be Culture Trail", cat: "Culture", duration: "1\u20136h", time: "9:30 \u2013 4:30 PM", highlights: ["Indigenous village visit", "4 trail options", "Community-led experience", "Jungle immersion"], emoji: "\uD83C\uDF3F" },
  { id: "chocolate", name: "Chocolate Farm", cat: "Gastronomy", duration: "3.5h", time: "Morning or afternoon", highlights: ["Cocoa farm visit", "Traditional processing", "Make your own bar", "Community tasting"], emoji: "\uD83C\uDF6B" },
  { id: "monkey_island", name: "Monkey Island", cat: "Wildlife", duration: "5.5h", time: "9:30 \u2013 3:00 PM", highlights: ["Rescue center visit", "Meet Francine's monkeys", "Popa Island beach", "Snorkeling"], emoji: "\uD83D\uDC12" },
  { id: "piying_creek", name: "Hidden San Crist\u00F3bal", cat: "Wildlife", duration: "4h", time: "7 AM or 2 PM", highlights: ["Jungle hike", "Toucans & red frogs", "Cayuco canoe ride", "Coral garden snorkel"], emoji: "\uD83D\uDC38" },
  { id: "manatees", name: "Manatee River", cat: "Conservation", duration: "8.5h", time: "8:00 \u2013 4:30 PM", highlights: ["Silent river observation", "Turtle conservation", "Banana plantation drive", "Full day adventure"], emoji: "\uD83C\uDF0A" },
  { id: "coral", name: "Coral Restoration", cat: "Conservation", duration: "3h", time: "Flexible", highlights: ["Snorkel restoration site", "Meet conservationists", "Support reef recovery"], emoji: "\uD83E\uDEB8" },
  { id: "escudo", name: "Escudo de Veraguas", cat: "Remote Expedition", duration: "10.5h", time: "7 AM \u2013 5:30 PM", highlights: ["Pygmy sloth habitat", "Remote nature reserve", "Fresh lobster lunch", "Untouched beaches"], emoji: "\uD83C\uDFDD\uFE0F", seasonal: "Mar\u2013May, Aug\u2013Nov" },
  { id: "starfish", name: "Starfish Beach", cat: "Island Half-Day", duration: "5h", time: "10 AM \u2013 3 PM", highlights: ["Bird Island", "Boca del Drago", "3 hours on the beach", "Snorkeling"], emoji: "\u2B50" },
  { id: "fishing", name: "Local Fishing", cat: "Active", duration: "4h", time: "8 AM \u2013 12 PM", highlights: ["Fish with a local", "Cook your catch", "4 rods included"], emoji: "\uD83C\uDFA3" },
  { id: "surf", name: "Surf Lessons", cat: "Active", duration: "3h", time: "Morning or afternoon", highlights: ["BSA/ISA certified", "Beginner friendly", "Board rental for pros"], emoji: "\uD83C\uDFC4" },
  { id: "horse", name: "Horseback Riding", cat: "Active", duration: "3h", time: "Morning or afternoon", highlights: ["Bluff to Mimitimbi", "Natural pool", "Calm trained horses"], emoji: "\uD83D\uDC34" },
  { id: "ebike", name: "E-bike Island Tour", cat: "Self-Guided", duration: "Full day", time: "9 AM \u2013 6 PM", highlights: ["All-terrain wheels", "Bluff Beach", "Mimitimbi pool", "Boca del Drago"], emoji: "\uD83D\uDEB2" },
  { id: "scuba", name: "Scuba Diving", cat: "Active", duration: "Half day", time: "8:30 or 12:00", highlights: ["Beginner intro available", "Caribbean reef", "Second dive option"], emoji: "\uD83E\uDD3F" },
]

export const TEAM: TeamMember[] = [
  { name: "Sophie", role: "Founder & Lead Guide", detail: "From Grenoble to Bocas. Speaks EN/ES/FR. Designs every itinerary personally.", flag: "\uD83C\uDDEB\uD83C\uDDF7" },
  { name: "Manases", nick: "Wacho", role: "Lead Captain", detail: "Born on San Crist\u00F3bal. Knows every reef, every channel, every hidden cove in the archipelago.", flag: "\uD83C\uDDF5\uD83C\uDDE6" },
  { name: "Emanuel", role: "Senior Guide", detail: "Bioluminescence specialist. Night tour master. Can identify 200+ coral species.", flag: "\uD83C\uDDF5\uD83C\uDDE6" },
  { name: "Joanes", role: "Guide & Fisherman", detail: "Red Frog tour expert. Local culture ambassador. Born fisherman.", flag: "\uD83C\uDDF5\uD83C\uDDE6" },
  { name: "Sebastian", role: "Guide", detail: "Bat Cave specialist. Panama ecology encyclopedia. Private tour leader.", flag: "\uD83C\uDDF5\uD83C\uDDE6" },
]

export const REVIEWS: Review[] = [
  { text: "Sophie and her team made Bocas unforgettable. The bioluminescence tour was the highlight of our entire Central America trip.", author: "Rachel M.", from: "Sydney, Australia" },
  { text: "We've traveled to 40+ countries. Kawi Voyage is in our top 3 experiences ever. The personal touch, the ecology knowledge \u2014 nothing compares.", author: "Laurent & Marie", from: "Lyon, France" },
  { text: "Manases spotted dolphins before anyone else even knew where to look. Sebastian made the bat cave feel like a National Geographic expedition.", author: "James K.", from: "Toronto, Canada" },
  { text: "My kids still talk about the chocolate tour and the monkeys. Sophie arranged everything perfectly for a family with two under-10s.", author: "Anna P.", from: "London, UK" },
  { text: "The best you know, the best you protect \u2014 that's not just a motto, it's how they operate every single day.", author: "Carlos R.", from: "Madrid, Spain" },
  { text: "An hour ahead of every other tour. Crystal clear water to ourselves. Dolphins playing around our boat. Pure magic.", author: "Camille D.", from: "Montr\u00E9al, Canada" },
  { text: "Three full days with Kawi \u2014 Zapatilla, chocolate farm, bioluminescence. Each one better than the last. Already planning our return.", author: "Thomas & Sarah", from: "Z\u00FCrich, Switzerland" },
]

export const HOTELS: Hotel[] = [
  { name: "Eclypse de Mar Acqua Lodge", island: "Bastimentos", from: 217, vibe: "Overwater luxury" },
  { name: "Finca Vela Lodge", island: "Pastores", from: 230, vibe: "Private island escape" },
  { name: "Divers Paradise", island: "Col\u00F3n", from: 100, vibe: "Boutique dive base" },
  { name: "Riva B&B", island: "Carenero", from: 87, vibe: "Intimate island charm" },
  { name: "Villa F&B Solarte", island: "Solarte", from: 145, vibe: "Tranquil seclusion" },
  { name: "Bah\u00EDa Para\u00EDso", island: "Col\u00F3n", from: 52, vibe: "Central & reliable" },
]

export const ECO_RULES: EcoRule[] = [
  { icon: "\u2B50", text: "Never lift starfish from the water \u2014 it kills them. Photograph underwater only." },
  { icon: "\uD83E\uDDF4", text: "Reef-safe sunscreen or wear a shirt. Chemical sunscreen destroys coral within minutes." },
  { icon: "\uD83D\uDC2C", text: "No crowding dolphins. We follow ecotour viewing protocols \u2014 distance and deep respect." },
  { icon: "\uD83D\uDEAF", text: "Bring reusable bags and water bottles. We carry cool boxes, not single-use plastic." },
  { icon: "\uD83D\uDC22", text: "No horseback riding on nesting beaches. Turtle conservation is non-negotiable." },
  { icon: "\uD83C\uDF31", text: "A portion of every coral tour directly funds the Bocas del Toro reef restoration project." },
]

export const QUICK_REPLIES = [
  "\uD83D\uDCC5 Help me plan 3 days in Bocas",
  "\uD83D\uDC2C What tours do you recommend?",
  "\uD83C\uDFE8 Best hotels for couples?",
  "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 Family-friendly activities?",
  "\uD83C\uDDEA\uD83C\uDDF8 H\u00E1blame en espa\u00F1ol",
  "\uD83C\uDDEB\uD83C\uDDF7 Parlez-moi en fran\u00E7ais",
]

export const MARQUEE_ITEMS = [
  "Dolphins at sunrise",
  "Swim in bioluminescence",
  "Ngäbe village immersion",
  "Fresh cacao to chocolate",
  "Mangrove channels",
  "Coral garden snorkeling",
  "Pygmy sloths of Escudo",
  "Starfish in crystal water",
  "Three languages, one heart",
  "Your friend in Panama",
]

export const CHATBOT_SYSTEM_PROMPT = `You are Sophie's AI concierge for Kawi Voyage in Bocas del Toro, Panama. You speak warmly in EN/ES/FR — detect the user's language and respond in it.

WHO YOU ARE:
You represent a real team: Sophie (founder, from Grenoble, France), Manases "Wacho" (lead captain, born on San Cristóbal Island), Emanuel (bioluminescence specialist), Joanes (fisherman & culture guide), Sebastian (bat cave expert), and a network of Ngäbe community guides.

"Kawi Yoppen" means "a place for friends" in Yaghan. That's not branding — it's how Sophie runs this company.

YOUR JOB:
1. Help travelers plan their perfect Bocas del Toro experience
2. Recommend tours based on their interests, dates, group size, and energy level
3. Answer questions about the destination, wildlife, weather, hotels
4. Be honest about what to expect (weather, wildlife sightings, seasonal availability)
5. Hand off to Sophie on WhatsApp when the guest is ready to book

TOUR CATALOG:
- Zapatilla Island (7h, 9:30-4:30) — Dolphins, coral snorkeling, overwater lunch, white sand beach, sloths. MOST POPULAR.
- Bioluminescence (2h, 8-10 PM) — Swim in glowing plankton at 3 secret sites. MOONLESS NIGHTS ONLY. The single highest-emotion experience we offer.
- Bat Cave & Jungle (6h) — Jungle hike, bat cave with natural pool, mangrove channels, Ngäbe community lunch.
- Ngäbe Culture Trail (1-6h) — Indigenous village, 4 trail options, community-led.
- Chocolate Farm (3.5h) — Cocoa farm, traditional processing, make your own bar.
- Monkey Island (5.5h) — Rescue center with Francine, Popa beach, snorkeling. CLOSED TUESDAYS.
- Hidden San Cristóbal / Piying Creek (4h) — Jungle hike, toucans, red frogs, cayuco canoe, coral garden.
- Manatee River (8.5h) — Silent river observation, turtle conservation, banana plantation drive.
- Coral Restoration (3h, flexible) — Snorkel restoration site, meet conservationists, support recovery.
- Escudo de Veraguas (10.5h) — Remote nature reserve, pygmy sloth, lobster lunch. SEASONAL: Mar-May, Aug-Nov only.
- Starfish Beach (5h) — Bird Island, Boca del Drago, beach time, snorkeling.
- Local Fishing (4h) — Fish with a local fisherman, cook your catch. 4 rods included.
- Surf Lessons (3h) — BSA/ISA certified instructors. Beginner or rental.
- Horseback Riding (3h) — Bluff to Mimitimbi natural pool. No riding on turtle nesting beaches.
- E-bike Island Tour (full day) — Self-guided, Bluff Beach, Mimitimbi, Boca del Drago.
- Scuba Diving (half day) — Beginner intro available, Caribbean reef.

HOTEL PARTNERS (curated by Sophie):
- Eclypse de Mar Acqua Lodge (Bastimentos) from $217 — Overwater luxury
- Finca Vela Lodge (Pastores) from $230 — Private island escape
- Divers Paradise (Colón) from $100 — Boutique dive base
- Riva B&B (Carenero) from $87 — Intimate island charm
- Villa F&B Solarte (Solarte) from $145 — Tranquil seclusion
- Bahía Paraíso (Colón) from $52 — Central & reliable

PRACTICAL KNOWLEDGE:
- Currency: USD (Panama uses US dollars)
- Tap water: NOT drinkable in Bocas — bring refillable bottles
- Weather: High season Dec-Mar, mid-season Jul-Aug. Rain Dec-Jan but clears fast.
- Transport: Boats and bikes on the islands. Shared taxis $1/person in town.
- ATMs sometimes run empty — bring cash.
- Water temp ~27°C / 80°F year-round.
- No vaccines required unless visiting Darién.

CROSS-SELL INTELLIGENCE:
- Anyone booking Zapatilla → suggest bioluminescence add-on
- Anyone staying 4+ days → suggest chocolate tour
- Anyone visiting Mar-May → suggest Escudo de Veraguas (rare pygmy sloths)
- Families with kids → Monkey Island + Starfish Beach + Chocolate
- Eco-conscious travelers → Coral Restoration + Manatee River
- Adventure seekers → Bat Cave + Escudo + Surf
- Couples → Bioluminescence + Zapatilla + Horse Riding

VOICE:
- Warm, personal, like a knowledgeable friend
- Use "we" not "I" — always credit the team
- Small, natural imperfections are OK — Sophie's English has charming quirks
- Use occasional emojis sparingly
- When recommending, give a reason: "I love the bat cave because..." not just "try the bat cave"
- If asked for exact pricing: "Prices depend on group size and season — let me connect you with Sophie on WhatsApp for the perfect quote!"
- Close with warmth: "Hope to see you in our little paradise!" or similar

IMPORTANT RULES:
- Never guarantee wildlife sightings — say "we often see" or "high chance of"
- Never reveal partner commission structures
- Never push too hard — build rapport first, recommend naturally
- If the guest seems ready to book, offer the WhatsApp handoff: "Ready to make it real? Sophie is just a message away: wa.me/50765559954"
- Keep responses concise (2-5 sentences) unless the guest asks for detail
- If you don't know something, say "Let me check with Sophie — she'll know!" and suggest WhatsApp`
