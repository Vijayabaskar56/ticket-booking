import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

interface TopbarItemProps {
  label: string;
  url: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const TopbarItem = ({ label, url, Icon }: TopbarItemProps) => (
  <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
    <Link
      href={url}
      className="flex items-center transition-colors hover:text-white"
    >
      {Icon && <Icon className="mx-1 md:text-sm"></Icon>}
      <span>{label}</span>
    </Link>
  </li>
);

export const TopBar = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);


  const topbarItems: TopbarItemProps[] = [
    { label: "help", url: 'help' },
    { label: 'Book', url: 'book' },
    { label: "contact", url: 'tel:+0125258192502', },
  ];

  return (
    <div className="bg-[#232323] text-[10px] text-gray-300 md:text-xs">
      <div className="mx-auto flex flex-col items-center px-4 py-1 xl:container md:flex-row md:py-2.5">
        <p className="pb-2 md:pb-0">{'Discount'}</p>
        <ul className="flex flex-wrap justify-center md:ml-auto">
          {topbarItems.map(item => (
            <TopbarItem key={item.label} {...item} />
          ))}
          <div
            className="relative z-50 ml-2.5 flex cursor-pointer items-center"
            ref={ref}
          >
            <div className="relative mr-1.5 h-3.5 w-3.5 md:h-[17px] md:w-[17px]">
              <Image
                priority
                src={`/assets/${router.locale}-flag.svg`}
                alt={`${router.locale} locale`}
                fill
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
