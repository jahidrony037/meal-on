import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="container mx-auto text-center">
      <Header />
      {navigation.state === "loading" ? (
        <span className="loading loading-bars loading-lg text-center"></span>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Home;
