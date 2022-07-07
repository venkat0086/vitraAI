import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default Layout;
