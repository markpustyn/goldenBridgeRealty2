import Header from "./components/header";
import Main from "./components/main";
import Join from "./components/join";
import Info from "./components/info";
import Map from "./components/pricing";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Solutions from "./components/serviceArea";
import Pricing from "./components/pricing";

export default function Home() {
  return (
    <div>
        <Header />
        <Main />
        <Landing/>
        <Pricing />
        <Solutions/>
        <Info />
      <Join />
      <Footer />
    </div>
  );
}
