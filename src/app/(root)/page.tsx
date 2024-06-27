import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { emailTest } from "@/constants";

const Home = () => {
  const loggedIn = { firstName: "Hugh", lastName: "Scott", email: emailTest };
  const subText = "Access & manage your account and transactions efficiently.";

  return (
    <section className="flex">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext={subText}
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.23}
        />
        RECENT TRANSATIONS
      </header>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 23000.3 }, { currentBalance: 2200.2 }]}
      />
    </section>
  );
};

export default Home;
