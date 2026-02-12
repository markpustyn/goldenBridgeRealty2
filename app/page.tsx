import Header from "./components/header";
import Main from "./components/main";
import Join from "./components/join";
import Info from "./components/info";
import About from "./components/About";
import Map from "./components/map";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Solutions from "./components/solutions";

export default function Home() {
  return (
    <div>
            <Header />
      <Main />
      {/* <Quote/> */}
      <Landing/>
      <Info />
{/* 
      <About /> */}
      <Solutions/>
      <Map />

      {/* <Contact /> */}
      <Join />
      <Footer />
    </div>
  );
}
