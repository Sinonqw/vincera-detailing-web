"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { INavLink } from "@/types/navigation";
import CTAButton from "@/components/ui/CTAButton";

interface IProps {
  setIsOpen: (open: boolean) => void;
  isOpen: boolean;
  navLinks: INavLink[];
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileNav = ({ setIsOpen, isOpen, navLinks, onNavigate }: IProps) => {
  return (
    <div className="md:hidden">
      {/* Кнопки керування в шапці */}
      <div className="flex items-center gap-4 relative z-[110]">
        <a href="tel:+48123456789" className="text-primary p-2">
          <Phone size={24} />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground p-2"
          aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Оверлей мобільного меню */}
      <div
        className={`
          fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-background z-[100]
          flex flex-col items-center justify-center gap-8 
          transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display uppercase tracking-[0.2em] hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <CTAButton
            className="mt-4 px-10 py-6 text-lg"
            text="Записатися зараз"
          />
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;