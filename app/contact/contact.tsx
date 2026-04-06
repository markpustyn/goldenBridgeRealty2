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
  Have a question or ready to get started? Whether you're buying, selling, or exploring your options, reach out and get clear answers and guidance you can trust.
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
