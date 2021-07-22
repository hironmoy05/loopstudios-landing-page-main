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
            <figure className="imageBox__shape">
              <span className="shades"></span>
                <picture>
                      <source 
                        srcSet={imageDeepEarthD}
                        media="(min-width: 40em)"
                      />
                    <img src={imageDeepEarthM} alt="" className="imageBox__image" />
                </picture>
              <figcaption className="imageBox__caption">
                Deep<br /> Earth
              </figcaption>
            </figure>
            <figure className="imageBox__shape">
              <span className="shades"></span>
                <picture>
                  <source
                    srcSet={imageNightArcadeD}
                    media="(min-width: 40em)"
                  />
                  <img src={imageNightArcadeM} alt="" className="imageBox__image" />
                </picture>
              <figcaption className="imageBox__caption">
                Night<br /> Arcade
              </figcaption>
            </figure>
            <figure className="imageBox__shape">
              <span className="shades"></span>
                <picture>
                  <source 
                    srcSet={imageSoccerTeamD}
                    media="(min-width: 40em)"
                  />
                  <img src={imageSoccerTeamM} alt="" className="imageBox__image" />
                </picture>
              <figcaption className="imageBox__caption">
                Soccer<br /> Team VR
              </figcaption>
            </figure>
            <figure className="imageBox__shape">
              <span className="shades"></span>
                <picture>
                  <source 
                    srcSet={imageGridD}
                    media="(min-width: 40em)"
                  />
                  <img src={imageGridM} alt="" className="imageBox__image" />
                </picture>
            <figcaption className="imageBox__caption">
              The<br /> Grid
            </figcaption>
            </figure>
        </div>
          <div className="imageBox split mt-m">
                <figure className="imageBox__shape">
                  <span className="shades"></span>
                    <picture>
                      <source 
                        srcSet={imageFromAboveD}
                        media="(min-width: 40em)"
                      />
                        <img src={imageFromAboveM} alt="" className="imageBox__image" />
                    </picture>
                  <figcaption className="imageBox__caption">
                    From up<br /> Above VR
                  </figcaption>
                </figure>
                <figure className="imageBox__shape">
                  <span className="shades"></span>
                    <picture>
                      <source 
                        srcSet={imagePocketBorealisD}
                        media="(min-width: 40em)"
                      />
                        <img src={imagePocketBorealisM} alt="" className="imageBox__image" />
                    </picture>
                  <figcaption className="imageBox__caption">
                  Pocket<br /> Borealis
                  </figcaption>
                </figure>
              <figure className="imageBox__shape">
                <span className="shades"></span>
                  <picture>
                    <source 
                      srcSet={imageCuriosityD}
                      media="(min-width: 40em)"
                    />
                    <img src={imageCuriosityM} alt="" className="imageBox__image" />
                  </picture>
                <figcaption className="imageBox__caption">
                  The<br /> Curiosity
                </figcaption>
              </figure>
                <figure className="imageBox__shape">
                  <span className="shades"></span>
                    <picture>
                      <source
                        srcSet={imageFisheyeD}
                        media="(min-width: 40em)"
                      />
                        <img src={imageFisheyeM} alt="" className="imageBox__image" />
                    </picture>
                  <figcaption className="imageBox__caption">
                    Make it<br /> fisheye
                  </figcaption>
                </figure>
          </div>
      </div>
  )
}

export default SectionGallery;