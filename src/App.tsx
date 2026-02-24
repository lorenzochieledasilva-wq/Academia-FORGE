/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Dumbbell, 
  Trophy, 
  Target, 
  Users, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Star
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-sub', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: 'back.out(1.7)'
      });

      // Scroll Reveals
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      });

      // Bento Grid Stagger
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: bentoRef.current,
          start: 'top 75%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-red selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b-0 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center font-display font-bold text-xl italic">F</div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">Forge</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('differentials')} className="hover:text-white transition-colors">Diferenciais</button>
          <button onClick={() => scrollToSection('plans')} className="hover:text-white transition-colors">Planos</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Resultados</button>
        </nav>

        <button 
          onClick={() => scrollToSection('plans')}
          className="bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-tighter transition-all hover:scale-105 active:scale-95"
        >
          Começar Agora
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background"
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl" ref={heroRef}>
          <div className="inline-flex items-center gap-2 glass px-4 py-1 rounded-full mb-8 hero-sub">
            <Zap className="w-4 h-4 text-brand-red fill-brand-red" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">A Engenharia do Corpo Perfeito</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-7xl font-extrabold uppercase italic leading-[0.9] tracking-tighter mb-8 hero-title">
            Forge Your <br />
            <span className="text-brand-red">Greatness</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 hero-sub font-light leading-relaxed">
            Não somos apenas uma academia. Somos um clube de performance de elite onde a ciência encontra a disciplina bruta.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 hero-cta">
            <button 
              onClick={() => scrollToSection('plans')}
              className="pulse-cta bg-brand-red text-white px-8 py-4 rounded-full text-base font-black uppercase tracking-tighter flex items-center gap-3 group"
            >
              Iniciar Transformação
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="glass px-8 py-4 rounded-full text-base font-bold uppercase tracking-tighter hover:bg-white/10 transition-all"
            >
              Conheça o Clube
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Authority Marquee */}
      <section className="py-12 border-y border-white/5 overflow-hidden bg-white/[0.02]">
        <div className="marquee-content whitespace-nowrap flex items-center">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-4 text-2xl font-display font-black uppercase italic opacity-20">
                <Star className="w-6 h-6 fill-current" />
                <span>Performance de Elite</span>
              </div>
              <div className="flex items-center gap-4 text-2xl font-display font-black uppercase italic opacity-20">
                <Star className="w-6 h-6 fill-current" />
                <span>Metodologia F.O.R.G.E</span>
              </div>
              <div className="flex items-center gap-4 text-2xl font-display font-black uppercase italic opacity-20">
                <Star className="w-6 h-6 fill-current" />
                <span>Resultados Reais</span>
              </div>
              <div className="flex items-center gap-4 text-2xl font-display font-black uppercase italic opacity-20">
                <Star className="w-6 h-6 fill-current" />
                <span>Comunidade Exclusiva</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Differentials - Bento Grid */}
      <section id="differentials" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6">
            Por que escolher a <span className="text-brand-red">Forge?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Combinamos infraestrutura de ponta com acompanhamento estratégico para garantir que cada gota de suor conte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" ref={bentoRef}>
          {/* Large Item */}
          <div className="md:col-span-2 md:row-span-2 bento-item p-8 flex flex-col justify-end min-h-[400px] group">
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              alt="Equipment"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold uppercase italic mb-4">Equipamentos de Competição</h3>
              <p className="text-white/60 leading-relaxed">
                Trabalhamos apenas com as melhores marcas mundiais. Máquinas biomecanicamente perfeitas para maximizar seu recrutamento muscular.
              </p>
            </div>
          </div>

          {/* Medium Item */}
          <div className="md:col-span-2 bento-item p-8 flex items-center gap-8 group">
            <div className="relative z-10 flex-1">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold uppercase italic mb-2">Avaliação 3D</h3>
              <p className="text-sm text-white/50">
                Mapeamento corporal completo para acompanhar sua evolução milímetro a milímetro.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full border-4 border-brand-red/20 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-brand-red/5 animate-pulse"></div>
               <ArrowUpRight className="w-10 h-10 text-brand-red" />
            </div>
          </div>

          {/* Small Item */}
          <div className="bento-item p-8 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-xl font-display font-bold uppercase italic mb-2">Elite Coaching</h3>
            <p className="text-sm text-white/50">
              Treinadores certificados em metodologias de alta performance.
            </p>
          </div>

          {/* Small Item */}
          <div className="bento-item p-8 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5 text-brand-red" />
            </div>
            <h3 className="text-xl font-display font-bold uppercase italic mb-2">Ambiente Exclusivo</h3>
            <p className="text-sm text-white/50">
              Número limitado de alunos por horário para garantir seu foco total.
            </p>
          </div>
        </div>
      </section>

      {/* About / Services */}
      <section id="about" className="py-32 bg-white/[0.01]" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/20 blur-[100px] rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Gym Interior"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 glass p-6 rounded-2xl flex items-center gap-4">
                <div className="text-4xl font-display font-black text-brand-red italic">15+</div>
                <div className="text-xs uppercase tracking-widest font-bold leading-tight">Anos de <br />Experiência</div>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Nossa Filosofia</span>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase italic mb-8 leading-none">
              Onde o Ferro <br />Encontra a <span className="text-brand-red">Estratégia</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Na Forge, acreditamos que o treinamento é uma ciência. Cada plano é desenhado sob medida para o seu biotipo, objetivos e rotina. Não vendemos acesso a máquinas; vendemos a engenharia necessária para transformar seu corpo.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                'Metodologia F.O.R.G.E (Foco, Objetividade, Resultado, Gestão, Evolução)',
                'Consultoria Nutricional Integrada',
                'App Exclusivo para Gestão de Cargas e Progressão',
                'Ambiente Climatizado com Som de Alta Fidelidade'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-red group-hover:text-white" />
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => scrollToSection('plans')}
              className="flex items-center gap-4 text-brand-red font-black uppercase tracking-widest group"
            >
              Ver Planos Disponíveis
              <div className="w-12 h-12 rounded-full border border-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-32 px-6 md:px-12 max-w-7xl mx-auto" ref={plansRef}>
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic mb-6">
            Escolha seu <span className="text-brand-red">Nível</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Planos flexíveis desenhados para quem leva o treinamento a sério.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="glass p-10 rounded-[2.5rem] flex flex-col reveal group hover:border-brand-red/30 transition-all duration-500">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Iniciante</span>
              <h3 className="text-3xl font-display font-bold uppercase italic mt-2">Plano Start</h3>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-white/40">R$</span>
                <span className="text-6xl font-display font-black italic">129</span>
                <span className="text-sm font-bold text-white/40">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {['Acesso Horário Comercial', 'Avaliação Física Inicial', 'App de Treino Básico', 'Vestiários Premium'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl border border-white/10 font-bold uppercase tracking-widest hover:bg-white hover:text-dark-bg transition-all">
              Selecionar
            </button>
          </div>

          {/* Plan 2 - Featured */}
          <div className="bg-brand-red p-10 rounded-[2.5rem] flex flex-col reveal relative overflow-hidden group scale-105 z-10 shadow-2xl shadow-brand-red/20">
            <div className="absolute top-0 right-0 p-6">
              <Zap className="w-12 h-12 text-white/20 fill-white/10" />
            </div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Mais Popular</span>
              <h3 className="text-3xl font-display font-bold uppercase italic mt-2">Performance</h3>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-white/80">R$</span>
                <span className="text-6xl font-display font-black italic">179</span>
                <span className="text-sm font-bold text-white/80">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {[
                'Acesso Ilimitado 24/7',
                'Reavaliação Mensal',
                'App Exclusivo Forge Pro',
                'Acesso a Workshops de Treino',
                'Toalhas e Amenities Inclusos'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl bg-white text-brand-red font-black uppercase tracking-widest hover:bg-dark-bg hover:text-white transition-all">
              Assinar Agora
            </button>
          </div>

          {/* Plan 3 */}
          <div className="glass p-10 rounded-[2.5rem] flex flex-col reveal group hover:border-brand-red/30 transition-all duration-500">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">VIP</span>
              <h3 className="text-3xl font-display font-bold uppercase italic mt-2">Elite Club</h3>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-white/40">R$</span>
                <span className="text-6xl font-display font-black italic">349</span>
                <span className="text-sm font-bold text-white/40">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {[
                'Personal 2x por Semana',
                'Consultoria Nutricional',
                'Suplementação Personalizada',
                'Estacionamento VIP',
                'Recuperação Recovery Lab'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl border border-white/10 font-bold uppercase tracking-widest hover:bg-white hover:text-dark-bg transition-all">
              Selecionar
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
            <div className="max-w-xl">
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Prova Social</span>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic leading-none">
                Vozes da <span className="text-brand-red">Evolução</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-xs mt-6 md:mt-0">
              Pessoas reais, resultados extraordinários. Junte-se ao clube.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Silva",
                role: "Empresário",
                text: "A Forge mudou minha percepção sobre treino. O ambiente é focado e os equipamentos são de outro nível.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
              },
              {
                name: "Juliana Costa",
                role: "Atleta Amadora",
                text: "O acompanhamento estratégico foi o diferencial para eu atingir meu melhor condicionamento físico aos 40 anos.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
              },
              {
                name: "Marcos Oliveira",
                role: "Engenheiro",
                text: "O plano Elite com personal é sensacional. Otimizei meu tempo e os resultados vieram muito mais rápido.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
              }
            ].map((t, i) => (
              <div key={i} className="glass p-8 rounded-3xl reveal group">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-red/30" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold uppercase italic tracking-tighter">{t.name}</h4>
                    <p className="text-xs text-brand-red font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-white/60 italic leading-relaxed">"{t.text}"</p>
                <div className="flex gap-1 mt-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-brand-red fill-brand-red" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center font-display font-bold text-xl italic">F</div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">Forge</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              A academia definitiva para quem busca performance, estética e longevidade. São Paulo, SP.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-red transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8">Navegação</h5>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => scrollToSection('differentials')} className="hover:text-white transition-colors">Diferenciais</button></li>
              <li><button onClick={() => scrollToSection('plans')} className="hover:text-white transition-colors">Planos</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Resultados</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8">Contato</h5>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                WhatsApp: (11) 94785-2210
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                contato@forgeclub.com.br
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                Av. Paulista, 1000 - SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
          <p>© 2026 FORGE PERFORMANCE CLUB. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
