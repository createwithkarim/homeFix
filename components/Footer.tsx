import { Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Company Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 uppercase">
              Home <span className="text-primary">Fix</span>
            </h3>
            <p className="mb-4 max-w-xs text-muted">
              We provide expert home improvement and repair services, including
              renovation, electrical work, AC installation, and kitchen cabinet
              design. Quality, reliability, and customer satisfaction are our
              priorities.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/fixmyhome.my"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Quick Links */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/home-renovation"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Renovation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/electronics-service"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/kitchen-cabinet-design"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Kitchen Cabinet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ac-service"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Aircond Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/waterproofing"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Waterproofing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/plumbing"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    Plumbing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Home Fix. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
