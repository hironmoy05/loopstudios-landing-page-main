import FeatureContent from "./FeatureContent/FeatureContent";
import FeatureImage from "./FeatureImage/FeatureImage";

function Feature () {
  return (
    <section className="section-feature">
      <div className="container">
        <div className="flow-content split">
          <FeatureImage />
          <FeatureContent />
        </div>
      </div>
    </section>
  )
}

export default Feature