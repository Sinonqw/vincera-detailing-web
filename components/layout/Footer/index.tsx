'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Send, Clock } from 'lucide-react'
import FooterColumn from './FooterColumn'
import FooterContacts from './FooterContacts'
import FooterBottom from './FooterBottom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Блок 1: Лого та Соцмережі */}
          <div className="space-y-6">
            <Link href="/"><Image src="/images/logo1.png" alt="Logo" width={180} height={40} className="brightness-0 invert" /></Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Преміальне обслуговування вашого автомобіля з використанням передових технологій.
            </p>
            <div className="flex gap-4">
              {[Instagram, Send].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className="p-3 rounded-full bg-card border border-border text-muted transition-colors">
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Блок 2: Навігація */}
          <FooterColumn title="Навігація">
            <ul className="space-y-4">
              {['Послуги', 'До/Після', 'Калькулятор', 'Контакти'].map((name) => (
                <li key={name}>
                  <Link href="#" className="text-muted hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Блок 3: Контакти */}
          <FooterColumn title="Контакти">
            <FooterContacts />
          </FooterColumn>

          {/* Блок 4: Режим роботи */}
          <FooterColumn title="Графік роботи">
            <div className="bg-card border border-border p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-sm text-white">
                <Clock size={18} className="text-primary" />
                <span>Пн - Сб: 09:00 — 21:00</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-50">
                <Clock size={18} />
                <span>Нд: Вихідний</span>
              </div>
            </div>
          </FooterColumn>
        </div>

        <FooterBottom year={currentYear} />
      </div>
    </footer>
  )
}

export default Footer