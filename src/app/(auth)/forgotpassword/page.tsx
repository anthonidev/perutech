import Image from 'next/image';
import Input from '@/components/common/form/Input';
import PrimaryButton from '@/components/common/button/PrimaryButton';
import InputSelect from '@/components/common/form/InputSelect';

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="flex w-2/5 flex-col justify-center">
        <h1 className="text-3xl font-semibold tracking-wider text-gray-700">
          ¿Olvidaste tu contraseña?
        </h1>
        <div className="my-5 text-gray-600 max-w-sm">
          <span>No te preocupes, nos pasa a todos. Ingrese su correo electrónico para recuperar su contraseña mediante un SMS o Correo</span>

        </div>
        <div className="flex max-w-md flex-col space-y-10">
          <Input
            type="text"
            label="Correo de Usuario"
            placeholder="example@gmail.com"
          />
          <InputSelect
            // type="text"
            label="Método de recuperación "
            // placeholder="21"
            items={[
              {
                value: 'SMS',
                id: 'sms',
              }, {
                value: 'EMAIL',
                id: 'email',
              },
            ]}
          />

          <PrimaryButton title="Enviar Codigo" />
        </div>
      </div>
      <div className={'w-2/3'}>
        <Image
          src={'/forgot.png'}
          alt={'login banner'}
          width={800}
          height={700}
        />
      </div>
    </div>
  );
}
