import { personalDetails } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>Â© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
        <p className="text-slate-400">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
