import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  User, 
  PenLine, 
  Coffee, 
  Layers, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';

// Safe Inline SVGs for Brand Icons (Prevents lucide-react export errors)
function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsappIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63z"/>
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const contact = t.contactSection || {};

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  // Handle Form Submission with Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch("https://formspree.io/f/mdekkvrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: "almamun602767@gmail.com"
        })
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus({ loading: false, success: false, error: '' }), 5000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: "Could not send directly. Please email me at almamun602767@gmail.com" 
      });
    }
  };

  const contactCards = [
    {
      id: "phone",
      title: "Phone",
      value: "+880 1835-371391",
      link: "tel:01835371391",
      icon: <Phone className="w-5 h-5 text-[var(--color-accent)]" />
    },
    {
      id: "email",
      title: "E-mail",
      value: "almamun602767@gmail.com",
      link: "mailto:almamun602767@gmail.com",
      icon: <Mail className="w-5 h-5 text-[var(--color-accent)]" />
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      value: "+880 1835-371391",
      link: "https://wa.me/8801835371391",
      icon: <WhatsappIcon className="w-5 h-5 text-[var(--color-accent)]" />
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "@abdullah-dev67",
      link: "https://www.linkedin.com/in/abdullah-dev67/",
      icon: <LinkedinIcon className="w-5 h-5 text-[var(--color-accent)]" />
    },
    {
      id: "github",
      title: "Github",
      value: "@abdullahalmamun111",
      link: "https://github.com/abdullahalmamun111",
      icon: <GithubIcon className="w-5 h-5 text-[var(--color-accent)]" />
    },
    {
      id: "instagram",
      title: "Instagram",
      value: "@abdullah_mamun",
      link: "https://www.instagram.com/",
      icon: <InstagramIcon className="w-5 h-5 text-[var(--color-accent)]" />
    }
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Main Header */}
      <div className="text-center space-y-1.5 pt-2">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          <Layers className="w-4 h-4 text-[var(--color-accent)]" />
          <span>{contact.subtitle || "Don't hesitate to"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-chakra">
          <span className="text-[var(--color-text-primary)]">
            {contact.titlePrefix}{' '}
          </span>
          <span className="text-[var(--color-accent)]">
            {contact.titleHighlight}
          </span>
        </h2>
      </div>

      {/* 1. Send me a message (Form Section) */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2.5">
          <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-bold font-chakra tracking-tight text-[var(--color-text-primary)]">
            <span>{contact.sendTitlePrefix || 'Send me a'}{' '}</span>
            <span className="text-[var(--color-accent)]">
              {contact.sendTitleHighlight || 'message'}
            </span>
          </h3>
        </div>

        {status.success && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{contact.sentSuccess || "Thank you! Your message has been sent successfully to Abdullah's email."}</span>
          </div>
        )}

        {status.error && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm">
            {status.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left Column: 3 Input fields */}
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] overflow-hidden focus-within:border-[var(--color-accent)] transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-window-bg)] border-r border-[var(--color-card-border)] text-[var(--color-accent)] shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={contact.namePlaceholder || "Name *"}
                  className="w-full px-4 py-3 bg-transparent text-xs sm:text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] overflow-hidden focus-within:border-[var(--color-accent)] transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-window-bg)] border-r border-[var(--color-card-border)] text-[var(--color-accent)] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={contact.emailPlaceholder || "E-mail *"}
                  className="w-full px-4 py-3 bg-transparent text-xs sm:text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none"
                />
              </div>

              {/* Subject */}
              <div className="flex items-center rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] overflow-hidden focus-within:border-[var(--color-accent)] transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-window-bg)] border-r border-[var(--color-card-border)] text-[var(--color-accent)] shrink-0">
                  <PenLine className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={contact.subjectPlaceholder || "Subject *"}
                  className="w-full px-4 py-3 bg-transparent text-xs sm:text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none"
                />
              </div>
            </div>

            {/* Right Column: Message Textarea */}
            <div className="rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] focus-within:border-[var(--color-accent)] p-3 transition-colors h-full min-h-[160px] flex">
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={contact.messagePlaceholder || "Message *"}
                className="w-full h-full bg-transparent text-xs sm:text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none resize-none p-1"
              />
            </div>
          </div>

          {/* Centered Send Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status.loading}
              className="px-8 py-3 rounded-2xl bg-[var(--color-accent)] hover:opacity-95 text-white font-chakra font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-lg shadow-[var(--color-accent)]/25 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{contact.sendingBtn || "SENDING..."}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{contact.sendBtn || "SEND MESSAGE"}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* 2. Or if you prefer... (Social & Direct Cards) */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-bold font-chakra tracking-tight text-[var(--color-text-primary)]">
            <span>{contact.preferTitlePrefix || 'Or if you'}{' '}</span>
            <span className="text-[var(--color-accent)]">
              {contact.preferTitleHighlight || 'prefer...'}
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {contactCards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:border-[var(--color-accent)]/40 transition-transform">
                {card.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold font-chakra text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {card.title}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] truncate font-mono mt-0.5">
                  {card.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 3. Support my work (Buy Me a Coffee Section linked to WhatsApp) */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center space-x-2.5">
          <div className="w-1 h-5 bg-[var(--color-accent)] rounded-full" />
          <h3 className="text-xl sm:text-2xl font-bold font-chakra tracking-tight text-[var(--color-text-primary)]">
            <span>{contact.supportTitlePrefix || 'Support my'}{' '}</span>
            <span className="text-[var(--color-accent)]">
              {contact.supportTitleHighlight || 'work'}
            </span>
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)]">
          {/* Coffee Mug Graphic Illustration */}
          <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[var(--color-accent)]/15 border-2 border-[var(--color-accent)]/30 flex items-center justify-center shadow-inner group">
            <div className="w-20 h-20 rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Coffee className="w-10 h-10 text-[var(--color-accent)] animate-pulse" />
            </div>
          </div>

          {/* Text & WhatsApp Button */}
          <div className="space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed text-center md:text-left">
            <p>
              {contact.supportP1 || "If you find my open-source work helpful or enjoy browsing through my portfolio, please consider supporting my work with a coffee!"}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              {contact.supportP2 || "Your support helps me continue developing and maintaining projects that benefit the community and help me create more useful resources for developers."}
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/8801835371391?text=Hi%20Abdullah,%20I%20would%20like%20to%20support%20your%20work!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-accent)]/40 hover:border-[var(--color-accent)] text-[var(--color-accent)] font-chakra font-bold text-xs hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-xs cursor-pointer"
              >
                <Coffee className="w-4 h-4" />
                <span>{contact.supportBtn || "Buy Me a Coffee"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}