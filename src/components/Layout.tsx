interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav></nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
