// app/contact/page.tsx  (parent)
import Footer from "../components/footer";
import OtherNavbar from "../components/otherHeader";
import Contact from "./contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <OtherNavbar />
      <main className="flex-1 pt-20 sm:pt-24"> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
