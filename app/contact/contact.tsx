import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 h-screen w-full overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-16">
        {/* Left Side Text */}
        <div className="md:w-1/2 flex items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">
            We are excited to show you how Proval Capitals advanced solutions for property inspection solutions can boost your efficiency, 
            improve turnaround times, and help you manage orders with confidence. 
            To schedule a personalized demo, fill out the form and a team member will reach out shortly.
            </p>
          </div>
        </div>

        {/* Right Side Contact Form */}
        <div className="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
