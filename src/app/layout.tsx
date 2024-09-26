import NavBar from "@/components/NavBar";
import "./globals.css";
export const metadata = {
  title: "Student Paddy Admin Dashboard",
  description: "Admin Dashboard of Student Paddy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F1F3F4] flex">
        <nav>
          <NavBar />
        </nav>
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
