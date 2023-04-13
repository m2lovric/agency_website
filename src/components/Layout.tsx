import Footer from './Footer';
import Nav from './Nav';
import WhyLogo from './WhyLogo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='w-full sm:overflow-hidden'>
      <Nav />
      <main>{children}</main>
      <WhyLogo />
      <Footer />
    </div>
  );
};

export default Layout;
