import FooterDashboard from '@/components/shared/FooterDashboard';
import NavbarDashboard from '@/components/shared/NavbarDashboard';
import SidebarDashboard from '@/components/shared/SidebarDashboard';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen min-h-screen flex-col justify-between'>
      <NavbarDashboard />
      <div className='flex h-full'>
        <SidebarDashboard />
        <main className='flex-1 overflow-y-auto bg-gray-50'>{children}</main>
      </div>
      <FooterDashboard />
    </div>
  );
}
