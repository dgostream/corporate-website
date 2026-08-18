import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-background py-24 text-foreground border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo and About */}
          <div className="lg:col-span-2 space-y-8">
            <div className="scale-125 md:scale-150 origin-left">
              <Logo />
            </div>
            <p className="text-muted max-w-sm font-normal leading-relaxed">
              Nepal&apos;s OTT home for live sports and Nepali entertainment
              worldwide. First OTT licence in Nepal, part of Dish Media Network.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="/" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest">Corporate Office</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li>Dish Home Digital Pvt. Ltd.</li>
              <li>Chhyasikot, Lalitpur, Nepal</li>
              <li>contact@dgostream.com</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-muted pt-12 border-t border-border">
          <div className="mb-4 md:mb-0 uppercase tracking-widest">
            © {new Date().getFullYear()} Dish Home Digital Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
