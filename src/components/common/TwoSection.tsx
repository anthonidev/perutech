import React from 'react';

type Props = {
  main: React.ReactNode;
  sidebar: React.ReactNode;
};

const TwoSection = ({ main, sidebar }: Props) => {
  return (
    <div className='flex h-full justify-between'>
      <div className='w-full'>{main}</div>
      <div className='w-80 border-l-4'>{sidebar}</div>
    </div>
  );
};

export default TwoSection;
