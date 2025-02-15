import pattern from "../assets/images/pattern.jpg"
export default function ImageBanner() {
  return (
    <figure className="w-full h-full max-h-screen  shadow-md overflow-hidden rounded-md">
        <img src={pattern} className="object-cover aspect-auto" alt="banner_image"/>
    </figure>
  )
}
