import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Time Tracker – Track GitHub PR Review Time",
  description: "Measure time developers spend reviewing pull requests. Identify bottlenecks and improve team velocity with actionable analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5b31c9a7-c8ab-4799-8769-2251823a1d80"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
