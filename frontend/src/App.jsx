import { Outlet } from 'react-router-dom';

import ScrollToTopButton from './components/common/scrollToTopButton/scrollToTopButton.jsx';
import ScrollToTop from './components/common/scrollToTop/scrollToTop.jsx';
import Footer from './components/layout/footer/footer.jsx';
import MobileBottomNav from './components/layout/mobileBottomNav/mobileBottomNav.jsx';
import Navbar from './components/layout/navbar/navbar.jsx';

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      <MobileBottomNav />

      <ScrollToTopButton />
    </div>
  );
}

export default App;
