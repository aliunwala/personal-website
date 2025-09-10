import { aboutMeSmallData } from "../lib/allData";
import "../styles/globals.css";

export const metadata = {
  title: aboutMeSmallData.name,
  description: aboutMeSmallData.subtitle,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
