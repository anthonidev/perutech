'use client';
import {
  Article,
  CalendarBlank,
  CalendarDots,
  Certificate,
  ChartBar,
  ChartPieSlice,
  Chats,
  ChatTeardropDots,
  Gear,
  HouseLine,
  Newspaper,
} from '@phosphor-icons/react';
import LinkItem from '../common/LinkItem';
const Items = [
  {
    name: 'Inicio',
    icon: <HouseLine size={20} className='mr-4' />,
    to: '/dashboard',
  },
  {
    name: 'Dashboard Hibrido',
    icon: <ChartBar size={20} className='mr-4' />,

    to: '/dashboard/hibrido',
  },
  {
    name: 'Distribución Hibrida',
    icon: <ChartPieSlice size={20} className='mr-4' />,

    to: '/dashboard/distribucion/hibrida',
  },
  {
    name: 'Blog',
    icon: <Article size={20} className='mr-4' />,

    to: '/dashboard/blog',
  },
  {
    name: 'Reportes',
    icon: <ChatTeardropDots size={20} className='mr-4' />,

    to: '/dashboard/distribucion/hibrida',
  },
  {
    name: 'Foro',
    icon: <Chats size={20} className='mr-4' />,

    to: '/dashboard/distribucion/hibrida',
  },
  {
    name: 'Eventos',
    icon: <CalendarDots size={20} className='mr-4' />,

    to: '/dashboard/distribucion/hibrida',
  },
  {
    name: 'Noticias',
    icon: <Newspaper size={20} className='mr-4' />,

    to: '/dashboard/distribucion/hibrida',
  },
  {
    name: 'Certificados',
    icon: <Certificate size={20} className='mr-4' />,

    to: '/dashboard/distribucion/hibrida',
  },
  {
    name: 'Configuración',
    icon: <Gear size={20} className='mr-4' />,

    to: '/dashboard/configuracion',
  },
];

const SidebarDashboard = () => {
  return (
    <div className='h-full w-60 border-r-4'>
      <ul>
        {Items.map((item, index) => (
          <LinkItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarDashboard;
