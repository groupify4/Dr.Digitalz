import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Send, Youtube } from 'lucide-react'
import type { IconName } from '../config/site'

const map = {
  instagram: Instagram, facebook: Facebook, tiktok: Music2, youtube: Youtube, linkedin: Linkedin,
  whatsapp: MessageCircle, telegram: Send, website: Globe, email: Mail, map: MapPin,
}

export default function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const C = map[name]
  return <C size={size} aria-hidden="true" />
}
