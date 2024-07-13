import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="py-4 sticky top-0">
      <nav className="flex justify-between">
        <ul>
          <li>
            <Image src={'/Logo.png'} alt={'logo'} width={200} height={100} />
          </li>
        </ul>
        <ul className="flex space-x-10 tracking-wider text-gray-700 text-lg">
          <li>
            Inicio
          </li>
          <li>
            Ayuda
          </li>
          <li>
            Contáctanos
          </li>
        </ul>
      </nav>

    </header>
  );
};
export default Navbar;
