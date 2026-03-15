import { Phone, Send } from "lucide-react";

export const ContactMethodTabs = ({ active, onChange }: any) => (
  <div className="flex bg-background p-1 rounded-xl mb-4 border border-border">
    {[
      { id: "phone", icon: Phone, label: "Телефон" },
      { id: "tg", icon: Send, label: "Telegram" },
    ].map((m) => (
      <button
        key={m.id}
        type="button"
        onClick={() => onChange(m.id)}
        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${
          active === m.id ? "bg-primary text-black" : "text-muted"
        }`}
      >
        <m.icon size={16} />
        <span className="text-xs font-bold uppercase">{m.label}</span>
      </button>
    ))}
  </div>
);