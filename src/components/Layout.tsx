import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full'>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
