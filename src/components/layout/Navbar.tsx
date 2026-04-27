
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Bell, User, Sparkles, LogOut } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../theme-toggle";
import { useAuth } from "../../contexts/AuthContext";

export function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <ShoppingBag className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-50">DealSmart</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/explore" className={`hover:text-brand-600 transition-colors ${location.pathname === '/explore' ? 'text-brand-600' : ''}`}>Explore Deals</Link>
            <Link to="/chatbot" className={`flex items-center gap-1 hover:text-brand-600 transition-colors ${location.pathname === '/chatbot' ? 'text-brand-600' : ''}`}>
              <Sparkles className="h-4 w-4 text-brand-500" />
              Ask AI
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/alerts">
            <Button variant="ghost" size="icon" className="relative text-slate-600 hover:text-slate-900">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
          </Link>
          
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 overflow-hidden">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" className="w-6 h-6 rounded-full" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={logout} className="text-slate-600 hover:text-red-600">
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Link to="/auth" className="hidden sm:block">
              <Button className="rounded-full px-6">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
