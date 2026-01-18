import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '3D Prints India',
  description: 'Industrial Precision vs. Creative Fluidity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        <div className="grid-background" />
        <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
            <a href="/" className="text-xl font-bold font-display tracking-tighter">3D PRINTS INDIA</a>
            <div className="flex gap-8 text-sm uppercase tracking-wide">
                <a href="/work" className="hover:opacity-50 transition-opacity">Work</a>
                <a href="/careers" className="hover:opacity-50 transition-opacity">Careers</a>
                <a href="/contact" className="hover:opacity-50 transition-opacity">Contact</a>
            </div>
        </nav>
        <main className="min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
