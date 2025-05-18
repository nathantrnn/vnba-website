import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Particles } from "@/components/ui-magic/particles";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = {
    about: [
      { name: "About Us", href: "/about" },
      { name: "Our Court", href: "/court" },
      { name: "Our Programs", href: "/programs" },
      { name: "Contact Us", href: "/contact" },
    ],
    resources: [
      { name: "Resources", href: "/resources" },
      { name: "Basketball Tips", href: "/resources" },
      { name: "Training Videos", href: "/resources" },
      { name: "Events Calendar", href: "/resources" },
    ],
    programs: [
      { name: "Youth Programs", href: "/programs" },
      { name: "Adult Leagues", href: "/programs" },
      { name: "Private Coaching", href: "/programs" },
      { name: "Camps & Clinics", href: "/programs" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
  ];

  return (
    <footer className="bg-background-alt border-t border-border-light mt-auto relative overflow-hidden">
      {mounted && (
        <Particles 
          className="absolute inset-0 z-0" 
          quantity={40}
          staticity={60}
          ease={35}
          color="#001F5B"
          size={0.8}
        />
      )}
      
      <Container className="relative z-10">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Logo and company info */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image 
                src="/logo/vnba-logo.png" 
                alt="Vietnam Basketball Academy" 
                width={180} 
                height={60} 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-foreground font-semibold max-w-md">
              Body. Mind. Spirit.
            </p>
          </div>
          
          {/* Quick Links - 3 columns on all screen sizes */}
          <div className="md:col-span-3 grid grid-cols-3 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">ABOUT US</h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground-muted hover:text-primary text-sm lg:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">PROGRAMS</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground-muted hover:text-primary text-sm lg:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">RESOURCES</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground-muted hover:text-primary text-sm lg:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and social links */}
        <div className="border-t border-border-light py-6 flex flex-col md:flex-row justify-between items-center text-foreground-subtle text-sm">
          <div className="mb-4 md:mb-0">
            <span>&copy; {currentYear} Vietnam Basketball Academy. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-foreground-muted"
                aria-label={`Follow us on ${item.name}`}
              >
                <span className="sr-only">{item.name}</span>
                <svg 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  {item.icon === "facebook" && (
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  )}
                  {item.icon === "instagram" && (
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  )}
                  {item.icon === "twitter" && (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  )}
                  {item.icon === "youtube" && (
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
} 