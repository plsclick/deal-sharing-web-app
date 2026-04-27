import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { ExplorePage } from './pages/ExplorePage';
import { ChatbotPage } from './pages/ChatbotPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { ComparePage } from './pages/ComparePage';
import { AlertsPage } from './pages/AlertsPage';

// Helper component to hide layout on specific pages
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideLayout = location.pathname === '/auth' || location.pathname === '/chatbot';
  
  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

import { ThemeProvider } from './components/theme-provider';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="dealsmart-theme">
      <AuthProvider>
        <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </Layout>
    </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
