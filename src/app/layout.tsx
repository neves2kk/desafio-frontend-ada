import { Header } from "@/components/ui/header";
import "./globals.css";
import {Saira} from "next/font/google"; 
import { DocsContextProvider } from "@/contexts/docsContext";
import { Bounce, ToastContainer } from "react-toastify";


const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-saira",
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={saira.className}
      >
        <DocsContextProvider>
          
          {children}
          <ToastContainer
            theme="light"
            toastClassName="relative flex p-0 min-h-10 rounded-md overflow-hidden cursor-pointer"
            position="top-right"
            autoClose={3000}
            transition={Bounce}
            pauseOnHover={false}
            closeOnClick
            hideProgressBar
            newestOnTop
          />
        </DocsContextProvider>
      </body>
    </html>
  );
}
