"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 pb-32 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-bold text-foreground tracking-tighter mb-8"
          >
            Inquiries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-foreground font-normal leading-relaxed"
          >
            For investor relations, partnership inquiries, or media requests, please reach out to our corporate headquarters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 group">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-muted group-focus-within:text-foreground transition-colors">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:border-foreground outline-none transition-colors rounded-none placeholder-muted/30"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-4 group">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-muted group-focus-within:text-foreground transition-colors">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:border-foreground outline-none transition-colors rounded-none placeholder-muted/30"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-4 group">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted group-focus-within:text-foreground transition-colors">Corporate Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:border-foreground outline-none transition-colors rounded-none placeholder-muted/30"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-4 group">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted group-focus-within:text-foreground transition-colors">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:border-foreground outline-none transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option className="bg-background">Investor Relations</option>
                  <option className="bg-background">Partnership Inquiry</option>
                  <option className="bg-background">Media / Press</option>
                  <option className="bg-background">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-4 group">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted group-focus-within:text-foreground transition-colors">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 text-xl text-foreground focus:border-foreground outline-none transition-colors resize-none rounded-none placeholder-muted/30"
                  placeholder="How can we help?"
                ></textarea>
              </div>

              <div className="pt-8">
                <Button 
                  type="submit"
                  className="w-full md:w-auto bg-foreground text-background hover:bg-brand-gradient hover:text-white h-14 px-12 text-sm font-bold uppercase tracking-widest rounded-full"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-16 lg:pl-12"
          >
            <div>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-8">
                Headquarters
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin className="w-5 h-5 text-foreground mt-1" />
                  <address className="not-italic text-xl font-light text-foreground leading-relaxed">
                    DGO Corporation Tower<br />
                    Kathmandu, Nepal<br />
                    44600
                  </address>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="w-5 h-5 text-foreground" />
                  <a href="tel:+97712345678" className="text-xl font-light text-foreground hover:text-brand-pink transition-colors">
                    +977-1-2345678
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  <Mail className="w-5 h-5 text-foreground" />
                  <a href="mailto:business@dgostream.com" className="text-xl font-light text-foreground hover:text-brand-pink transition-colors">
                    business@dgostream.com
                  </a>
                </div>
              </div>
            </div>

            <div className="h-px bg-border w-full" />

            <div>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-8">
                Global Offices
              </h3>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Singapore</h4>
                  <p className="text-muted text-sm font-medium uppercase tracking-wider">Regional Hub</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Dubai</h4>
                  <p className="text-muted text-sm font-medium uppercase tracking-wider">MENA Operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
