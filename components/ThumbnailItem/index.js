// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {id, image, name, changeImage} = props
  const imageClicked = () => {
    changeImage(id)
  }
  return (
    <li>
      <button type="button" onClick={imageClicked} className="thumb-url">
        <img src={image} alt={name} />
      </button>
    </li>
  )
}
export default ThumbnailItem
