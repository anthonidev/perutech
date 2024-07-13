import Navbar from '@/components/shared/Navbar';

export default function AuthLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Navbar />
      {children}
    </div>
  );
}
