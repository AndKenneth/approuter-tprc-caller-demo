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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
