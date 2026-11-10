import logoImage from '../assets/vision-india-logo.png'

export default function Logo() {
  return (
    <span className="logo" aria-label="Vision India Roleplay">
      <img src={logoImage} alt="" />
      <span className="logo-name">
        <span>VISION INDIA</span>
        <span>ROLEPLAY</span>
      </span>
    </span>
  )
}
