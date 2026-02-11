import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";

function ContactSection() {
  return (
    <div id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-gray-50 to-orange-50 border border-orange-100 p-8 md:p-12 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Text */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Let's <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Connect</span> and Create.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm transition-all group-hover:scale-110">
                    <MdAlternateEmail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
                    <p className="text-lg font-bold text-gray-900">{personalData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm transition-all group-hover:scale-110">
                    <BiLogoLinkedin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">LinkedIn</p>
                    <p className="text-lg font-bold text-gray-900">Connect with me</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;