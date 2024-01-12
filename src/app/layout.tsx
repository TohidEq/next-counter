import type { Metadata } from "next";
import "@/styles/tailwind.scss";

export const metadata: Metadata = {
  title: "Next Counter",
  description: "Next js Counter app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"app"}>{children}</body>
    </html>
  );
}
