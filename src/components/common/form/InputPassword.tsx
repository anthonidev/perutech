'use client';
import { HTMLProps, useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';

type Props = HTMLProps<HTMLInputElement>;

const InputPassword = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col space-y-3">
      <label className="tracking-widest text-gray-700">
        {props.label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          {...props}
          className="text-blue-500 border border-blue-500 px-5 py-3 mt-1 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-2 flex items-center px-2 text-blue-500 hover:text-blue-800"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>

      </div>
    </div>
  );
};
export default InputPassword;
