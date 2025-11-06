export const metadata = {
  title: 'Hello Timeweb',
  description: 'Next.js Hello World for Timeweb Cloud Apps (Dockerfile)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', padding: 24}}>
        {children}
      </body>
    </html>
  );
}
