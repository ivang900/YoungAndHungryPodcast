import { useState, useEffect } from "react";
import {
  Lightbulb,
  BookOpen,
  Brain,
  MessageCircle,
  Link2,
  ChevronUp,
  Mic,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Instagram,
  ExternalLink,
  Mail,
  School,
  Award,
  Stethoscope,
  Monitor,
  BookMarked,
  Globe,
} from "lucide-react";
import drYoungImg from "../assets/8d131fff094edba435092fd4453afff9ba7e2a85.png";
import heroIllustration from "../assets/12ca529e17e6b90911e1a1e5fca15ca4f8f02062.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

/* Decorative floating icon helper */
const DECO_ICONS = [Lightbulb, GraduationCap, BookOpen, Monitor, Sparkles] as const;

interface DecoProps {
  icon: number; // index into DECO_ICONS
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
}

function Deco({ icon, top, bottom, left, right, size = 24, rotate = 0, opacity = 0.12 }: DecoProps) {
  const Icon = DECO_ICONS[icon % DECO_ICONS.length];
  return (
    <Icon
      size={size}
      className="absolute pointer-events-none hidden sm:block"
      style={{
        top,
        bottom,
        left,
        right,
        transform: `rotate(${rotate}deg)`,
        opacity,
        color: "#6B8FB5",
      }}
    />
  );
}

const NAV_ITEMS = [
  { label: "Home", icon: Mic, href: "#hero" },
  { label: "Dr. Young", icon: BookOpen, href: "#fun-facts" },
  { label: "AI in Education", icon: Brain, href: "#ai-facts" },
  { label: "AI Myths", icon: Lightbulb, href: "#ai-myths" },
  { label: "Feedback", icon: MessageCircle, href: "#feedback" },
  { label: "Links", icon: Link2, href: "#links" },
];

const AI_FACTS = [
  {
    icon: GraduationCap,
    title: "Personalized Learning",
    text: "AI helps teachers plan engaging, data-driven lessons. By analyzing past student performance, AI suggests what topics to focus on next!",
  },
  {
    icon: Sparkles,
    title: "Instant Feedback",
    text: "AI-powered tools can provide students with instant feedback on assignments, helping them learn from mistakes in real time instead of waiting days.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility for All",
    text: "AI tools like speech-to-text and language translation help students with disabilities and English learners participate fully in the classroom.",
  },
];

const AI_MYTHS = [
  {
    misconception: "AI will replace teachers entirely.",
    truth:
      "AI is a tool that supports teachers, not a replacement. It handles repetitive tasks so teachers can focus more on mentoring and building relationships with students.",
  },
  {
    misconception: "AI always knows the right answer.",
    truth:
      "AI models can make mistakes and sometimes produce incorrect information (called 'hallucinations'). Critical thinking is still essential when using AI tools!",
  },
  {
    misconception: "Only tech experts can use AI.",
    truth:
      "Modern AI tools are designed to be user-friendly! From voice assistants to educational apps, people of all ages and skill levels use AI every single day.",
  },
];

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0f4f8" }}>
      {/* ───── NAVBAR ───── */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md shadow-sm"
        style={{ backgroundColor: "rgba(240,244,248,0.92)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span
            className="font-bold text-lg hidden sm:block"
            style={{ color: "#1B3A5C" }}
          >
            Young & Hungry K-12
          </span>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors hover:text-white"
                style={{ color: "#1B3A5C" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6B8FB5")
                }
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#1B3A5C";
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "#fff")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "#1B3A5C")
                }
              >
                <item.icon size={14} />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ───── HERO ───── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ minHeight: "85vh" }}
      >
        {/* Decorative icons */}
        <Deco icon={0} top="12%" left="6%" size={32} rotate={-15} opacity={0.1} />
        <Deco icon={4} top="25%" right="8%" size={22} rotate={20} opacity={0.08} />
        <Deco icon={1} bottom="18%" left="10%" size={28} rotate={10} opacity={0.09} />
        <Deco icon={3} bottom="12%" right="5%" size={26} rotate={-25} opacity={0.07} />

        {/* Background image */}
        <div className="absolute inset-0" style={{ backgroundColor: "#e8eef4" }}>
          <img
            src={heroIllustration}
            alt="Illustration of a person at a desk with a laptop"
            className="w-full h-full object-contain opacity-40"
          />
          {/* Light overlay so text pops */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(240,244,248,0.85) 0%, rgba(240,244,248,0.7) 50%, rgba(240,244,248,0.9) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center" style={{ minHeight: "85vh" }}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm"
            style={{ backgroundColor: "rgba(107,143,181,0.15)", color: "#1B3A5C" }}
          >
            <Mic size={14} />
            A podcast for families and educators
          </div>

          <h1
            className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            style={{ color: "#1B3A5C" }}
          >
            Young and Hungry
            <br />
            K-12 Podcast
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
            style={{ color: "#6B8FB5" }}
          >
            Join Dr. Sean Young &amp; kids, Melody &amp; Maverick, for
            extraordinary interviews!
          </p>

          <a
            href="https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#1B3A5C" }}
          >
            Sign Up for Updates
          </a>
        </div>
      </section>

      {/* ───── FUN FACTS ABOUT DR. YOUNG ───── */}
      <section id="fun-facts" className="relative overflow-hidden py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        {/* Decorative icons */}
        <Deco icon={1} top="8%" left="4%" size={30} rotate={12} opacity={0.08} />
        <Deco icon={2} top="15%" right="5%" size={24} rotate={-20} opacity={0.1} />
        <Deco icon={4} bottom="10%" left="7%" size={20} rotate={30} opacity={0.07} />

        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ color: "#1B3A5C" }}
          >
            Fun Facts about Dr. Young!
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6">
            {/* Left 3 facts */}
            <div className="flex flex-col gap-4 flex-1">
              {[
                { text: "Graduated from Stanford University and taught at their Graduate School of Business", icon: School },
                { text: "Earned his PhD in Psychology and Master's degree in Health Services Research", icon: GraduationCap },
                { text: "Is a Medical School Professor for the Emergency Medicine Department at UC Irvine", icon: Stethoscope },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col gap-3 flex-1"
                  style={{ backgroundColor: "#EDF3F9" }}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#6B8FB5" }}
                    />
                    <span className="text-sm" style={{ color: "#1B3A5C" }}>
                      {fact.text}
                    </span>
                  </div>
                  <div className="flex justify-center mt-auto pt-2">
                    <fact.icon size={28} style={{ color: "#6B8FB5", opacity: 0.5 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Center image */}
            <div className="flex-shrink-0 flex">
              <div
                className="rounded-2xl overflow-hidden shadow-lg border-4 flex"
                style={{ borderColor: "#6B8FB5" }}
              >
                <img
                  src={drYoungImg}
                  alt="Fun Facts about Dr. Young"
                  className="w-64 sm:w-72 h-auto lg:h-full object-cover"
                />
              </div>
            </div>

            {/* Right 3 facts */}
            <div className="flex flex-col gap-4 flex-1">
              {[
                { text: "Is an Informatics Professor with the UCI Department of Informatics", icon: Monitor },
                { text: "Authored 'Stick with It', a #1 Wall Street Journal and international best-selling book", icon: BookMarked },
                { text: "Has presented at forums such as the European Parliament, mHealth conference, and World Congress", icon: Globe },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col gap-3 flex-1"
                  style={{ backgroundColor: "#EDF3F9" }}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#6B8FB5" }}
                    />
                    <span className="text-sm" style={{ color: "#1B3A5C" }}>
                      {fact.text}
                    </span>
                  </div>
                  <div className="flex justify-center mt-auto pt-2">
                    <fact.icon size={28} style={{ color: "#6B8FB5", opacity: 0.5 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── AI FUN FACTS IN EDUCATION ───── */}
      <section
        id="ai-facts"
        className="relative overflow-hidden py-20 px-6"
        style={{
          background: "linear-gradient(180deg, #f0f4f8 0%, #e4ecf4 100%)",
        }}
      >
        {/* Decorative icons */}
        <Deco icon={0} top="10%" right="6%" size={28} rotate={15} opacity={0.1} />
        <Deco icon={3} top="20%" left="4%" size={22} rotate={-10} opacity={0.08} />
        <Deco icon={2} bottom="12%" right="8%" size={26} rotate={25} opacity={0.09} />
        <Deco icon={4} bottom="8%" left="6%" size={20} rotate={-18} opacity={0.07} />

        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ color: "#1B3A5C" }}
          >
            AI Fun Facts in Education
          </h2>
          <p
            className="text-center mb-12 max-w-xl mx-auto"
            style={{ color: "#6B8FB5" }}
          >
            Discover how artificial intelligence is transforming classrooms
            and helping students learn better!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {AI_FACTS.map((fact, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#EDF3F9" }}
                >
                  <fact.icon size={28} style={{ color: "#1B3A5C" }} />
                </div>
                <h3
                  className="font-semibold mb-2 text-lg"
                  style={{ color: "#1B3A5C" }}
                >
                  {fact.title}
                </h3>
                <p className="text-sm" style={{ color: "#6B8FB5" }}>
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── AI MISCONCEPTIONS ───── */}
      <section id="ai-myths" className="relative overflow-hidden py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        {/* Decorative icons */}
        <Deco icon={2} top="6%" left="5%" size={26} rotate={-12} opacity={0.08} />
        <Deco icon={0} top="12%" right="4%" size={22} rotate={22} opacity={0.1} />
        <Deco icon={1} bottom="8%" right="6%" size={28} rotate={-8} opacity={0.07} />

        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ color: "#1B3A5C" }}
          >
            AI Misconceptions vs. Truth
          </h2>
          <p
            className="text-center mb-12 max-w-xl mx-auto"
            style={{ color: "#6B8FB5" }}
          >
            Let's bust some common myths about AI in everyday life!
          </p>

          <div className="space-y-6">
            {AI_MYTHS.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ border: "1px solid #E0EAF2" }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Misconception */}
                  <div
                    className="p-6 flex items-start gap-3"
                    style={{ backgroundColor: "#FEF3F2" }}
                  >
                    <AlertTriangle
                      size={22}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#D97706" }}
                    />
                    <div>
                      <span
                        className="text-xs uppercase tracking-wider font-semibold"
                        style={{ color: "#D97706" }}
                      >
                        Misconception
                      </span>
                      <p className="mt-1" style={{ color: "#1B3A5C" }}>
                        {item.misconception}
                      </p>
                    </div>
                  </div>
                  {/* Truth */}
                  <div
                    className="p-6 flex items-start gap-3"
                    style={{ backgroundColor: "#ECFDF5" }}
                  >
                    <CheckCircle
                      size={22}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#059669" }}
                    />
                    <div>
                      <span
                        className="text-xs uppercase tracking-wider font-semibold"
                        style={{ color: "#059669" }}
                      >
                        Truth
                      </span>
                      <p className="mt-1" style={{ color: "#1B3A5C" }}>
                        {item.truth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEEDBACK / SHARE YOUR THOUGHTS ───── */}
      <section
        id="feedback"
        className="relative overflow-hidden py-20 px-6"
        style={{
          background: "linear-gradient(180deg, #f0f4f8 0%, #dce6f0 100%)",
        }}
      >
        {/* Decorative icons */}
        <Deco icon={4} top="10%" left="5%" size={24} rotate={18} opacity={0.09} />
        <Deco icon={1} top="18%" right="7%" size={30} rotate={-14} opacity={0.08} />
        <Deco icon={3} bottom="14%" left="8%" size={22} rotate={28} opacity={0.07} />

        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle
            size={48}
            className="mx-auto mb-4"
            style={{ color: "#6B8FB5" }}
          />
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#1B3A5C" }}
          >
            Share Your Thoughts on Young &amp; Hungry K-12
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: "#6B8FB5" }}>
            The Young and Hungry K-12 Podcast is currently in development
            and we'd love your help shaping it! Whether you're a parent,
            educator, or just passionate about kids &amp; learning, your
            feedback will directly influence the topics, format, and future
            of the show.
          </p>
          <a
            href="https://uci.co1.qualtrics.com/jfe/form/SV_02kdZ52eHqVqDj0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#1B3A5C" }}
          >
            Take the Survey
          </a>
        </div>
      </section>

      {/* ───── LINKS & SOCIAL ───── */}
      <section id="links" className="relative overflow-hidden py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        {/* Decorative icons */}
        <Deco icon={0} top="8%" right="5%" size={26} rotate={-20} opacity={0.09} />
        <Deco icon={2} top="22%" left="4%" size={22} rotate={15} opacity={0.08} />
        <Deco icon={4} bottom="10%" right="7%" size={28} rotate={-10} opacity={0.1} />
        <Deco icon={1} bottom="16%" left="6%" size={20} rotate={24} opacity={0.07} />

        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-10"
            style={{ color: "#1B3A5C" }}
          >
            Connect &amp; Learn More
          </h2>

          {/* Newsletter Sign-Up CTA */}
          <a
            href="https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl mb-10"
            style={{ backgroundColor: "#1B3A5C" }}
          >
            <Mail size={20} />
            Newsletter Sign-Up
          </a>

          {/* Link grid */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/youngandhungryk_12",
                icon: Instagram,
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@youngandhungryk_12",
                icon: ExternalLink,
              },
              {
                label: "Dr. Young's Website",
                href: "https://seanyoungphd.com/",
                icon: ExternalLink,
              },
              {
                label: "UCI Faculty Highlight",
                href: "https://www.faculty.uci.edu/profile/?facultyId=6763",
                icon: GraduationCap,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-5 py-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                style={{
                  backgroundColor: "#EDF3F9",
                  color: "#1B3A5C",
                }}
              >
                <link.icon size={20} style={{ color: "#6B8FB5" }} />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Apply CTA */}
          <a
            href="https://uci.co1.qualtrics.com/jfe/form/SV_9BRORRbI7lWp5qu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl mt-10"
            style={{ backgroundColor: "#6B8FB5" }}
          >
            <Mic size={20} />
            Apply to Be on the Podcast
          </a>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer
        className="py-8 px-6 text-center text-sm"
        style={{ backgroundColor: "#1B3A5C", color: "#8CA9C4" }}
      >
        © {new Date().getFullYear()} Young and Hungry K-12 Podcast. All rights
        reserved.
      </footer>

      {/* ───── SCROLL TO TOP ───── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 text-white"
          style={{ backgroundColor: "#1B3A5C" }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </div>
  );
}