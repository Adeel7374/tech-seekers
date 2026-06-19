import webImg from '../assets/web-img.png'

export const websiteImageMap = {
  'web-img': webImg,
}

export function getWebsiteImage(website) {
  return websiteImageMap[website.image]
}
