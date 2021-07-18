import SectionHeader from "./SectionHeader/SectionHeader";
import SectionGallery from "./SectionGallery/SectionGallery";

function Creations () {
  return (
    <section className="section-creations">
      <div className="container">
        <SectionHeader />
        <SectionGallery />
        <a href="#" className="btn btn--sScreen mt-l">See All</a>
      </div>
    </section>
  )
}

export default Creations;