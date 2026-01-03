import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Browse All Services", href: "/services" },
    { name: "Post a Service", href: "/post-service" },
    { name: "Categories", href: "/categories" },
    { name: "Popular Services", href: "/popular" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com/yourcompany" },
    { icon: FaTwitter, href: "https://twitter.com/yourcompany" },
    { icon: FaInstagram, href: "https://instagram.com/yourcompany" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/company/yourcompany" },
  ];

  return (
    <footer className="bg-primary text-gray-300 py-2">
      <div className=" mx-auto px-4">
        {/* Top Section: Logo & Tagline */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-2 mb-2">
          <div className="text-center md:text-left mb-6 md:mb-0">
            {/* Replace with your actual logo image or text */}
            <a
              href="/"
              className="text-3xl font-bold text-white tracking-wider"
            >
              ServiceConnect
            </a>
            <p className="text-gray-400 text-md mt-2 max-w-sm">
              Connecting you with top-notch services, effortlessly.
            </p>
          </div>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-2 text-center md:text-left">
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Optional) - Can be an extra column or integrated */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@yourcompany.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@yourcompany.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400">
                123 Service Ln, <br /> Cityville, ST 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-2 mt-2 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm text-gray-400 mb-2 md:mb-0">
            &copy; {currentYear} ServiceConnect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((LinkIcon, index) => (
              <a
                key={index}
                href={LinkIcon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={LinkIcon.icon.name.replace("Fa", "")} // Accessibility for screen readers
              >
                <LinkIcon.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
