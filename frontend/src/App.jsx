
import { Outlet } from 'react-router-dom';

import Footer from './components/layout/footer/footer.jsx';
import MobileBottomNav from './components/layout/mobileBottomNav/mobileBottomNav.jsx';
import Navbar from './components/layout/navbar/navbar.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <MobileBottomNav />
    </div>
  );
}

export default App;
