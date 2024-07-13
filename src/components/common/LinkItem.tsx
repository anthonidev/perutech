import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type Props = {
  name: string;
  icon: JSX.Element;
  to: string;
};

const LinkItem = ({ icon: Icon, name, to }: Props) => {
  const path = usePathname();

  return (
    <li>
      <Link href={to}>
        <motion.p
          className={`flex h-12 items-center px-4 ${
            path == to ? 'rounded-r-full bg-blue-500 font-bold text-white' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ backgroundColor: path == to ? '#3B82F6' : 'transparent' }}
          animate={{ backgroundColor: path == to ? '#3B82F6' : 'transparent' }}
          transition={{ duration: 0.3 }}
        >
          {Icon}
          <span>{name}</span>
        </motion.p>
      </Link>
    </li>
  );
};

export default LinkItem;
