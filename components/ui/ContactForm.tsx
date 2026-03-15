"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { ContactMethodTabs } from "./ContactMethodTabs";

interface ContactFormProps {
  externalData?: any; // Для калькулятора
  onSuccess: (data: any) => void;
  buttonText?: string;
  onUpdate?: (data: any) => void;
}

export const ContactForm = ({
  externalData,
  onSuccess,
  buttonText = "Записатися",
  onUpdate,
}: ContactFormProps) => {
  const [method, setMethod] = useState<"phone" | "tg">("phone");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Локальний стейт, якщо зовнішніх даних немає
  const [localData, setLocalData] = useState({ name: "", phone: "", tg: "" });

  const currentData = externalData || localData;

  const updateData = (fields: any) => {
    if (externalData && onUpdate) {
      onUpdate({ ...externalData, ...fields }); // Просто оновлюємо стейт у калькуляторі
    } else {
      setLocalData((prev) => ({ ...prev, ...fields }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Якщо це калькулятор, тут можна додати логіку "Деталей" безпосередньо перед відправкою
    const payload = {
      ...currentData,
      preferredMethod: method === "phone" ? "Телефон" : "Telegram",
      source: externalData ? "Калькулятор" : "Форма зворотного зв'язку",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        onSuccess(payload); 
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <ContactMethodTabs active={method} onChange={setMethod} />

      <input
        required
        placeholder="Ваше ім'я"
        value={currentData.name}
        onChange={(e) => updateData({ name: e.target.value })}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none text-white"
      />

      <AnimatePresence mode="wait">
        {method === "phone" ? (
          <motion.input
            key="phone"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            required
            type="tel"
            placeholder="+380 (__) ___-__-__"
            value={currentData.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none text-white"
          />
        ) : (
          <motion.input
            key="tg"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            required
            placeholder="@username_telegram"
            value={currentData.tg}
            onChange={(e) => updateData({ tg: e.target.value })}
            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none text-white"
          />
        )}
      </AnimatePresence>

      <Button className="w-full py-4 text-lg" disabled={status !== "idle"}>
        {status === "loading"
          ? "Надсилаємо..."
          : status === "success"
            ? "Прийнято! ✅"
            : status === "error"
              ? "Помилка ❌"
              : buttonText}
      </Button>
    </form>
  );
};