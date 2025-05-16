
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import OtherNavbar from "../components/otherHeader";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
            <OtherNavbar />
      <Contact/>
      <Footer />
    </div>
  );
}
