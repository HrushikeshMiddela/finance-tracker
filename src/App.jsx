import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import { FinancialRecordsProvider } from './contexts/financial-record-context'; // Import FinancialRecordsProvider

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Wrap the routes that need access to the financial records context */}
        <FinancialRecordsProvider>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </FinancialRecordsProvider>
      </div>
    </Router>
  );
}

export default App;