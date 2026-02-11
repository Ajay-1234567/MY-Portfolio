import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";

import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                <Image
                  src="/favicon.png"
                  alt="Ajay Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">AJAY.</h2>
            </div>
            <p className="text-gray-500 font-medium">© {new Date().getFullYear()} Designed & Built by Ajay Kumar</p>
          </div>

          <div className="flex items-center gap-6">
            <Link href={personalData.linkedIn} target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
              <BiLogoLinkedin size={28} />
            </Link>
          </div>

          <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            UI/UX PORTFOLIO
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;