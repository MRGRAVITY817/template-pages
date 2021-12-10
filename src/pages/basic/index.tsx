import Head from 'next/head';

export default function BasicLandingPage() {
  return (
    <div>
      <Head>
        <title>Landing Page (basic) | CODEROUND</title>
      </Head>
      <div className="p-12">
        <h1 className="text-6xl font-black">Basic Landing Page</h1>
        <p>Start making your own landing page!</p>
      </div>
    </div>
  );
}
