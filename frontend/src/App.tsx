import './App.css';
import NotificatinoButton from './components/NotificationButton';
import Header from './components/Header';
import SalesCard from './components/SalesCard';

function App() {
  return (
    <>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Header />
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
