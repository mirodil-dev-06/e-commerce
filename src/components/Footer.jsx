import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="hover:text-[#8A33FD] transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#3C4242] text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold text-white mb-4">ShopLine</h2>
          </Link>
          <p className="text-sm leading-6">
            Sizning sevimli onlayn do‘koningiz — sifatli mahsulotlar, qulay narxlar
            va tez yetkazib berish xizmati bilan.
          </p>
        </div>

        {footerLinks.map((section) => (
          <FooterSection key={section.title} title={section.title} links={section.links} />
        ))}

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Bizni kuzating</h3>
          <div className="flex gap-4 text-xl">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-[#8A33FD] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopLine. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}



const footerLinks = [
  {
    title: "Foydali havolalar",
    links: [
      { label: "Biz haqimizda", href: "#" },
      { label: "Do‘kon", href: "#" },
      { label: "Aloqa", href: "#" },
      { label: "Ko‘p so‘raladigan savollar", href: "#" },
    ],
  },
  {
    title: "Yordam",
    links: [
      { label: "Yetkazib berish", href: "#" },
      { label: "Qaytarish siyosati", href: "#" },
      { label: "Maxfiylik siyosati", href: "#" },
      { label: "Foydalanish shartlari", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", icon: <FaFacebookF />, href: "https://facebook.com" },
  { label: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
  { label: "Telegram", icon: <FaTelegramPlane />, href: "https://t.me" },
  { label: "YouTube", icon: <FaYoutube />, href: "https://youtube.com" },
];
