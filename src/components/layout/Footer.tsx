import { Logo } from "@/components/ui/Logo";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background py-24 text-foreground border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo and About */}
          <div className="lg:col-span-2 space-y-8">
            <div className="scale-150 origin-left">
              <Logo />
            </div>
            <p className="text-muted max-w-sm font-normal leading-relaxed">
              DGO is the market leader in digital entertainment in Nepal, 
              with 670,000+ verified users and exclusive rights to the 
              Nepal Premier League (NPL).
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="/" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest">Corporate Office</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li>Kathmandu, Nepal</li>
              <li>business@dgostream.com</li>
              <li>+977-1-2345678</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-muted pt-12 border-t border-border">
          <div className="mb-4 md:mb-0 uppercase tracking-widest">
            © {new Date().getFullYear()} DGO Corporation. All rights reserved.
          </div>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
