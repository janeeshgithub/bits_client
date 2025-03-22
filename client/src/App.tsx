import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#030303] overflow-hidden">
        <Navbar />
        <main className="h-screen">
          {/* <Routes> */}
            {/* <Route path="/" element={<Home/>} /> */}
          {/* </Routes> */}
        </main>

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4f46e5]/10 via-transparent to-[#06b6d4]/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
        </div>
      </div>
    </Router>
  );
};

export default App;