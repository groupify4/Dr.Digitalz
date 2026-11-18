// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY. Everything on the page is driven from here.
// A link with an empty `url` is hidden until you fill it in.
// ─────────────────────────────────────────────────────────────
export type IconName =
  | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'linkedin'
  | 'whatsapp' | 'telegram' | 'website' | 'email' | 'map'

export interface LinkItem {
  id: string
  label: string
  description?: string
  url: string
  icon?: IconName
  logo?: string      // path inside /public; overrides the icon
  photo?: boolean    // true: show `logo` as a full round photo instead of a cropped logo
  accent: string     // hex colour used for the hover glow
}

export const site = {
  brand: 'Dr. Digitalz',
  tagline: 'Your Empowerment… Our Impact',
  description: 'One family of brands for media, language, debate and personal growth. Pick a brand to follow it.',
  logo: 'brand/digitalz.png',
  profileImage: '',            // optional: e.g. 'brand/profile.jpg'
  theme: { ink: '#070b14', paper: '#eef2f8' },
  contact: {
    whatsapp: '',              // international format, digits only, e.g. '963900000000'
    email: '',                 // e.g. 'hello@example.com'
    website: '',               // e.g. 'https://example.com'
    location: '',              // free text, e.g. 'Aleppo, Syria'
  },
  footer: { owner: 'Groupify', url: 'https://www.instagram.com/groupify.s/' },
}

// Featured: shown first, at the very top of the page.
export const featured: LinkItem[] = [
  { id: 'whatsapp', label: 'Message Dr. Digitalz', description: 'Chat on WhatsApp · +963 938 557 755', url: 'https://wa.me/963938557755', icon: 'whatsapp', accent: '#25d366' },
  { id: 'abdulla', label: 'Dr. Abdulla Saoud', description: 'Follow on Instagram', url: 'https://www.instagram.com/dr.abdulla.saoud/', logo: 'brand/abdulla.jpg', photo: true, accent: '#e1306c' },
]

// Brands: the five logos. Instagram URLs are the ones you provided.
export const brands: LinkItem[] = [
  { id: 'digitalz', label: 'Dr. Digitalz', description: 'The main account', url: 'https://www.instagram.com/doctor.digitalzz', logo: 'brand/digitalz.png', accent: '#2f7fd6' },
  { id: 'media', label: 'Dr. Media', description: 'Content and media production', url: 'https://www.instagram.com/doctor.media.digitalz', logo: 'brand/media.png', accent: '#d9a21b' },
  { id: 'language', label: 'Dr. Language', description: 'Language learning', url: '', logo: 'brand/language.png', accent: '#c0392b' },
  { id: 'debater', label: 'Dr. Debater', description: 'Debate Academy', url: 'https://www.instagram.com/doctor.debater.academy', logo: 'brand/debater.png', accent: '#4b4bd8' },
  { id: 'myway', label: 'My Way', description: 'The My Way platform', url: 'https://www.instagram.com/my_way_platform', logo: 'brand/myway.png', accent: '#17a3b5' },
]

// Other platforms: placeholders, fill in the ones you have.
export const links: LinkItem[] = [
  { id: 'facebook', label: 'Facebook', description: 'Updates and community', url: '', icon: 'facebook', accent: '#1877f2' },
  { id: 'tiktok', label: 'TikTok', description: 'Short videos', url: '', icon: 'tiktok', accent: '#25f4ee' },
  { id: 'youtube', label: 'YouTube', description: 'Long-form videos', url: '', icon: 'youtube', accent: '#ff2d2d' },
  { id: 'linkedin', label: 'LinkedIn', description: 'Professional page', url: '', icon: 'linkedin', accent: '#0a66c2' },
  { id: 'telegram', label: 'Telegram', description: 'Channel and chat', url: '', icon: 'telegram', accent: '#2aabee' },
  { id: 'map', label: 'Location', description: 'Find us on Google Maps', url: '', icon: 'map', accent: '#34a853' },
]
