import Image from 'next/image';
import Password from '@/components/common/form/InputPassword';
import PrimaryButton from '@/components/common/button/PrimaryButton';

export default function LoginPage() {
  return (
    <div className="mt-10 flex">
      <div className="flex w-full flex-col justify-center">
        <h1 className="text-3xl font-semibold tracking-wider text-gray-700">
          Establecer nueva contraseña
        </h1>
        <p className="my-5 text-gray-600 max-w-md">
          Se ha validado la identidad de su cuenta. Ahora puede volver a crear una contraseña
        </p>
        <div className="flex max-w-md flex-col space-y-10">
          <Password label="Contraseña nueva" placeholder="....." />
          <Password label="Confirmación de contraseña" placeholder="....." />

          <PrimaryButton title="Establecer Contraseña" />
        </div>
      </div>
      <div className={'w-full'}>
        <Image
          src={'/validate.png'}
          alt={'login banner'}
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}
