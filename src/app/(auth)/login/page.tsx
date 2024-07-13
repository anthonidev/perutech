import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/common/form/Input';
import Password from '@/components/common/form/InputPassword';
import PrimaryButton from '@/components/common/button/PrimaryButton';

export default function LoginPage() {
  return (
    <div className="mt-10 flex">
      <div className="flex w-full flex-col justify-center">
        <h1 className="text-3xl font-semibold tracking-wider text-gray-700">
          !Bienvenido Devuelta!
        </h1>
        <div className="my-5 text-gray-600">
          <span>No tienes una cuenta,</span>
          <Link
            href={'/signup'}
            className="ml-2 border-blue-500 text-blue-500 hover:border-b-2"
          >
            Registrate
          </Link>
        </div>
        <div className="flex max-w-md flex-col space-y-10">
          <Input
            type="text"
            label="Correo de Usuario"
            placeholder="example@gmail.com"
          />
          <Password label="Contraseña" placeholder="....." />
          <div className="flex justify-end">
            <Link href="/forgotpassword" className="text-sm text-blue-500">
              ¿Olvide mi contraseña?
            </Link>
          </div>

          <PrimaryButton title="Iniciar Sesión" />
        </div>
      </div>
      <div className={'w-full'}>
        <Image
          src={'/login.png'}
          alt={'login banner'}
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}
