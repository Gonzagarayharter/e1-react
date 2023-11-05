import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Nosotros from "./components/Nosotros/Nosotros";
import Productos from "./components/Productos/Productos";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <Banner />
        <Nosotros />
        <Productos />
        <Footer />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
