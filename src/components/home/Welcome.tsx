import Image from 'next/image';
import React from 'react';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <h1 className='text-center text-4xl font-bold text-blue-800'>
        ¡Bienvenido!
      </h1>
      <Image src='/home.png' width={500} height={500} alt='home ' />
      <p className='text-center text-xl font-semibold text-blue-800'>
        Gracias por sumarte <br />
        al cambio
      </p>
    </div>
  );
};

export default Welcome;
