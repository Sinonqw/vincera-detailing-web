import { INavLink } from "@/types/navigation";
import CTAButton from "@/components/ui/CTAButton";

interface IProps {
  navLinks: INavLink[];
  isScrolled: boolean;
}

const DesktopNav = ({ navLinks, isScrolled }: IProps) => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
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
