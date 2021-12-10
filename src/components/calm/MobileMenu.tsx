import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { HeaderLink } from '../../layout/Calm';

const MenuItem: React.FC<{ href: string }> = ({ href, children }) => (
  <Menu.Item>
    <HeaderLink href={href}>{children}</HeaderLink>
  </Menu.Item>
);

export const CalmMobileMenu = () => {
  return (
    <Menu as="div" className="sm:hidden relative block">
      <Menu.Button className="align-middle">
        <MenuIcon className="w-7 h-7" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opactiy-100 scale-100"
        leaveTo="transform opactiy-0 scale-95"
      >
        <Menu.Items className="bg-cyan-800 absolute right-0 w-56 px-4 text-white divide-y divide-white rounded-md">
          <div className="grid grid-flow-row gap-2 py-4">
            <MenuItem href="/calm/products">
              <h2>Products</h2>
            </MenuItem>
            <MenuItem href="/calm/category">
              <h2>Category</h2>
            </MenuItem>
            <MenuItem href="/calm/signin">
              <h2>Sign In</h2>
            </MenuItem>
          </div>
          <div className="py-4">
            <MenuItem href="/calm/cart">
              <h2>Cart</h2>
            </MenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
