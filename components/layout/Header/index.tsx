"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { INavLink } from "@/types/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault(); // Зупиняємо зміну URL

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // Невеликий відступ зверху, щоб хедер не перекривав заголовок секції
      const offset = 50;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Плавна анімація
      });
    }

    // Якщо це мобільне меню — закриваємо його після кліку
    if (isOpen) setIsOpen(false);
  };

  // Стежимо за скролом
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокування скролу при відкритому мобільному меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks: INavLink[] = [
    { name: "Послуги", href: "#services" },
    { name: "До/Після", href: "#portfolio" },
    { name: "Калькулятор", href: "#calculator" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-2"
          : "bg-transparent py-3" // Початковий стан
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Логотип */}
        <Logo isScrolled={isScrolled} />

        {/* Десктопна навігація */}
        <DesktopNav isScrolled={isScrolled} navLinks={navLinks} onNavigate={scrollToSection}/>

        {/* Мобільні дії */}
        <MobileNav isOpen={isOpen} navLinks={navLinks} setIsOpen={setIsOpen} onNavigate={scrollToSection} />
      </div>
    </header>
  );
};

export default Header;
