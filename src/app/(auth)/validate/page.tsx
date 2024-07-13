import Image from 'next/image';
import PrimaryButton from '@/components/common/button/PrimaryButton';

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="flex w-2/5 flex-col justify-center space-y-20">
        <div>
          <h1 className="text-3xl font-semibold tracking-wider text-gray-700">
            ¿Verifica el código?
          </h1>
          <div className="my-5 text-gray-600 max-w-sm">
            <span>Ingresa el código de 08 dígitos que fueron enviados a tu celular o correo de la cuenta </span>

          </div>
        </div>

        <div className="flex space-x-3">
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />

          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
          <input
            className="border-4 w-10 h-16 rounded-lg border-blue-500"
            type="text"
          />
        </div>
        <PrimaryButton title="Validar Código" />

      </div>
      <div className={'w-2/3'}>
        <Image
          src={'/validate.png'}
          alt={'login banner'}
          width={800}
          height={700}
        />
      </div>
    </div>
  );
}
