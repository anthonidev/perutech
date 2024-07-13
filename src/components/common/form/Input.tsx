import { HTMLProps } from 'react';

type Props = HTMLProps<HTMLInputElement>;

const Input = (props: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      <label className="tracking-widest text-gray-700">
        {props.label}
      </label>
      <input
        {...props}
        className="text-blue-500  border border-blue-500 px-5 py-3 mt-1 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};
export default Input;
