import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Illustrations';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { t } = useLanguage();
  const contact = t.contactSection || {};

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-8 pb-6">
      <div className="flex items-center space-x-2.5 mb-6">
        <div className="w-1.5 h-6 bg-[var(--color-accent)] rounded-full shrink-0" />
        <h2 className="text-xl sm:text-2xl font-chakra tracking-tight">
          <span className="font-bold text-[var(--color-text-primary)]">
            {contact.titlePrefix}{' '}
          </span>
          <span className="font-bold text-[var(--color-accent)]">
            {contact.titleHighlight}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Info Card */}
        <div className="lg:col-span-2 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] p-6 space-y-6">
          <div>
            <h3 className="font-chakra font-bold text-base text-[var(--color-text-primary)] mb-2">
              {contact.cardTitle}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {contact.cardDesc}
            </p>
          </div>

          <div className="space-y-4 text-xs text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  {contact.emailLabel}
                </div>
                <a
                  href={`mailto:${t.email}`}
                  className="font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  {contact.locationLabel}
                </div>
                <span className="font-medium text-[var(--color-text-primary)]">
                  {t.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  {contact.socialsLabel}
                </div>
                <div className="flex gap-2 font-medium text-[var(--color-accent)]">
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {t.linkedin}
                  </a>
                  <span>•</span>
                  <a
                    href={t.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {t.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="lg:col-span-3 rounded-2xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] p-6">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
              <h4 className="font-chakra font-bold text-base text-[var(--color-text-primary)]">
                {contact.sentTitle}
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] max-w-xs">
                {contact.sentDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1 font-chakra">
                  {contact.nameInputLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={contact.nameInputPlaceholder}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] focus:border-[var(--color-accent)] focus:outline-none text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1 font-chakra">
                  {contact.emailInputLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={contact.emailInputPlaceholder}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] focus:border-[var(--color-accent)] focus:outline-none text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1 font-chakra">
                  {contact.messageInputLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={contact.messageInputPlaceholder}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] focus:border-[var(--color-accent)] focus:outline-none text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-[var(--color-accent-glow)] font-chakra"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{contact.sendBtn}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
