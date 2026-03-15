interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div>
    <h4 className="font-display text-white uppercase mb-8 tracking-widest text-sm">
      {title}
    </h4>
    {children}
  </div>
);

export default FooterColumn;