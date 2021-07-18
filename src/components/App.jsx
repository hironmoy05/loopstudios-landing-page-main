import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Feature from "./Features/Feature";
import Creations from "./Creations/Creations";

function App () {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Feature />
        <Creations />
      </main>
      <Footer />
    </>
  )
}

export default App;