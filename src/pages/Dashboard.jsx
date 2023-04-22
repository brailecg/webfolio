import { Contacts, Featured, Header, Products } from "../components/dashboard";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Featured />
      <Products />
      <Contacts />
    </div>
  );
};

export default Dashboard;
