import Link from "next/link";
import AppProviders from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* problems with the withTRPC HOC */}
        {/* @ts-expect-error type error  */}
        <AppProviders>
          <div>
            <div>
              <div>
                <Link href={"/server"}>Server Demo</Link>
              </div>
              <div>
                <Link href={"/client"}>Client Demo</Link>
              </div>
              <div>
                <Link href={"/hybrid"}>Hybrid Demo</Link>
              </div>
            </div>
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
