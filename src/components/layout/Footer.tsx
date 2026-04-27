
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 dark:bg-slate-950 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <ShoppingBag className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-50">DealSmart</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
              Your AI-powered shopping assistant. Discover, compare, and save on the best live deals across all major e-commerce platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors">Facebook</a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors">Github</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/explore" className="text-slate-500 hover:text-brand-600 transition-colors">Explore Deals</Link></li>
              <li><Link to="/compare" className="text-slate-500 hover:text-brand-600 transition-colors">Compare Prices</Link></li>
              <li><Link to="/chatbot" className="text-slate-500 hover:text-brand-600 transition-colors">AI Assistant</Link></li>
              <li><Link to="/alerts" className="text-slate-500 hover:text-brand-600 transition-colors">Deal Alerts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Stay Updated</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Get the best deals delivered to your inbox.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-slate-50 dark:bg-slate-900 dark:border-slate-800" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2026 DealSmart Inc. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>Made with AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
