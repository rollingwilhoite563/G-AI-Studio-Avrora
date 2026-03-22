
import React, { useState, useEffect } from 'react';
import { Expert } from './types';
import { HeroScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen, ShieldCheck, Users, GraduationCap, MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in items-center p-12 bg-white/5 border border-ink-primary/10 rounded-2xl hover:border-accent-gold/40 transition-all duration-700 w-full max-w-xs hover:-translate-y-2" style={{ animationDelay: delay }}>
      <div className="w-24 h-24 bg-ink-primary/5 rounded-full mb-8 flex items-center justify-center border border-ink-primary/5 group-hover:scale-105 transition-transform duration-500">
         <Users className="text-accent-gold opacity-60" size={32} />
      </div>
      <h3 className="font-serif text-3xl text-ink-primary text-center mb-4">{name}</h3>
      <div className="w-8 h-px bg-accent-gold mb-6 opacity-40 group-hover:w-16 transition-all duration-500"></div>
      <p className="text-[10px] text-ink-primary/60 font-medium uppercase tracking-[0.3em] text-center leading-relaxed">{role}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-ink-primary selection:bg-accent-gold selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0">
          <HeroScene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/10 via-bg-primary/40 to-bg-primary" />
      </div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-md py-4 border-b border-ink-primary/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-ink-primary text-bg-primary rounded-full flex items-center justify-center font-serif font-bold text-2xl pb-1 group-hover:bg-accent-gold transition-colors">А</div>
            <span className="font-serif font-medium text-xl tracking-tight">
              УЦ АВРОРА <span className="font-light text-ink-primary/40 ml-2">ХАБАРОВСК</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-[0.2em] uppercase">
            <a href="#directions" onClick={scrollToSection('directions')} className="hover:text-accent-gold transition-colors cursor-pointer">Направления</a>
            <a href="#advantages" onClick={scrollToSection('advantages')} className="hover:text-accent-gold transition-colors cursor-pointer">Преимущества</a>
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-accent-gold transition-colors cursor-pointer">О центре</a>
            <a href="#contacts" onClick={scrollToSection('contacts')} className="hover:text-accent-gold transition-colors cursor-pointer">Контакты</a>
            <a 
              href="#lead-form" 
              onClick={scrollToSection('lead-form')}
              className="px-8 py-3 bg-ink-primary text-white rounded-full hover:bg-accent-gold transition-all duration-500 shadow-sm cursor-pointer"
            >
              Скидка 15%
            </a>
          </div>

          <button className="md:hidden text-ink-primary p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-12 text-2xl font-serif animate-fade-in">
            <a href="#directions" onClick={scrollToSection('directions')} className="hover:text-accent-gold transition-colors cursor-pointer">Направления</a>
            <a href="#advantages" onClick={scrollToSection('advantages')} className="hover:text-accent-gold transition-colors cursor-pointer">Преимущества</a>
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-accent-gold transition-colors cursor-pointer">О центре</a>
            <a href="#contacts" onClick={scrollToSection('contacts')} className="hover:text-accent-gold transition-colors cursor-pointer">Контакты</a>
            <a 
              href="#lead-form" 
              onClick={scrollToSection('lead-form')}
              className="px-12 py-4 bg-ink-primary text-white rounded-full shadow-xl cursor-pointer text-sm font-sans font-bold uppercase tracking-[0.2em]"
            >
              Скидка 15%
            </a>
            <button className="absolute top-8 right-8 text-ink-primary" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-8 text-center">
          <div className="inline-block mb-8 px-6 py-2 border border-ink-primary/10 text-accent-gold text-[10px] tracking-[0.4em] uppercase font-bold rounded-full bg-white/5 backdrop-blur-sm">
            Лицензированный учебный центр • ДПО
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[0.9] mb-12 text-ink-primary tracking-tighter">
            УЦ Аврора <br/><span className="italic font-light text-ink-primary/30 text-4xl md:text-6xl block mt-6">Профессиональное обучение</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-ink-primary/60 font-light leading-relaxed mb-16">
            Очное и дистанционное обучение сотрудников в Хабаровске. Охрана труда, первая помощь и рабочие профессии.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <a href="#lead-form" onClick={scrollToSection('lead-form')} className="px-12 py-6 bg-ink-primary text-white rounded-full hover:bg-accent-gold transition-all duration-500 font-semibold tracking-[0.2em] uppercase text-[11px] cursor-pointer shadow-xl">
                Оставить заявку
             </a>
             <a href="#directions" onClick={scrollToSection('directions')} className="px-12 py-6 border border-ink-primary/10 bg-white/5 backdrop-blur-sm text-ink-primary rounded-full hover:bg-ink-primary hover:text-white transition-all duration-500 font-semibold tracking-[0.2em] uppercase text-[11px] cursor-pointer">
                Направления
             </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Introduction */}
        <section id="about" className="py-40 border-y border-ink-primary/5">
          <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
            <div className="md:col-span-5">
              <div className="inline-block mb-6 text-[10px] font-bold tracking-[0.3em] text-accent-gold uppercase">О центре</div>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-ink-primary">Ваш партнер в безопасности</h2>
              <div className="w-20 h-px bg-accent-gold opacity-30"></div>
            </div>
            <div className="md:col-span-7 text-xl text-ink-primary/70 leading-relaxed space-y-8 font-light">
              <p>
                <span className="text-7xl float-left mr-6 mt-[-12px] font-serif text-accent-gold italic">У</span>чебный центр «Аврора» специализируется на дополнительном профессиональном образовании для руководителей и специалистов. Мы понимаем специфику B2B сегмента и предлагаем решения, которые минимизируют риски вашего бизнеса.
              </p>
              <p>
                Мы обеспечиваем <strong className="text-ink-primary font-medium">полную легальность</strong>: все выданные документы вносятся в реестр ФИС ФРДО и соответствуют требованиям Минтруда.
              </p>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section id="directions" className="py-40">
            <div className="container mx-auto px-8">
                <div className="text-center mb-32">
                    <div className="inline-flex items-center gap-3 px-6 py-2 border border-ink-primary/10 text-ink-primary/50 text-[10px] font-bold tracking-[0.4em] uppercase rounded-full mb-8">
                        <BookOpen size={14}/> КАТАЛОГ ОБУЧЕНИЯ
                    </div>
                    <h2 className="font-serif text-6xl md:text-8xl mb-8 text-ink-primary">Основные направления</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { title: "Охрана труда", desc: "Обучение по новым правилам 2464, техносферная безопасность.", icon: <ShieldCheck className="text-accent-gold" size={32} /> },
                        { title: "Первая помощь", desc: "Практические навыки оказания помощи пострадавшим на производстве.", icon: <CheckCircle2 className="text-accent-gold" size={32} /> },
                        { title: "СИЗ", desc: "Правила использования и нормы выдачи средств индивидуальной защиты.", icon: <Users className="text-accent-gold" size={32} /> },
                        { title: "Рабочие профессии", desc: "Профессиональное обучение и переподготовка по рабочим специальностям.", icon: <GraduationCap className="text-accent-gold" size={32} /> },
                    ].map((dir, i) => (
                        <div key={i} className="p-12 bg-white/5 border border-ink-primary/5 rounded-3xl hover:border-accent-gold/30 transition-all duration-700 group hover:-translate-y-4">
                            <div className="mb-10 p-6 bg-ink-primary/5 rounded-2xl inline-block group-hover:scale-105 transition-transform">
                                {dir.icon}
                            </div>
                            <h3 className="font-serif text-3xl mb-6 text-ink-primary">{dir.title}</h3>
                            <p className="text-ink-primary/50 text-sm leading-relaxed font-light">{dir.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Advantages */}
        <section id="advantages" className="py-40 relative overflow-hidden">
            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                     <div className="order-2 lg:order-1">
                        <div className="bg-ink-primary/5 p-12 rounded-[3rem] border border-ink-primary/10">
                            <PerformanceMetricDiagram />
                        </div>
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-3 px-6 py-2 border border-ink-primary/10 text-accent-gold text-[10px] font-bold tracking-[0.4em] uppercase rounded-full mb-10">
                            ПОЧЕМУ ВЫБИРАЮТ НАС
                        </div>
                        <h2 className="font-serif text-6xl md:text-8xl mb-12 text-ink-primary">Преимущества для бизнеса</h2>
                        <ul className="space-y-12">
                            {[
                                { title: "Очное обучение", desc: "Мы — единственный центр в регионе, предлагающий полноценные очные занятия с практической отработкой навыков." },
                                { title: "Экспертные консультации", desc: "Наши преподаватели — действующие эксперты, которые помогут решить сложные вопросы." },
                                { title: "Гарантия легальности", desc: "Лицензия, внесение в ФИС ФРДО, соответствие всем актуальным приказам Минтруда РФ." }
                            ].map((adv, i) => (
                                <li key={i} className="flex gap-8 group">
                                    <div className="flex-shrink-0 w-16 h-16 border border-ink-primary/10 rounded-2xl flex items-center justify-center text-accent-gold font-serif text-2xl group-hover:bg-accent-gold group-hover:text-bg-primary transition-all duration-500">{i + 1}</div>
                                    <div>
                                        <h4 className="text-3xl font-serif mb-3 text-ink-primary">{adv.title}</h4>
                                        <p className="text-ink-primary/50 leading-relaxed font-light">{adv.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                     </div>
                </div>
            </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-40 border-t border-ink-primary/5">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 px-6 py-2 border border-ink-primary/10 text-accent-gold text-[10px] font-bold tracking-[0.4em] uppercase rounded-full mb-10">
                            ЭТАПЫ ОБУЧЕНИЯ
                        </div>
                        <h2 className="font-serif text-6xl md:text-8xl mb-12 text-ink-primary">Как мы работаем</h2>
                        <p className="text-xl text-ink-primary/60 mb-16 leading-relaxed font-light">
                            Мы выстроили процесс обучения так, чтобы он был максимально удобным для компаний. От заявки до получения документов — мы сопровождаем вас на каждом этапе.
                        </p>
                        <div className="bg-white/5 border border-ink-primary/5 p-12 rounded-[3rem] opacity-80">
                            <SurfaceCodeDiagram />
                        </div>
                    </div>
                    <div>
                        <div className="bg-white/5 border border-ink-primary/5 p-12 rounded-[3rem] opacity-80">
                            <TransformerDecoderDiagram />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Lead Form Section */}
        <section id="lead-form" className="py-40 border-t border-ink-primary/5">
            <div className="container mx-auto px-8">
                <div className="max-w-6xl mx-auto bg-white/5 border border-ink-primary/5 rounded-[4rem] overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-20 bg-ink-primary text-bg-primary flex flex-col justify-center">
                        <h2 className="font-serif text-6xl mb-10 leading-tight">Получите <br/>предложение</h2>
                        <p className="text-bg-primary/50 mb-12 text-xl leading-relaxed font-light">
                            Оставьте заявку на бесплатную консультацию эксперта или получите <span className="text-accent-gold font-bold italic">скидку 15%</span> на первое обучение.
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl border border-bg-primary/10 flex items-center justify-center text-accent-gold">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="text-xs font-semibold tracking-widest uppercase">Конфиденциальность</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl border border-bg-primary/10 flex items-center justify-center text-accent-gold">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="text-xs font-semibold tracking-widest uppercase">Ответ за 30 минут</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-20">
                        {formSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                                <div className="w-24 h-24 bg-accent-gold/10 text-accent-gold rounded-full flex items-center justify-center mb-10">
                                    <ShieldCheck size={48} />
                                </div>
                                <h3 className="font-serif text-5xl mb-6">Заявка принята</h3>
                                <p className="text-ink-primary/60 text-lg font-light">Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-10">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-ink-primary/60 mb-4 ml-2">Ваше имя</label>
                                    <input required type="text" className="w-full px-10 py-6 bg-ink-primary/5 border border-ink-primary/5 rounded-2xl focus:outline-none focus:border-accent-gold/40 transition-all text-ink-primary placeholder:text-ink-primary/30" placeholder="Иван Иванов" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-ink-primary/60 mb-4 ml-2">Телефон</label>
                                    <input required type="tel" className="w-full px-10 py-6 bg-ink-primary/5 border border-ink-primary/5 rounded-2xl focus:outline-none focus:border-accent-gold/40 transition-all text-ink-primary placeholder:text-ink-primary/30" placeholder="+7 (___) ___-__-__" />
                                </div>
                                <button type="submit" className="w-full py-8 bg-ink-primary text-white rounded-2xl font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-accent-gold transition-all duration-500 shadow-2xl">
                                    Отправить запрос
                                </button>
                                <p className="text-[10px] text-ink-primary/40 text-center leading-relaxed px-8">
                                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Authors / Team */}
        <section id="authors" className="py-40 border-t border-ink-primary/5">
          <div className="container mx-auto px-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-ink-primary/10 text-accent-gold text-[10px] font-bold tracking-[0.4em] uppercase rounded-full mb-12">
                НАША КОМАНДА
            </div>
            <h2 className="font-serif text-6xl md:text-8xl mb-32 text-ink-primary">Ведущие эксперты</h2>
            <div className="flex flex-wrap justify-center gap-16">
              <AuthorCard name="Максим" role="Руководитель центра / Эксперт по ОТ" delay="0.1s" />
              <AuthorCard name="Елена" role="Ведущий методист" delay="0.2s" />
              <AuthorCard name="Александр" role="Инструктор по первой помощи" delay="0.3s" />
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section id="contacts" className="py-40">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div className="flex flex-col justify-center">
                        <div className="inline-flex items-center gap-3 px-6 py-2 border border-ink-primary/10 text-accent-gold text-[10px] font-bold tracking-[0.4em] uppercase rounded-full mb-12 w-fit">
                            КОНТАКТЫ
                        </div>
                        <h2 className="font-serif text-6xl md:text-8xl mb-16 text-ink-primary">Свяжитесь с нами</h2>
                        <div className="space-y-12">
                            {[
                                { icon: <MapPin size={28} />, title: "Адрес", value: "г. Хабаровск, ул. Ленина, 85" },
                                { icon: <Phone size={28} />, title: "Телефон", value: "+7 (4212) 00-00-00" },
                                { icon: <Mail size={28} />, title: "Email", value: "mail@avrora27.ru" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-20 h-20 bg-ink-primary/5 rounded-2xl flex items-center justify-center text-accent-gold border border-ink-primary/5 group-hover:bg-accent-gold group-hover:text-bg-primary transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-2xl text-ink-primary mb-2">{item.title}</h4>
                                        <p className="text-ink-primary/50 text-xl font-light">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="pt-12">
                                <a href="https://t.me/aurora_khv" target="_blank" rel="noopener noreferrer" className="px-16 h-20 bg-ink-primary text-white rounded-2xl flex items-center justify-center hover:bg-accent-gold transition-all font-bold uppercase tracking-[0.3em] text-[11px] gap-4 shadow-2xl">
                                    <Send size={20} />
                                    Telegram
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[700px] bg-ink-primary/5 rounded-[4rem] overflow-hidden border border-ink-primary/5 relative grayscale hover:grayscale-0 transition-all duration-1000">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167882.2604245749!2d134.94522965624998!3d48.480223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efaea03d1583007%3A0x705291776510650!2z0KXQsNCx0LDRgNC-0LLRgdC6LCDQpdCw0LDRgNC-0LLRgdC60LjQuSDQutGA0LDRmQ!5e0!3m2!1sru!2sru!4v1711000000000!5m2!1sru!2sru" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 bg-ink-primary text-bg-primary/60 border-t border-bg-primary/5">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-ink-primary font-serif font-bold text-xl pb-1">А</div>
            <span className="font-serif font-bold text-bg-primary tracking-widest text-lg">УЦ АВРОРА</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-center">
            © 2024 УЦ Аврора. Все права защищены.
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-accent-gold transition-colors">Политика</a>
            <a href="#" className="hover:text-bg-primary transition-colors">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
