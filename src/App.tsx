import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Story from './pages/Story';
import ShopRedirect from './pages/ShopRedirect';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7] text-[#3A3836]">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pages/talimatlar" element={<Instructions />} />
                        <Route path="/hikayemiz" element={<Story />} />
                        <Route path="/magaza" element={<ShopRedirect />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
