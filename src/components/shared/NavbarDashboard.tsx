import Image from 'next/image';
import React from 'react';

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
          <li>Inicio</li>
          <li>Ayuda</li>
          <li>Contáctanos</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarDashboard;
