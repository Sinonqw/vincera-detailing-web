import Link from 'next/link';

const FooterBottom = ({ year }: { year: number }) => (
  <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
      © {year} VINCERA SYSTEMS. УСІ ПРАВА ЗАХИЩЕНІ.
    </p>
    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-muted">
      <Link href="#" className="hover:text-white">Політика конфіденційності</Link>
      <Link href="#" className="hover:text-white">Публічна оферта</Link>
    </div>
  </div>
);

export default FooterBottom;