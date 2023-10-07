import Head from 'next/head';
import FinancialSummary from '../components/FinancialSummary';
import FinancialChart from '../components/FinancialChart';
import AddExpenseForm from '../components/AddExpenseForm';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Budget Tracker</title>
        {/* Tambahkan meta tag atau link ke manifest PWA di sini */}
      </Head>

      <main>
        <FinancialSummary />
        <FinancialChart />
        <AddExpenseForm />
        {/* Tambahkan komponen-komponen lain di sini */}
      </main>

      {/* Tambahkan komponen footer atau navigasi di sini */}
    </div>
  );
};

export default Home;
