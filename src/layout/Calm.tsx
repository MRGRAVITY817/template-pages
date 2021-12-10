import Head from 'next/head';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { CalmMobileMenu } from '../components/calm/MobileMenu';

export const HeaderLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export const CalmLayout: React.FC<{ pageName: string }> = ({
  pageName,
  children
}) => {
  return (
    <div>
      <Head>
        <title>{pageName} (Calm) | CODEROUND</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-[Outfit]">
        <header className="text-cyan-800 sm:px-8 sm:py-4 sticky flex items-center justify-between px-4 py-2 bg-white">
          <HeaderLink href="/calm">
            <h1 className="sm:text-3xl text-2xl font-bold">CODEROUND</h1>
          </HeaderLink>
          <div className="sm:grid items-center hidden grid-flow-col gap-6 text-xl font-normal">
            <HeaderLink href="/calm/products">
              <h2>Products</h2>
            </HeaderLink>
            <HeaderLink href="/calm/category">
              <h2>Category</h2>
            </HeaderLink>
            <HeaderLink href="/calm/signin">
              <h2>Sign In</h2>
            </HeaderLink>
            <HeaderLink href="/calm/cart">
              <ShoppingCartIcon className="w-7 h-7 ml-4" />
            </HeaderLink>
          </div>
          <CalmMobileMenu />
        </header>
        <main className="p-12">{children}</main>
      </div>
    </div>
  );
};
