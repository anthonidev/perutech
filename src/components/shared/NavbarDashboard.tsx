'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
type Props = {};

const NavbarDashboard = (props: Props) => {
  return (
    <header className='sticky top-0 border-b-4 py-4'>
      <nav className='mx-5 flex items-center justify-between'>
        <ul>
          <li>
            <Image src={'/Logo.png'} alt={'logo'} width={200} height={100} />
          </li>
        </ul>
        <ul className='flex space-x-10 text-lg tracking-wider text-gray-700'>
          <li>Ayuda</li>
          <li>Contáctanos</li>
          <Menu as='div' className='relative ml-3'>
            <div>
              <MenuButton className='relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                <span className='absolute -inset-1.5' />
                <span className='sr-only'>Open user menu</span>
                <img
                  alt=''
                  src={
                    'https://avatars.githubusercontent.com/u/81866624?s=400&u='
                  }
                  className='h-8 w-8 rounded-full'
                />
              </MenuButton>
            </div>
            <MenuItems className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
              {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                  <a
                    href={item.href}
                    className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100'
                  >
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarDashboard;
