import React from 'react';

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = (props: Props) => {


  return (
    <button
      className={`bg-blue-500 mt-10 tracking-widest text-xl text-white px-4 py-3 font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-blue-600 `}
      {...props}
    >
      {props.title}
    </button>

  );
};
export default PrimaryButton;
