import type { NextPage } from 'next';
import Head from 'next/head';
import { PagePreview } from '../components/PagePreview';

const pages: {
  href: string;
  title: string;
  description: string;
  src: string;
}[] = [
  {
    href: '/basic/',
    title: 'Ecommerce Basic',
    description: 'This page is a basic landing page of ecommerce website',
    src: '/static/ecommerce-basic.png'
  },
  {
    href: '/calm',
    title: 'Ecommerce Calm',
    description:
      'More calm type landing page, using mostly the blue tone colors.',
    src: '/static/ecommerce-calm.png'
  }
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Explore the page samples</title>
        <link rel="canonical" href="/" key="canonical" />
      </Head>
      <main className="p-12">
        <div className="lg:my-12 my-8">
          <h1 className="xl:text-6xl text-4xl font-black">Explore.</h1>
          <div className="lg:grid-cols-3 md:grid-cols-2 grid w-full grid-cols-1 gap-4 mt-12">
            {pages.map((pages) => (
              <PagePreview key={pages.href} {...pages} />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="xl:text-6xl text-4xl font-black">External</h1>
          <div className="grid grid-cols-4 gap-8">
            <div className="shadow-cyan-300/30 rounded-2xl col-span-1 mt-12 overflow-hidden shadow-lg">
              <iframe src="/calm" className="aspect-[1/2] w-full" />
            </div>
            <div className="col-span-3 mt-12">
              <iframe
                src="/calm"
                className="rounded-2xl aspect-[16/9] shadow-cyan-300/30 w-full overflow-y-hidden shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
