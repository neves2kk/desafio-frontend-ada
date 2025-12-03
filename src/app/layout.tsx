import { Header } from "@/components/header";
import "./globals.css";
import {Saira} from "next/font/google"; 
import { DocsContextProvider } from "@/contexts/docsContext";


const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-saira",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={saira.className}
      >
        <DocsContextProvider>
          <Header/>
          {children}
        </DocsContextProvider>
      </body>
    </html>
  );
}
