import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/77ed5ead-d5f0-47ca-832a-0e2e1bfbe5b5/files/3f52b296-a5a7-48d9-9a69-f4a4b34f2f6a.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/77ed5ead-d5f0-47ca-832a-0e2e1bfbe5b5/files/35b734c6-bf9d-4147-a539-db6a1654b616.jpg";
const AERIAL_IMG = "https://cdn.poehali.dev/projects/77ed5ead-d5f0-47ca-832a-0e2e1bfbe5b5/files/5529b4d0-bddf-477a-841a-d63255838237.jpg";

const projects = [
  { id: 1, title: "Резиденция «Альпийский склон»", category: "Индивидуальный проект", area: "480 м²", year: "2024", image: HERO_IMG, videoId: "dQw4w9WgXcQ" },
  { id: 2, title: "Вилла «Лесной массив»", category: "Типовой проект", area: "320 м²", year: "2024", image: AERIAL_IMG, videoId: "dQw4w9WgXcQ" },
  { id: 3, title: "Особняк «Панорама»", category: "Индивидуальный проект", area: "620 м²", year: "2023", image: INTERIOR_IMG, videoId: "dQw4w9WgXcQ" },
  { id: 4, title: "Усадьба «Берег»", category: "Типовой проект", area: "280 м²", year: "2023", image: HERO_IMG, videoId: "dQw4w9WgXcQ" },
];

const processSteps = [
  { num: "01", title: "Концепция и проект", desc: "Создаём детальный архитектурный проект с учётом ваших пожеланий, рельефа участка и окружающей среды.", icon: "PenLine" },
  { num: "02", title: "Согласование", desc: "Полностью берём на себя все разрешительные процедуры и согласования с контролирующими органами.", icon: "FileCheck" },
  { num: "03", title: "Строительство", desc: "Собственная бригада профессионалов, строгий контроль качества на каждом этапе возведения.", icon: "Building2" },
  { num: "04", title: "Сдача объекта", desc: "Передаём дом с полной отделкой, ключами и гарантийным обслуживанием на 10 лет.", icon: "Key" },
];

const typicalProjects = [
  { name: "Классика 180", area: "180 м²", rooms: "4 комнаты", price: "от 8,2 млн ₽", tag: "Популярный" },
  { name: "Модерн 240", area: "240 м²", rooms: "5 комнат", price: "от 12,5 млн ₽", tag: "Хит продаж" },
  { name: "Панорама 320", area: "320 м²", rooms: "6 комнат", price: "от 18,9 млн ₽", tag: "Премиум" },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("главная");
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".scroll-fade").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const navItems = ["Главная", "Проекты", "Типовые проекты", "О компании", "Процесс", "Контакты"];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--obsidian)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(13,13,11,0.95), transparent)" }}>
        <div className="flex items-center">
          <img
            src="https://cdn.poehali.dev/projects/77ed5ead-d5f0-47ca-832a-0e2e1bfbe5b5/bucket/a6c2b279-1968-43e3-979a-943b73c99064.jpg"
            alt="DOMIO"
            style={{ height: "48px", width: "auto", filter: "invert(1) brightness(2)" }}
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} className="nav-link"
              style={{ color: activeNav === item.toLowerCase() ? "var(--gold)" : undefined }}
              onClick={() => setActiveNav(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </div>

        <button className="btn-gold hidden md:block" onClick={() => {}}>
          <span>Консультация</span>
        </button>

        <button className="md:hidden" style={{ color: "var(--cream)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: "var(--obsidian)" }}>
          {navItems.map((item) => (
            <button key={item} onClick={() => setMobileMenuOpen(false)}
              className="font-display text-3xl transition-colors hover:text-gold"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--cream)" }}>
              {item}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative flex items-end pb-20 overflow-hidden" style={{ height: "100vh" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="DOMIO Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,13,11,0.88) 0%, rgba(13,13,11,0.4) 60%, rgba(13,13,11,0.15) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,11,0.85) 0%, transparent 55%)" }} />
        </div>

        <div className="relative z-10 px-8 md:px-16 max-w-3xl" style={{ opacity: 0, animation: "fade-up 1s ease-out 0.5s forwards" }}>
          <div className="section-tag mb-6">Архитектурная компания · Москва</div>
          <h1 className="font-light leading-none mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", color: "var(--cream)" }}>
            Дома,<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>которые</em><br />
            помнят
          </h1>
          <p className="text-sm leading-relaxed max-w-md mb-10" style={{ fontFamily: "Montserrat, sans-serif", color: "var(--cream-muted)" }}>
            Создаём архитектурные шедевры, отражающие вашу индивидуальность. Каждый проект — это диалог между природой, пространством и человеком.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-gold-filled" onClick={() => {}}>
              Смотреть проекты
            </button>
            <div className="flex items-center gap-3">
              <button className="video-play-btn" onClick={() => setVideoModal("dQw4w9WgXcQ")}>
                <Icon name="Play" size={18} style={{ color: "white", marginLeft: "3px" }} />
              </button>
              <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>Видео-тур</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-16 hidden md:flex flex-col items-center gap-3"
          style={{ opacity: 0, animation: "fade-in 1s ease-out 1.5s forwards" }}>
          <div className="w-px h-20" style={{ background: "rgba(201,168,76,0.4)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-lr", fontFamily: "Montserrat", color: "var(--cream-muted)" }}>Scroll</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hidden md:grid grid-cols-3 border-t"
          style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(13,13,11,0.7)", backdropFilter: "blur(20px)" }}>
          {[
            { num: "200+", label: "Реализованных проектов" },
            { num: "18", label: "Лет на рынке" },
            { num: "10 лет", label: "Гарантия на строительство" },
          ].map((s, i) => (
            <div key={i} className="px-10 py-6 border-r last:border-r-0" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
              <div className="font-light text-3xl mb-1" style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--gold)" }}>{s.num}</div>
              <div className="text-xs" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-8 md:px-16">
        <div className="scroll-fade flex items-center justify-between mb-16">
          <div>
            <div className="section-tag mb-4">Наши работы</div>
            <h2 className="font-light" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}>
              <em style={{ color: "var(--gold)" }}>Проекты</em>
            </h2>
          </div>
          <button className="btn-gold hidden md:block" onClick={() => {}}>
            <span>Все проекты</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div key={project.id} className="project-card scroll-fade group" style={{ height: i === 0 ? "500px" : "360px" }}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-tag" style={{ opacity: 0.8 }}>{project.category}</span>
                  <span className="text-xs" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>· {project.area} · {project.year}</span>
                </div>
                <h3 className="font-light text-2xl md:text-3xl mb-4" style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--cream)" }}>{project.title}</h3>
                <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 text-xs tracking-widest uppercase"
                    style={{ fontFamily: "Montserrat", color: "var(--gold)" }}
                    onClick={() => setVideoModal(project.videoId)}>
                    <div className="w-8 h-8 border rounded-full flex items-center justify-center" style={{ borderColor: "var(--gold)" }}>
                      <Icon name="Play" size={12} style={{ color: "var(--gold)" }} />
                    </div>
                    Видео-тур
                  </button>
                  <button className="text-xs tracking-widest uppercase transition-colors hover:text-gold"
                    style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPICAL PROJECTS */}
      <section id="typical" className="py-24 px-8 md:px-16" style={{ background: "var(--stone)" }}>
        <div className="scroll-fade max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-tag mb-4">Готовые решения</div>
            <h2 className="font-light" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}>
              Типовые <em style={{ color: "var(--gold)" }}>проекты</em>
            </h2>
            <p className="text-sm mt-4 max-w-lg mx-auto" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
              Проверенные временем архитектурные решения по оптимальной цене
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typicalProjects.map((p, i) => (
              <div key={i} className="scroll-fade relative border p-8 group transition-colors duration-300"
                style={{ borderColor: "rgba(201,168,76,0.2)", background: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}>
                <div className="absolute top-4 right-4 px-3 py-1 text-xs tracking-widest uppercase"
                  style={{ background: "var(--gold)", color: "var(--obsidian)", fontFamily: "Montserrat", fontWeight: 600 }}>
                  {p.tag}
                </div>
                <div className="absolute top-[-10px] left-[-10px] font-light leading-none pointer-events-none"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "5rem", color: "rgba(201,168,76,0.12)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <h3 className="font-light text-3xl mb-2" style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--cream)" }}>{p.name}</h3>
                  <div className="mb-6 h-px w-10 transition-all duration-300 group-hover:w-20" style={{ background: "var(--gold)" }} />
                  <div className="space-y-3 mb-8">
                    {[
                      { icon: "Maximize2", text: p.area },
                      { icon: "DoorOpen", text: p.rooms },
                      { icon: "CircleDollarSign", text: p.price, highlight: true },
                    ].map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <Icon name={item.icon} fallback="Star" size={14} style={{ color: "var(--gold)" }} />
                        <span className="text-sm" style={{ fontFamily: "Montserrat", color: item.highlight ? "var(--cream)" : "var(--cream-muted)", fontWeight: item.highlight ? 500 : 400 }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold w-full text-center" onClick={() => {}}>
                    <span>Выбрать проект</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <div className="section-tag mb-4">Как мы работаем</div>
              <h2 className="font-light" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}>
                Процесс<br /><em style={{ color: "var(--gold)" }}>строительства</em>
              </h2>
            </div>
            <p className="text-sm mt-6 md:mt-0 max-w-xs leading-relaxed" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
              Прозрачный путь от идеи до ключей — без скрытых платежей и задержек
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="scroll-fade relative border-r last:border-r-0 pr-8 pl-6 py-8 group"
                style={{ borderColor: "rgba(201,168,76,0.15)" }}>
                <div className="absolute top-[-10px] left-[-10px] font-light leading-none pointer-events-none"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "5rem", color: "rgba(201,168,76,0.12)" }}>
                  {step.num}
                </div>
                <div className="relative">
                  <div className="w-10 h-10 border mb-6 flex items-center justify-center transition-all duration-300"
                    style={{ borderColor: "rgba(201,168,76,0.4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                    <Icon name={step.icon} fallback="Star" size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-light text-xl mb-3" style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--cream)" }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-fade mt-20 relative overflow-hidden" style={{ height: "400px" }}>
            <img src={AERIAL_IMG} alt="Строительство" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-6"
              style={{ background: "rgba(13,13,11,0.6)" }}>
              <div className="section-tag">Посмотрите как мы строим</div>
              <h3 className="font-light text-4xl md:text-5xl text-center" style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--cream)" }}>
                Видео-тур по<br />процессу строительства
              </h3>
              <button className="video-play-btn" onClick={() => setVideoModal("dQw4w9WgXcQ")}>
                <Icon name="Play" size={24} style={{ color: "white", marginLeft: "3px" }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-8 md:px-16" style={{ background: "var(--stone)" }}>
        <div className="scroll-fade text-center mb-16">
          <div className="section-tag mb-4">Воплощённые мечты</div>
          <h2 className="font-light" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}>
            Галерея <em style={{ color: "var(--gold)" }}>завершённых</em> домов
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[HERO_IMG, INTERIOR_IMG, AERIAL_IMG, AERIAL_IMG, HERO_IMG, INTERIOR_IMG].map((img, i) => (
            <div key={i} className="project-card scroll-fade group" style={{ height: i === 0 || i === 5 ? "320px" : "220px" }}>
              <img src={img} alt={`Проект ${i + 1}`} className="w-full h-full object-cover" />
              <div className="overlay" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="video-play-btn" onClick={() => setVideoModal("dQw4w9WgXcQ")}>
                  <Icon name="Play" size={18} style={{ color: "white", marginLeft: "2px" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade">
            <div className="section-tag mb-6">О компании</div>
            <h2 className="font-light mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--cream)" }}>
              Мы строим<br /><em style={{ color: "var(--gold)" }}>будущее</em><br />сегодня
            </h2>
            <div className="h-px w-16 mb-8" style={{ background: "var(--gold)" }} />
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
              DOMIO — архитектурная компания с 18-летним опытом создания уникальных жилых пространств. Мы объединяем классические традиции строительства с современными технологиями.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
              Каждый дом — это история. История семьи, которая будет жить в нём, история архитекторов, вложивших душу в проект.
            </p>
            <button className="btn-gold" onClick={() => {}}>
              <span>Познакомиться ближе</span>
            </button>
          </div>
          <div className="scroll-fade relative">
            <img src={INTERIOR_IMG} alt="О компании" className="w-full object-cover" style={{ height: "500px" }} />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 flex flex-col items-center justify-center text-center"
              style={{ borderColor: "var(--gold)", background: "var(--obsidian)" }}>
              <div className="font-light text-4xl" style={{ fontFamily: "Cormorant Garamond, serif", color: "var(--gold)" }}>200+</div>
              <div className="text-xs tracking-widest mt-2 uppercase" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>Реализованных<br />проектов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-8 md:px-16" style={{ background: "var(--stone)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="scroll-fade text-center mb-16">
            <div className="section-tag mb-4">Начните сейчас</div>
            <h2 className="font-light" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)" }}>
              Обсудим ваш<br /><em style={{ color: "var(--gold)" }}>проект</em>
            </h2>
          </div>

          <div className="scroll-fade grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "Email", value: "info@domio.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, Кутузовский пр-т, 50" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–19:00" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 border flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ borderColor: "rgba(201,168,76,0.3)" }}>
                    <Icon name={item.icon} fallback="Star" size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>{item.label}</div>
                    <div style={{ fontFamily: "Montserrat", color: "var(--cream)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="Ваше имя"
                className="w-full bg-transparent border-b py-4 text-sm outline-none transition-colors"
                style={{ borderColor: "rgba(201,168,76,0.2)", fontFamily: "Montserrat", color: "var(--cream)" }} />
              <input type="tel" placeholder="Телефон"
                className="w-full bg-transparent border-b py-4 text-sm outline-none transition-colors"
                style={{ borderColor: "rgba(201,168,76,0.2)", fontFamily: "Montserrat", color: "var(--cream)" }} />
              <textarea placeholder="Расскажите о вашем проекте..." rows={4}
                className="w-full bg-transparent border-b py-4 text-sm outline-none transition-colors resize-none"
                style={{ borderColor: "rgba(201,168,76,0.2)", fontFamily: "Montserrat", color: "var(--cream)" }} />
              <button className="btn-gold-filled w-full mt-6" onClick={() => {}}>
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 md:px-16 border-t" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/77ed5ead-d5f0-47ca-832a-0e2e1bfbe5b5/bucket/a6c2b279-1968-43e3-979a-943b73c99064.jpg"
              alt="DOMIO"
              style={{ height: "36px", width: "auto", filter: "invert(1) brightness(2)" }}
            />
          </div>
          <div className="text-xs tracking-widest" style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
            © 2024 DOMIO. Все права защищены
          </div>
          <div className="flex items-center gap-6">
            {["Политика конфиденциальности", "Договор оферты"].map((link) => (
              <button key={link} className="text-xs tracking-wide transition-colors hover:text-gold"
                style={{ fontFamily: "Montserrat", color: "var(--cream-muted)" }}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {videoModal && (
        <div className="modal-backdrop" onClick={() => setVideoModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="absolute flex items-center gap-2 transition-colors hover:text-gold"
              style={{ top: "-40px", right: 0, fontFamily: "Montserrat", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--cream)" }}
              onClick={() => setVideoModal(null)}>
              Закрыть <Icon name="X" size={16} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoModal}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}