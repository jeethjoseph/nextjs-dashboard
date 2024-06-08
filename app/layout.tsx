// this applies the css to the entire App. We an import it anywhere but it is better to import it in root layout 
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Here antialiased is a tailwind class. It smoothens out the font  */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
