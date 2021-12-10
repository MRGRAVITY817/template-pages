import Image from 'next/image';
import Link from 'next/link';

interface PagePreviewProps {
  href: string;
  title: string;
  description: string;
  src: string;
}

export const PagePreview: React.FC<PagePreviewProps> = ({
  href,
  title,
  description,
  src
}) => {
  return (
    <Link href={href}>
      <a className=" shadow-violet-300/20 hover:shadow-violet-400/40 hover:shadow-lg grid grid-flow-row gap-0 overflow-hidden transition-shadow rounded-lg shadow-md">
        <div className="h-72 relative">
          <Image
            src={src}
            alt={description}
            layout="fill"
            objectFit="cover"
            className="hover:scale-100 transition-transform scale-110"
          />
        </div>
        <div className="p-4 text-black bg-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg font-light">{description}</p>
        </div>
      </a>
    </Link>
  );
};
