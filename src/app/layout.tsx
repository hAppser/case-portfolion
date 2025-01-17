import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 font-inter">
        <header className="bg-white flex flex-row w-screen items-center justify-between px-10 py-2">
          <h1 className="text-[#171F2D]">Overview</h1>
          <Button className="bg-[#002E2E] text-white rounded-lg p-4 pl-3">
            <span className="text-3xl ">+</span>
            <span className="text-base">Add Property</span>
          </Button>
        </header>
        <main className=" mx-auto p-4 px-10">{children}</main>
      </body>
    </html>
  );
}
