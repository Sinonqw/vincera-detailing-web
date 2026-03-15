import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: Props) => {
  const baseStyles =
    "rounded-full font-bold transition-all duration-300 uppercase text-sm tracking-widest flex items-center justify-center";

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:bg-primary-hover hover:scale-105",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const defaultPadding = "px-8 py-3";

  return (
    <button
      className={cn(baseStyles, variants[variant], defaultPadding, className)}
      {...props}
    >
      {children}
    </button>
  );
};
