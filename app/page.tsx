import Header from "./components/header";
import Main from "./components/main";
import Join from "./components/join";
import Info from "./components/info";
import Map from "./components/map";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Solutions from "./components/solutions";

export default function Home() {
  return (
    <div>
        <Header />
        <Main />
        <Landing/>
        <Solutions/>
        <Info />
      <Map />
      <Join />
      <Footer />
    </div>
  );
}
