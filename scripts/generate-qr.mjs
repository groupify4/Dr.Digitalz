// Usage: npm run qr -- https://USER.github.io/REPO/
// Run ONLY after the site is deployed and the URL opens in a browser.
import QRCode from 'qrcode'
import { mkdirSync } from 'node:fs'

const url = process.argv[2]
if (!url || !/^https:\/\//.test(url) || /localhost|127\.0\.0\.1/.test(url)) {
  console.error('Pass the final public https URL, e.g. npm run qr -- https://USER.github.io/REPO/')
  process.exit(1)
}
mkdirSync('qr-code', { recursive: true })
const opts = { errorCorrectionLevel: 'H', margin: 4, color: { dark: '#000000', light: '#ffffff' } }
await QRCode.toFile('qr-code/dr-digitalz-qr.png', url, { ...opts, width: 2400, type: 'png' })
await QRCode.toFile('qr-code/dr-digitalz-qr.svg', url, { ...opts, type: 'svg' })
console.log('Static QR codes written to qr-code/ for', url)
