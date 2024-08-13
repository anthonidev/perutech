import Image from 'next/image';
import React from 'react';

type Props = {};

const FooterDashboard = (props: Props) => {
  return (
    <div className='flex h-16 items-center border-t-4'>
      <Image
        src='/perutech.png'
        width={200}
        height={200}
        alt='logo'
        className='p-2'
      />
    </div>
  );
};

export default FooterDashboard;
