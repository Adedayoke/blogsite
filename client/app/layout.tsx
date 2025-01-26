import Header from "@/app/_components/Header";
import { DM_Sans} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"], // Include desired weights
});

export const metadata = {
  title: {
    template: "%s | EntroBlog",
    default: "Welcome | EntroBlog",
  },
  description: "EntroBlog provides bla bla bla.",
};
export default function RootLayout({ children }: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body
        className={`${dmSans?.className}`} // Use Open Sans className
      >
        <Header />
        <main className="mx-auto max-w-[70rem] w-full ">
          {children}
        </main>
      </body>
    </html>
  );
}
