import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        
        <div className="flex flex-col items-center">
          
          {/* Copy */}
          <div className="max-w-3xl py-12">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We are excited to show you how Blue Grid advanced solutions for property inspections can boost your efficiency,
              improve turnaround times, and help you manage orders with confidence. To schedule a personalized demo, fill out
              the form and a team member will reach out shortly.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-2xl">
            <div className="p-4 sm:p-6">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
