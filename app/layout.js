export const metadata = {
  title: "Qwickrepair Solutions",
  description: "Home repair services in Bengaluru",
  icons: {
    icon: "/logo/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
.cards::-webkit-scrollbar {
  display: none;
}
.cards {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
