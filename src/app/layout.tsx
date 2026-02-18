import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollGradient } from "@/components/ui/ScrollGradient";

const objective = localFont({
  src: [
    {
      path: "../../font/Objective_Woff2/Objective-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../font/Objective_Woff2/Objective-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../font/Objective_Woff2/Objective-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../font/Objective_Woff2/Objective-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../font/Objective_Woff2/Objective-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../font/Objective_Woff2/Objective-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../font/Objective_Woff2/Objective-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-objective",
});

export const metadata: Metadata = {
  title: "DGO Corporation | Global Media Infrastructure",
  description: "DGO Corporation is a leading media conglomerate defining the future of digital content and OTT platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${objective.variable} font-[family-name:var(--font-objective)] antialiased selection:bg-primary selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollGradient />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
