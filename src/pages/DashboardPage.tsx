import { useState, useEffect } from "react";
import { Heart, Bell, Clock, Settings, TrendingDown, User as UserIcon, Sparkles, Loader2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { fetchDealsFromGemini, type Deal } from "../lib/geminiDeals";

export function DashboardPage() {
  const [recentDeals, setRecentDeals] = useState<Deal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardDeals() {
      try {
        const deals = await fetchDealsFromGemini(3);
        setRecentDeals(deals);
      } catch (err) {
        console.error("Dashboard deals error:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDashboardDeals();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-2">
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-lg">JS</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-slate-50">John Smith</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Pro Member</p>
              </div>
            </div>

            <nav className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 shadow-sm space-y-1">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400">
                <UserIcon size={18} /> Overview
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                <Heart size={18} /> Wishlist
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                <Bell size={18} /> Price Alerts
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                <Clock size={18} /> Browsing History
              </button>
              <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                  <Settings size={18} /> Settings
                </button>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Welcome back, John!</h1>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-white dark:bg-slate-900 border-none shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Saved</p>
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg"><TrendingDown size={16} /></div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-50">₹12,450</h3>
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">+₹2,000 this month</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-none shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Alerts</p>
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg"><Bell size={16} /></div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-50">8</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-1">2 triggered recently</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-none shadow-sm shadow-slate-200/50 dark:shadow-slate-900/50">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saved Items</p>
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg"><Heart size={16} /></div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-50">24</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-1">Across 4 platforms</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Price Drops */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">Recent Price Drops on Wishlist</h2>
                <a href="#" className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline">View all</a>
              </div>
              <div className="space-y-4">
                {isLoading ? (
                  <div className="flex justify-center p-8">
                    <Loader2 className="h-6 w-6 animate-spin text-brand-500" />
                  </div>
                ) : recentDeals.length > 0 ? (
                  recentDeals.map((deal) => (
                    <Card key={deal.id} className="overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <div className="p-4 flex gap-4 items-center">
                        <div className="flex-1 min-w-0">
                          <Badge className="mb-2 bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-none px-1.5 py-0">-{deal.discount} drop</Badge>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 truncate">{deal.title}</h4>
                          <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{deal.platform} • Target price: {deal.dealPrice}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{deal.dealPrice}</p>
                          <p className="text-sm text-slate-400 line-through">{deal.originalPrice}</p>
                          <Button size="sm" className="mt-2 h-8">Buy Now</Button>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <p className="text-slate-500">No recent drops found.</p>
                )}
              </div>
            </div>

            {/* AI Recommendations */}
            <Card className="border-brand-200 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/10 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 font-semibold text-brand-700 dark:text-brand-400 mb-4">
                  <Sparkles size={18} /> AI Recommendations
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-center p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm hover:border-brand-200 dark:hover:border-brand-700 cursor-pointer transition-colors">
                    <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&q=80" className="w-12 h-12 rounded object-cover" alt="Rec" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-1">OnePlus Nord Buds 2</p>
                      <p className="text-xs text-brand-600 dark:text-brand-400">At lowest price in 30 days</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm hover:border-brand-200 dark:hover:border-brand-700 cursor-pointer transition-colors">
                    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&q=80" className="w-12 h-12 rounded object-cover" alt="Rec" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-1">Polaroid Camera</p>
                      <p className="text-xs text-brand-600 dark:text-brand-400">You tracked similar items</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
