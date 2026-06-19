import flashlightIcon from '../assets/flashlight.png'
import videoDownloaderIcon from '../assets/video_downloader.jpg'
import pdfIcon from '../assets/pdf.png'
import bmiIcon from '../assets/bmi_calculator.png'
import qrIcon from '../assets/qr_code.png'

import flashlight1 from '../assets/flashlight-1.jpg'
import flashlight2 from '../assets/flashlight-2.jpg'
import flashlight3 from '../assets/flashlight-3.jpg'
import video1 from '../assets/video-1.jpg'
import video2 from '../assets/video-2.jpg'
import video3 from '../assets/video-3.jpg'
import pdf1 from '../assets/pdf-1.jpg'
import pdf2 from '../assets/pdf-2.jpg'
import pdf3 from '../assets/pdf-3.jpg'
import bmi1 from '../assets/bmi-1.jpg'
import bmi2 from '../assets/bmi-2.jpg'
import bmi3 from '../assets/bmi-3.jpg'
import qr1 from '../assets/qr-1.png'
import qr2 from '../assets/qr-2.png'
import qr3 from '../assets/qr-3.png'

export const iconMap = {
  'LED Flashlight: Color & Strobe': flashlightIcon,
  'Video Downloader No Watermark': videoDownloaderIcon,
  'PDF Converter - Word to PDF': pdfIcon,
  'BMI Calculator': bmiIcon,
  'QR Code Scanner': qrIcon,
}

const screenshotMap = {
  '../assets/flashlight-1.jpg': flashlight1,
  '../assets/flashlight-2.jpg': flashlight2,
  '../assets/flashlight-3.jpg': flashlight3,
  '../assets/video-1.jpg': video1,
  '../assets/video-2.jpg': video2,
  '../assets/video-3.jpg': video3,
  '../assets/pdf-1.jpg': pdf1,
  '../assets/pdf-2.jpg': pdf2,
  '../assets/pdf-3.jpg': pdf3,
  '../assets/bmi-1.jpg': bmi1,
  '../assets/bmi-2.jpg': bmi2,
  '../assets/bmi-3.jpg': bmi3,
  '../assets/qr-1.png': qr1,
  '../assets/qr-2.png': qr2,
  '../assets/qr-3.png': qr3,
}

export function getAppIcon(app) {
  return iconMap[app.name]
}

export function getAppScreenshots(app) {
  return (app.screenshots || []).map((path) => screenshotMap[path]).filter(Boolean)
}

export const GOOGLE_PLAY_DEV = 'https://play.google.com/store/apps/dev?id=7925886149771660944'
export const CONTACT_EMAIL = 'techseekersco@gmail.com'

export function openMailClient({ to = CONTACT_EMAIL, subject = '', body = '' } = {}) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  const href = `mailto:${to}${query ? `?${query}` : ''}`

  const link = document.createElement('a')
  link.href = href
  link.rel = 'nofollow'
  document.body.appendChild(link)
  link.click()
  link.remove()
}
