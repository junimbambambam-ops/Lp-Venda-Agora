import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { 
  MessageCircle, 
  Instagram, 
  Globe, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Zap, 
  Clock,
  BookOpen, 
  X,
  ArrowRight,
  ArrowUpRight,
  Gift,
  ShieldCheck,
  PlayCircle,
  Award,
  Target,
  Map
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappLink = "https://wa.me/5531992561343";
  const instagramLink = "https://www.instagram.com/juniorconsultoriaepublicidade/";
  const siteLink = "https://juniorconsultoria.com.br/";

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-end items-center">
          {/* Header content removed as requested, keeping header for glass effect if scrolled */}
        </div>
      </header>

      {/* Hero Section (Home) */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col justify-end">
        {/* Background Image - Filling the entire section without gaps */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://japevuckvzjehuajbudw.supabase.co/storage/v1/object/public/meu%20Site/JUNIOR%20CONSULTORIA.png" 
            alt="Junior Consultoria Home" 
            className="w-full h-full object-cover object-[75%_top] md:object-right"
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />
        </div>

        <div className="w-full px-4 md:px-12 relative z-10 flex flex-col pb-8 md:pb-0 md:justify-center md:h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl md:w-fit text-left font-open-sans flex flex-col bg-gradient-to-b from-white/[0.02] to-black/[0.1] backdrop-blur-sm p-5 md:p-12 rounded-[24px] md:rounded-[32px] border border-white/5 shadow-2xl"
          >
            <div className="relative w-fit">
              <h2 className="text-3xl md:text-5xl lg:text-[65px] font-bold text-white lg:leading-[60px] lg:mt-[-9px] mb-[10px] drop-shadow-2xl tracking-tighter pt-[20px] pb-[13px] pr-[2px]">
                Você não tem <br />
                <span className="text-[#50a2ff]">problema</span> de vendas.<br />
                Você tem um <br />
                processo <span className="text-[#50a2ff]">quebrado</span>.
              </h2>
            </div>

            <p className="text-2xl md:text-4xl lg:text-[34px] text-white/90 font-bold drop-shadow-lg lg:leading-[42px] mb-[20px] pb-[27px]">
              E sem método, você vai continuar<br />
              dependendo de sorte.
            </p>
            
            <p className="text-lg md:text-2xl lg:text-[44px] text-white font-black drop-shadow-md lg:leading-[32.6px] mb-[20px] pb-[22px]">
              O método <span className="text-[#50a2ff]">JCP</span> muda isso.
            </p>
            
            {/* Main CTA Button - Blue with White Effect */}
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 20px rgba(80,162,255,0.2)",
                  "0 0 40px rgba(80,162,255,0.4)",
                  "0 0 20px rgba(80,162,255,0.2)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-flex relative overflow-hidden bg-[#50a2ff] text-[#040424] px-6 py-3 md:px-12 md:py-5 rounded-full text-xs md:text-xl font-black tracking-widest items-center justify-center gap-2 md:gap-4 border-2 border-white/20 w-fit group transition-colors duration-300"
            >
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8 text-[#040424] group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
              <span className="text-center text-[14px] md:text-[20px] leading-tight md:leading-[26px] font-bold tracking-tight uppercase group-hover:text-white transition-colors duration-300">Me mostre o método.</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Divider */}
      <div className="hidden md:block bg-[#040424] py-8 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">9+</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Módulos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">7</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Técnicas</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">4</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Canais</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">0</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Experiência</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Divider */}
      <div className="block md:hidden h-1.5 w-full bg-white relative z-20" />

      {/* Como Funciona Section */}
      <section id="como-funciona" className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background Image - Fully Visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://japevuckvzjehuajbudw.supabase.co/storage/v1/object/public/meu%20Site/medo01.png" 
            alt="Background" 
            className="w-full h-full object-cover object-[90%_center] md:object-center"
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/20" />
        </div>

        <div className="w-full px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl ml-auto text-center md:text-right font-open-sans flex flex-col items-center md:items-end"
          >
            <div className="relative mt-8 md:mt-12">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white lg:leading-[0.9] mb-4 drop-shadow-2xl tracking-tighter">
                Você<br />
                tenta, tenta<br />
                e <span className="text-[#50a2ff]">não vende</span>.
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-8 max-w-3xl items-center md:items-end">
              {[
                {
                  content: <>Manda mensagem no <strong className="text-white font-bold">WhatsApp</strong> e o cliente some sem responder</>,
                  hasX: true
                },
                {
                  content: <>Começa a apresentar o <strong className="text-white font-bold">produto</strong> e trava quando<br />o cliente diz "tá caro" ou "vou <strong className="text-white font-bold">pensar</strong>"</>,
                  hasX: true
                },
                {
                  content: <>Sente <strong className="text-white font-bold">vergonha</strong> de cobrar ou tem medo de parecer chato e insistente</>,
                  hasX: true
                },
                {
                  content: <>Não sabe como <strong className="text-white font-bold">abordar</strong> sem soar desesperado ou mecânico</>,
                  hasX: true
                },
                {
                  content: <>Vê outros <strong className="text-white font-bold">vendendo</strong> enquanto você fica<br />estagnado no mesmo lugar.</>,
                  hasX: true
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="text-white/80 text-lg md:text-[21px] font-medium drop-shadow-lg flex items-start justify-center md:justify-end gap-3"
                >
                  <span className="leading-tight">{item.content}</span>
                  {item.hasX && (
                    <span className="text-red-600 text-3xl font-black leading-none mt-1">✕</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 md:mt-12 text-center md:text-right"
            >
              <p className="text-xl md:text-2xl font-black text-white leading-tight mb-6">
                O <span className="text-red-600 font-black">problema</span> não é você.<br />
                É que ninguém te ensinou o <span className="text-red-600 font-black">método</span> certo.
              </p>

              <motion.a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ 
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 20px rgba(80,162,255,0.2)",
                    "0 0 40px rgba(80,162,255,0.4)",
                    "0 0 20px rgba(80,162,255,0.2)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex relative overflow-hidden bg-[#50a2ff] text-[#040424] px-6 py-3 md:px-12 md:py-6 rounded-full text-sm md:text-xl font-black tracking-widest items-center justify-center gap-2 md:gap-4 border-2 border-white/20 group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="font-bold tracking-tight uppercase group-hover:text-white transition-colors duration-300">Quero esse método</span>
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Divider 2 */}
      <div className="hidden md:block bg-[#040424]/40 py-8 border-y border-white/5 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">9+</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Módulos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">7</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Técnicas</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">4</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Canais</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl md:text-5xl font-black text-[#50a2ff] mb-1">0</p>
              <p className="text-white text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase">Experiência</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Spider Web Particles Wrapper - Starts after 2nd fold */}
      <div className="relative overflow-hidden">
        <ParticlesBackground id="spider-web-particles" />

      {/* Mobile Divider */}
      <div className="block md:hidden h-1.5 w-full bg-white relative z-20" />

      {/* Método Section (Replacing Resultados) */}
      <section id="metodo" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white lg:leading-tight tracking-tighter drop-shadow-2xl mx-auto">
              O método que<br />
              <span className="text-[#50a2ff] text-5xl md:text-7xl lg:text-8xl">destrava</span><br />
              qualquer vendedor.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                category: "BASE",
                title: "Mentalidade JCP",
                description: "Quebre os medos que travam 90% dos vendedores antes de abrir a boca. Venda começa na sua cabeça.",
                tags: ["Medo de rejeição", "Autoconfiança", "Checklist diário"]
              },
              {
                id: "02",
                category: "PROSPECÇÃO",
                title: "P.U.L.S.O.",
                description: "Pesquisa · Unicidade · Lista · Sequência · Oportunidade. Nunca mais fique sem saber onde encontrar quem compra.",
                tags: ["WhatsApp", "Instagram", "Ligação"]
              },
              {
                id: "03",
                category: "ABORDAGEM",
                title: "C.O.N.E.X.A.",
                description: "Contato · Observação · Nome · Escuta · eXpressão · Alinhamento. Crie conexão real nos primeiros 4 segundos.",
                tags: ["Rapport", "Escuta ativa", "Linguagem corporal"]
              },
              {
                id: "04",
                category: "PERGUNTAS",
                title: "Sistema J.U.N.I.O.R.",
                description: "Jornada · Urgência · Necessidade · Impacto · Oportunidade · Resultado. Faça o cliente querer comprar sem empurrar.",
                tags: ["Descoberta", "Dor real", "Valor percebido"]
              },
              {
                id: "05",
                category: "OBJEÇÕES",
                title: "Método V.E.N.C.E.R.",
                description: "Valide · Explore · Neutralize · Confirme · Evidencie · Retome. Transforme \"tá caro\" e \"vou pensar\" em SIM.",
                tags: ["Preço", "Prazo", "Concorrência"]
              },
              {
                id: "06",
                category: "FECHAMENTO + PÓS-VENDA",
                title: "6 Técnicas de Fechar",
                description: "As 6 técnicas mais eficazes + o pós-venda que transforma compradores em clientes fiéis e indicadores.",
                tags: ["Urgência", "Alternativa", "Fidelização"]
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveModule(activeModule === index ? null : index)}
                className={`rounded-[32px] p-6 md:p-8 relative group transition-all duration-500 border cursor-pointer flex flex-col h-full overflow-hidden ${
                  activeModule === index 
                    ? 'bg-white border-[#50a2ff] shadow-[0_20px_40px_rgba(80,162,255,0.2)]' 
                    : 'bg-[#040424] border-white/10 hover:bg-white hover:border-[#50a2ff] hover:shadow-[0_20px_40px_rgba(80,162,255,0.2)]'
                }`}
              >
                {/* Fluorescent Blue Bottom Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-[#50a2ff] transition-transform duration-500 origin-left shadow-[0_0_15px_#50a2ff] ${
                  activeModule === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />

                <div className="flex flex-col mb-6">
                  <span className={`text-xs font-black tracking-[0.2em] uppercase mb-2 transition-colors ${
                    activeModule === index ? 'text-blue-600' : 'text-[#50a2ff] group-hover:text-blue-600'
                  }`}>
                    {module.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className={`text-5xl font-black leading-none transition-all duration-500 ${
                      activeModule === index ? 'text-blue-600/20 scale-110' : 'text-white/10 group-hover:text-blue-600/20 group-hover:scale-110'
                    }`}>
                      {module.id}
                    </span>
                    <h3 className={`text-[20px] sm:text-[24px] md:text-[31px] font-bold leading-tight transition-all duration-500 ${
                      activeModule === index ? 'text-[#040424]' : 'text-white group-hover:text-[#040424]'
                    }`}>
                      {module.title.split(' ').map((word, i) => 
                        word === 'JCP' || word === 'P.U.L.S.O.' || word === 'C.O.N.E.X.A.' || word === 'J.U.N.I.O.R.' || word === 'V.E.N.C.E.R.' || word === 'Fechar' ? 
                        <span key={i} className={`transition-colors ml-1 ${
                          activeModule === index ? 'text-blue-600' : 'text-[#50a2ff] group-hover:text-blue-600'
                        }`}>{word}</span> : word + ' '
                      )}
                    </h3>
                  </div>
                </div>
                
                <p className={`text-sm leading-relaxed mb-8 transition-colors duration-500 ${
                  activeModule === index ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {module.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {module.tags.map((tag, tIndex) => (
                    <motion.span 
                      key={tIndex} 
                      whileHover={{ scale: 1.1, backgroundColor: "#50a2ff", color: "#ffffff" }}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-default border ${
                        activeModule === index 
                          ? 'bg-blue-50 text-blue-600 border-blue-100' 
                          : 'bg-white/5 text-gray-400 border-white/5 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100'
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quero esse método Button */}
          <div className="mt-16 text-center">
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 20px rgba(80,162,255,0.2)",
                  "0 0 40px rgba(80,162,255,0.4)",
                  "0 0 20px rgba(80,162,255,0.2)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex relative overflow-hidden bg-[#50a2ff] text-[#040424] px-8 py-4 md:px-12 md:py-5 rounded-full text-sm md:text-xl font-black tracking-widest items-center justify-center gap-2 md:gap-4 border-2 border-white/20 group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="font-bold tracking-tight group-hover:text-white transition-colors duration-300 uppercase">Quero esse método</span>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:text-white transition-all duration-300 group-hover:rotate-45" />
            </motion.a>
          </div>

          {/* Bônus Exclusivo Section */}
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white/[0.02] to-black/[0.1] backdrop-blur-sm rounded-[40px] p-8 md:p-12 relative overflow-hidden border border-white/5 group hover:border-[#50a2ff] hover:shadow-[0_0_80px_rgba(80,162,255,0.3)] transition-all duration-500 shadow-2xl"
            >
              {/* Fluorescent Blue Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#50a2ff] transition-transform duration-500 origin-left shadow-[0_0_20px_#50a2ff] scale-x-0 group-hover:scale-x-100" />
              {/* Background Text "BONUS" */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter">
                BONUS
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Gift Icon Container */}
                <motion.div 
                  whileHover={{ rotate: -5, scale: 1.05 }}
                  className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-600 to-blue-400 rounded-[32px] flex items-center justify-center shadow-2xl relative shrink-0"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-[32px] blur-xl group-hover:blur-2xl transition-all" />
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Gift className="w-16 h-16 md:w-20 md:h-20 text-white relative z-10 drop-shadow-lg" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 0 }}
                    className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform"
                  >
                    <Zap className="w-6 h-6 text-[#040424]" />
                  </motion.div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <span className="text-[#50a2ff] text-[17px] font-black tracking-[0.3em] uppercase mb-4 block">BÔNUS EXCLUSIVO</span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Método <span className="text-yellow-400">B.R.I.L.H.A.R.</span>
                  </h3>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                    <span className="text-white font-bold">Branding</span> · Rotina · Imagem · Linguagem · Histórias · Autenticidade · Resultado. Construa presença digital e faça clientes chegarem até você sem precisar correr atrás.
                  </p>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="mt-12 text-center relative z-10">
                <p className="text-[#50a2ff] text-lg md:text-xl font-black tracking-widest uppercase mb-2">
                  SUPER PROMOÇÃO
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                  <span className="text-gray-500 text-xl md:text-3xl line-through decoration-red-500/50 font-bold">De R$ 199,00</span>
                  <span className="text-white text-3xl md:text-5xl lg:text-6xl font-black">
                    Por apenas <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">R$ 19,99</span>
                  </span>
                </div>
              </div>

              {/* Bonus CTA Button */}
              <div className="mt-10 flex justify-center">
                <motion.a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 10px rgba(255,255,255,0.1)",
                      "0 0 30px rgba(255,255,255,0.3)",
                      "0 0 10px rgba(255,255,255,0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#040424] hover:bg-blue-50 px-6 py-3 md:px-12 md:py-5 rounded-2xl font-black text-sm md:text-xl border-2 border-[#50a2ff]/20 flex items-center gap-2 md:gap-4 transition-all group/btn"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#50a2ff] group-hover/btn:rotate-45 transition-transform" />
                  <span className="font-bold tracking-tight uppercase">GARANTIR MEU ACESSO VIA WHATSAPP</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="hidden md:block container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Mobile Divider */}
      <div className="block md:hidden h-1.5 w-full bg-white relative z-20" />

      {/* Para de Assistir Section (Replacing Diagnóstico) */}
      <section id="chamada-final" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#50a2ff] text-[12px] font-black tracking-[0.4em] uppercase mb-6 block animate-blink">SUA HORA É AGORA</span>
            <h2 className="text-4xl md:text-6xl lg:text-[86px] font-black mb-8 text-white leading-tight lg:leading-[71px] pb-0">
              Pare<br />
              de assistir<br />
              outros <span className="text-[#50a2ff] text-5xl md:text-7xl lg:text-[96px]">venderem.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Enquanto você hesita, <span className="text-white font-bold">vendedores com menos talento que você</span> estão fechando negócios porque aprenderam o método certo. O Método JCP é o atalho que você precisava.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-white/[0.02] to-black/[0.1] backdrop-blur-sm border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
                <div className="text-center group/icon">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors group-hover/icon:bg-yellow-400/20"
                  >
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <h4 className="text-white font-bold text-[21px] mb-3">Acesso Imediato</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed font-bold">Comece a aplicar hoje, no mesmo momento do acesso</p>
                </div>
                
                <div className="text-center group/icon">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors group-hover/icon:bg-blue-400/20"
                  >
                    <Map className="w-6 h-6 text-[#50a2ff]" />
                  </motion.div>
                  <h4 className="text-white font-bold text-[21px] mb-3">Passo a Passo</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed font-bold">9 módulos + bônus em sequência lógica, do zero ao avançado</p>
                </div>

                <div className="text-center group/icon">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-red-400/10 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors group-hover/icon:bg-red-400/20"
                  >
                    <Target className="w-6 h-6 text-red-400" />
                  </motion.div>
                  <h4 className="text-white font-bold text-[21px] mb-3">Bônus Exclusivos</h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed font-bold">Método B.R.I.L.H.A.R. + checklists prontos para usar</p>
                </div>
              </div>

              {/* Pricing Info */}
              <div className="mb-12 text-center">
                <p className="text-[#50a2ff] text-lg md:text-xl font-black tracking-widest uppercase mb-2">
                  SUPER PROMOÇÃO
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                  <span className="text-gray-500 text-xl md:text-3xl line-through decoration-red-500/50 font-bold">De R$ 199,00</span>
                  <span className="text-white text-3xl md:text-5xl lg:text-6xl font-black">
                    Por apenas <span className="text-[#50a2ff] drop-shadow-[0_0_15px_rgba(80,162,255,0.4)]">R$ 19,99</span>
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ 
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0 0 15px rgba(255,255,255,0.1)",
                      "0 0 40px rgba(255,255,255,0.4)",
                      "0 0 15px rgba(255,255,255,0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#040424] px-6 py-4 md:px-12 md:py-6 rounded-2xl font-black text-sm md:text-xl flex items-center gap-2 md:gap-4 shadow-2xl group transition-all animate-shine"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#50a2ff] group-hover:rotate-45 transition-transform" />
                  <span className="font-bold tracking-tight uppercase">QUERO O MÉTODO JCP AGORA</span>
                </motion.a>
              </div>
            </div>

            <div className="mt-8 bg-[#040424]/30 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <ShieldCheck className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-white font-bold">Suporte direto com o Júnior</p>
                <p className="text-gray-500 text-sm">Tira dúvidas e acompanhamento personalizado pelo WhatsApp · (31) 99256-1343</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#010409] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">J</div>
              <span className="font-bold">JUNIOR CONSULTORIA</span>
            </div>
            
            <div className="flex gap-4 md:gap-6">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#50a2ff]/10 flex items-center justify-center text-[#50a2ff] hover:text-white hover:bg-[#50a2ff] transition-all border border-[#50a2ff]/20 shadow-[0_0_15px_rgba(80,162,255,0.1)]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#50a2ff]/10 flex items-center justify-center text-[#50a2ff] hover:text-white hover:bg-[#50a2ff] transition-all border border-[#50a2ff]/20 shadow-[0_0_15px_rgba(80,162,255,0.1)] p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href={siteLink} target="_blank" rel="noopener noreferrer" className="text-[#50a2ff] w-12 h-12 rounded-full bg-[#50a2ff]/10 flex items-center justify-center hover:text-white hover:bg-[#50a2ff] transition-all border border-[#50a2ff]/20 shadow-[0_0_15px_rgba(80,162,255,0.1)]">
                <Globe className="w-6 h-6" />
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 Junior Consultoria e Publicidade. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 group">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#040424] px-4 py-2 rounded-xl font-bold text-sm shadow-xl pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          Online Agora
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
        </div>
        
        <motion.a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="flex bg-[#50a2ff] p-1 rounded-full shadow-2xl neon-blue border-2 border-white/20 items-center justify-center"
        >
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-[#50a2ff] shadow-inner p-3">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
