import Link from "next/link";
import { Facebook, Github, Mail, MapPin, Phone, Twitter, ComputerIcon as Windows } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-slate-800 text-slate-50 flex items-center justify-center"> 
      <div className="container flex flex-col gap-8 md:flex-row md:justify-center md:gap-[6vw] py-16">
        <div className="w-full md:w-auto">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="text-orange-500">
              <img
                src="/images/skillsmedialogo.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-40 h-10 md:w-52 md:h-12"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm text-[#F5EFE7] md:text-lg">
            Empowering learners through accessible and engaging online <br className="hidden md:block" /> education.
          </p>
          <p className="mt-4 text-sm text-[#F5EFE7] md:text-lg">
            Byway is a leading online learning platform dedicated to <br className="hidden md:block" /> providing high-quality, flexible, and affordable educational <br className="hidden md:block" /> experiences.
          </p>
        </div>
        <div className="w-full md:w-auto text-sm md:text-lg">
          <h3 className="mb-4 text-base font-semibold md:text-xl">Get Help</h3>
          <ul className="space-y-2 text-[#F5EFE7]">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/articles">Latest Articles</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto text-sm md:text-lg">
          <h3 className="mb-4 text-base font-semibold md:text-xl">Programs</h3>
          <ul className="space-y-2 text-[#F5EFE7]">
            <li>
              <Link href="/programs/art-design">Art & Design</Link>
            </li>
            <li>
              <Link href="/programs/business">Business</Link>
            </li>
            <li>
              <Link href="/programs/it-software">IT & Software</Link>
            </li>
            <li>
              <Link href="/programs/languages">Languages</Link>
            </li>
            <li>
              <Link href="/programs/programming">Programming</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto text-sm md:text-lg">
          <h3 className="mb-4 text-base font-semibold md:text-xl">Contact Us</h3>
          <ul className="space-y-4 text-[#F5EFE7]">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 md:h-5 md:w-5" />
              <span>Address: 123 Main Street, Anytown, CA 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              <span>Tel: +(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <span>Mail: client@skillsmedia.in</span>
            </li>
          </ul>
          <div className="mt-6 flex justify-center gap-4 md:gap-8">
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <img
                src="/images/facebook.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <img
                src="/images/github.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <img
                src="/images/google.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <img
                src="/images/twitter.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <img
                src="/images/microsoft.png" // Replace with the actual image URL
                alt="Instructor"
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
