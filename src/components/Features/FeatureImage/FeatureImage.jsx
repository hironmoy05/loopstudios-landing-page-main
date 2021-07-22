import imageInteractiveD from "../../../images/desktop/image-interactive.jpg";
import imageInteractiveM from "../../../images/mobile/image-interactive.jpg";

function FeatureImage () {
  return (
    <div className="feature-image">
      <picture>
        <source 
          srcSet={imageInteractiveD}
          media="(min-width: 40em)"
        />
        <img src={imageInteractiveM} alt="VR Set" />
      </picture>
    </div>
  )
}

export default FeatureImage;