
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import Header from "./COMPONENTS/Header";
import Main from "./COMPONENTS/Main";
import Services from "./COMPONENTS/SERVICES";
import Cobertura from "./COMPONENTS/COBERTURA";
import Ubicacion from "./COMPONENTS/UBICACION";
import Testimonios from "./COMPONENTS/TESTIMONIOS";
import Cotizacion from "./COMPONENTS/COTIZACION";
import Footer from "./COMPONENTS/FOOTER";


function App() {
  return (
    <ThemeProvider theme={theme}>

      <GlobalStyles />
      <div className="App">
        <Header />
        <Main />
        <Services />
        <Cobertura />
        <Ubicacion />
        <Testimonios />
        <Cotizacion />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
