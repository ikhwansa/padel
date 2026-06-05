export default function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-bold text-primary font-headline">
            The Kinetic Court
          </div>
          <div className="font-body text-sm text-on-surface-variant">
            © 2024 The Kinetic Court. Electric Velocity.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-body text-sm">
          <a
            className="text-on-surface-variant hover:text-tertiary transition-colors"
            href="#"
          >
            Contact
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary transition-colors"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-on-surface-variant hover:text-tertiary transition-colors"
            href="#"
          >
            Facebook
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container transition-all group cursor-pointer">
            <span className="material-symbols-outlined text-sm text-on-surface group-hover:text-on-primary-container">
              arrow_upward
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
