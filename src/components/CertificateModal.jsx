import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Download } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;

    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const imageSrc = cert.certImage || cert.certFile;
  const title =
    cert.degree ||
    [cert.titlePrefix, cert.titleSuffix].filter(Boolean).join(' ') ||
    'Certificate';
  const subtitle = cert.institution || cert.issuerName || '';
  const downloadUrl = cert.certPdf || imageSrc;
  const downloadFilename = cert.certPdf
    ? 'Abdullah_Almamun_Certificate.pdf'
    : 'Abdullah_Almamun_Certificate.jpg';

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-auto max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[var(--color-window-bg)] border border-[var(--color-card-border)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Header: Essential title & actions only */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-[var(--color-card-border)] bg-[var(--color-card-bg)] gap-3 shrink-0">
          <div className="min-w-0 pr-2">
            <h3 className="text-xs sm:text-sm md:text-base font-chakra font-bold text-[var(--color-text-primary)] truncate">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[10px] sm:text-[11px] text-[var(--color-text-secondary)] truncate">
                {subtitle} {cert.date && subtitle !== cert.date ? `• ${cert.date}` : ''}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {downloadUrl && (
              <a
                href={downloadUrl}
                download={downloadFilename}
                title="Download Certificate"
                className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-[var(--color-window-bg)] border border-[var(--color-card-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 text-xs font-medium transition-colors flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}

            {imageSrc && (
              <a
                href={imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Full Image"
                className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-[var(--color-accent)] text-slate-950 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Full View</span>
              </a>
            )}

            <button
              onClick={onClose}
              title="Close"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-card-border)] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Image Block: tight padding, zero clutter */}
        <div className="p-2 sm:p-2.5 bg-black/25 flex items-center justify-center overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-md block"
            />
          ) : (
            <p className="p-8 text-xs text-[var(--color-text-muted)]">Certificate file not available.</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
