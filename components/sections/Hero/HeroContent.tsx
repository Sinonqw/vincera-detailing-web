import { Button } from "@/components/ui/Button";

const HeroContent = () => {
  return (
    <div className="relative mt-15 z-10 container mx-auto px-4 text-center">
      <h1 className="font-display text-4xl md:text-7xl lg:text-8xl mb-6 tracking-tighter uppercase">
        Блиск та Захист <br />
        <span className="text-primary">Вашого Авто</span>
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans uppercase tracking-widest text-muted">
        Преміальний детейлінг та розумна автоматизація сервісу в одній екосистемі
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button className="w-full md:w-auto text-lg px-12 py-6">
          <a href="#calculator">Розрахувати вартість</a>
        </Button>
        <Button
          variant="outline"
          className="w-full md:w-auto text-lg px-12 py-6"
        >
          <a href="#services">Наші послуги</a>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;