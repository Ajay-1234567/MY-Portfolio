import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">AJAY.</h2>
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