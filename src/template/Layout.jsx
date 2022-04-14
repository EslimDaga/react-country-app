import Header from "../components/common/Header";

const Layout = ({ children }) => {
  return (
  <div className="bg-gray-100 dark:bg-gray-900 h-screen flex flex-col">
    <Header />
    {children}
  </div>);
}

export default Layout;