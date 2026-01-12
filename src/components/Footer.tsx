'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-surface-light border-t border-surface-dark">
      <div className="container-main">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-medium">
            <span className="text-brand-black">Evon</span>
            <span className="text-brand-pink">.</span>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="text-text-muted hover:text-brand-black transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-text-muted hover:text-brand-black transition-colors"
            >
              Services
            </a>
            <a
              href="#assessment"
              className="text-text-muted hover:text-brand-black transition-colors"
            >
              Assessment
            </a>
            <a
              href="#contact"
              className="text-text-muted hover:text-brand-black transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} Evon Davis. All rights reserved.
          </p>
        </div>

        {/* Credentials */}
        <div className="mt-6 pt-6 border-t border-surface-dark text-center">
          <p className="text-xs text-text-muted">
            ICF ACC Certified Coach • CPC, IPEC
          </p>
        </div>
      </div>
    </footer>
  )
}
