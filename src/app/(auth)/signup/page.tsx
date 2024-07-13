import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/common/form/Input';
import Password from '@/components/common/form/InputPassword';
import PrimaryButton from '@/components/common/button/PrimaryButton';
import InputSelect from '@/components/common/form/InputSelect';

export default function SignupPage() {
  return (
    <div className="mt-10 flex w-full ">
      <div className={'w-3/6'}>
        <div>
          <p
            className="font-bold text-4xl text-center text-blue-950"
          >
            Ya contamos con <br /> <span className="text-blue-500 text-5xl">1,159</span> <br /> Personas
            cambiando <br /> el mundo
          </p>
        </div>
        <Image
          src={'/signup.png'}
          alt={'login banner'}
          width={700}
          height={700}
          className="-mt-20"
        />
      </div>
      <div className="flex w-3/5 flex-col justify-center">
        <h1 className="text-3xl font-semibold tracking-wider text-gray-700">
          !Regístrate, cambia el mundo!
        </h1>
        <div className="my-5 text-gray-600">
          <span>Ya posees una cuenta,</span>
          <Link
            href={'/login'}
            className="ml-2 border-blue-500 text-blue-500 hover:border-b-2 "
          >
            Inicia Sesión
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-10 ">
          <Input
            type="text"
            label="Nombres"
            placeholder="Rodrigo Juandiego"
          />
          <Input
            type="text"
            label="Apellidos"
            placeholder="Tejada Gaitan"
          />
          <Input
            type="text"
            label="Correo"
            placeholder="example@gmail.com"
          />
          <Input
            type="text"
            label="Celular"
            placeholder="900 900 900"
          />
          <Input
            type="text"
            label="Edad"
            placeholder="21"
          />
          <InputSelect
            // type="text"
            label="Genero"
            // placeholder="21"
            items={[
              {
                value: 'Masculino',
                id: 'm',
              }, {
                value: 'Femenino',
                id: 'f',
              },
            ]}
          />
          <Password label="Contraseña" placeholder="....." />
          <Password label="Confirmación de contraseña" placeholder="....." />


        </div>
        <PrimaryButton title="Crear Cuenta" />


      </div>

    </div>
  );
}
