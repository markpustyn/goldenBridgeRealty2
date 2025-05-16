import Header from "./components/header";
import Main from "./components/main";
import Quote from "./components/quote";
import Join from "./components/join";
import Info from "./components/info";
import About from "./components/About";
import Map from "./components/map";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
            <Header />
      <Main />
      <Quote/>
      <Info />
      <Join />
      <About />
      <Map />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
