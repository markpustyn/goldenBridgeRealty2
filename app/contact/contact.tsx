import ContactForm from "../components/contactForm";

function Contact() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-2">
          {/* Copy */}
          <div className="flex items-center py-20">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are excited to show you how Blue Grid advanced solutions for property inspections can boost your efficiency,
                improve turnaround times, and help you manage orders with confidence. To schedule a personalized demo, fill out
                the form and a team member will reach out shortly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full">
            <div className="rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
