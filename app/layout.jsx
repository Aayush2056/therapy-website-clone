import './globals.css';

export const metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA',
  description: 'Evidence-based therapy for anxiety, trauma, and burnout in Santa Monica, California with Dr. Maya Reynolds, PsyD.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
