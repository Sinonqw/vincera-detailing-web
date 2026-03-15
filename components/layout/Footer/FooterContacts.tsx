import { MapPin, Phone, Mail } from 'lucide-react';

const FooterContacts = () => (
  <ul className="space-y-4 text-sm">
    <li className="flex items-start gap-3 text-muted">
      <MapPin size={18} className="text-primary shrink-0" />
      <span>м. Варшава, вул. Автомобільна, 10</span>
    </li>
    <li className="flex items-center gap-3 text-muted">
      <Phone size={18} className="text-primary shrink-0" />
      <a href="tel:+48123456789" className="hover:text-white transition-colors">+48 123 456 789</a>
    </li>
    <li className="flex items-center gap-3 text-muted">
      <Mail size={18} className="text-primary shrink-0" />
      <a href="mailto:info@vincera.systems" className="hover:text-white transition-colors">info@vincera.systems</a>
    </li>
  </ul>
);

export default FooterContacts;