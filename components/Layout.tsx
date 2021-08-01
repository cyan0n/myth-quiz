import Head from "next/head";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content="Vampire Companion" />
      </Head>
      <main className={className}>{children}</main>
    </div>
  );
}
