import Header from "@/components/header";
import "./globals.css";
import Footer from '@/components/footer';

export const metadata = {
  title: "Gelateria",
  description: "Site da sorveteria Gelateria o melhor sorvete do Oeste Catarinense",
  icons: {
    icon: '/icons/gelateria.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
