/* DESKTOP */ 
import imageDeepEarthD from "../../../images/desktop/image-deep-earth.jpg";
import imageNightArcadeD from "../../../images/desktop/image-night-arcade.jpg";
import imageSoccerTeamD from "../../../images/desktop/image-soccer-team.jpg";
import imageGridD from "../../../images/desktop/image-grid.jpg";
import imageFromAboveD from '../../../images/desktop/image-from-above.jpg';
import imagePocketBorealisD from "../../../images/desktop/image-pocket-borealis.jpg";
import imageCuriosityD from "../../../images/desktop/image-curiosity.jpg";
import imageFisheyeD from "../../../images/desktop/image-fisheye.jpg";

/* MOBILE */
import imageDeepEarthM from "../../../images/mobile/image-deep-earth.jpg";
import imageNightArcadeM from "../../../images/mobile/image-night-arcade.jpg";
import imageSoccerTeamM from "../../../images/mobile/image-soccer-team.jpg";
import imageGridM from "../../../images/mobile/image-grid.jpg";
import imageFromAboveM from '../../../images/mobile/image-from-above.jpg';
import imagePocketBorealisM from "../../../images/mobile/image-pocket-borealis.jpg";
import imageCuriosityM from "../../../images/mobile/image-curiosity.jpg";
import imageFisheyeM from "../../../images/mobile/image-fisheye.jpg";

function SectionGallery () {
  return (
    <div className="flex mt-xl" >
      <div className="imageBox split">
          <picture>
            <div className="shades"></div>
                <source 
                  srcSet={imageDeepEarthD}
                  media="(min-width: 40em)"
                  src={imageDeepEarthD}
                />
              <img src={imageDeepEarthM} alt="" className="imageBox__image" />
            <figure className="imageBox__shape">
              <figcaption className="imageBox__caption">
                Deep<br /> Earth
              </figcaption>
            </figure>
          </picture>
          <picture>
            <div className="shades"></div>
            <source
              srcSet={imageNightArcadeD}
              media="(min-width: 40em)"
              src={imageNightArcadeD}
            />
            <img src={imageNightArcadeM} alt="" className="imageBox__image" />
            <figure className="imageBox__shape">
              <figcaption className="imageBox__caption">
                Night<br /> Arcade
            </figcaption>
            </figure>
          </picture>
          <picture>
          <div className="shades"></div>
            <source 
              srcSet={imageSoccerTeamD}
              media="(min-width: 40em)"
              src={imageSoccerTeamD}
            />
            <img src={imageSoccerTeamM} alt="" className="imageBox__image" />
            <figure className="imageBox__shape">
              <figcaption className="imageBox__caption">
                Soccer<br /> Team VR
              </figcaption>
            </figure>
          </picture>
          <picture>
          <div className="shades"></div>
            <source 
              srcSet={imageGridD}
              media="(min-width: 40em)"
              src={imageGridD}
            />
            <img src={imageGridM} alt="" className="imageBox__image" />
            <figure className="imageBox__shape">
            <figcaption className="imageBox__caption">
              The<br /> Grid
            </figcaption>
            </figure>
          </picture>
        </div>
          <div className="imageBox split mt-m">
            <picture>
            <div className="shades"></div>
              <source 
                srcSet={imageFromAboveD}
                media="(min-width: 40em)"
                src={imageFromAboveD}
              />
                <img src={imageFromAboveM} alt="" className="imageBox__image" />
                <figure className="imageBox__shape">
                  <figcaption className="imageBox__caption">
                    From up<br /> Above VR
                  </figcaption>
                </figure>
            </picture>
            <picture>
            <div className="shades"></div>
              <source 
                srcSet={imagePocketBorealisD}
                media="(min-width: 40em)"
                src={imagePocketBorealisD}
              />
                <img src={imagePocketBorealisM} alt="" className="imageBox__image" />
                <figure className="imageBox__shape">
                  <figcaption className="imageBox__caption">
                  Pocket<br /> Borealis
                  </figcaption>
                </figure>
            </picture>
            <picture>
            <div className="shades"></div>
              <source 
                srcSet={imageCuriosityD}
                media="(min-width: 40em)"
                src={imagePocketBorealisD}
              />
              <img src={imageCuriosityM} alt="" className="imageBox__image" />
              <figure className="imageBox__shape">
                <figcaption className="imageBox__caption">
                  The<br /> Curiosity
                </figcaption>
              </figure>
            </picture>
            <picture>
            <div className="shades"></div>
              <source
                srcSet={imageFisheyeD}
                media="(min-width: 40em)"
                src={imageFisheyeD}
              />
                <img src={imageFisheyeM} alt="" className="imageBox__image" />
                <figure className="imageBox__shape">
                  <figcaption className="imageBox__caption">
                    Make it<br /> fisheye
                  </figcaption>
                </figure>
            </picture>
          </div>
      </div>
  )
}

export default SectionGallery;