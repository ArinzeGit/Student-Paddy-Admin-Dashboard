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
      <body className="bg-[#F1F3F4]">
        <main>{children}</main>
      </body>
    </html>
  );
}
