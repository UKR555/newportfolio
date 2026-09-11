import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CH Udaya Kumar | AI / ML Engineer & Software Development Engineer (SDE)',
  description: 'Portfolio of CH Udaya Kumar - AI/ML Engineer & SDE specializing in Spring Boot, Python, YOLOv8, OpenCV, and System Design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}