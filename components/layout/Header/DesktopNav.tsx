import { INavLink } from "@/types/navigation";
import CTAButton from "@/components/ui/CTAButton";

interface IProps {
  navLinks: INavLink[];
  isScrolled: boolean;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DesktopNav = ({ navLinks, isScrolled, onNavigate }: IProps) => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.name}
            onClick={(e) => onNavigate(e, link.href)}
            className="..."
          >
            {link.name}
          </a>
        ))}
        <CTAButton
          variant={isScrolled ? "primary" : "outline"}
          className="py-2 px-6 transition-all duration-500"
        />
      </nav>
    </>
  );
};

export default DesktopNav;
