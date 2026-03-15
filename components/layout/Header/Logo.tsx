import Link from "next/link";
import Image from "next/image";

const Logo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <>
      <Link href="/" className="relative z-50">
        <Image
          alt="Vincera Logo"
          src="/images/logo1.png"
          width={isScrolled ? 200 : 250}
          height={40}
          className="object-contain transition-all duration-500"
          priority
        />
      </Link>
    </>
  );
};

export default Logo;
