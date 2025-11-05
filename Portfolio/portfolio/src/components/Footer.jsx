import { siteConfig } from '../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Hosted on Vercel</span>
            <span>•</span>
            <a 
              href="https://Nikhil.dev" 
              className="hover:text-cyan-400 transition-colors"
            >
              Nikhil.dev
            </a>
          </div>
          
          <div className="flex gap-6">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm capitalize"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
