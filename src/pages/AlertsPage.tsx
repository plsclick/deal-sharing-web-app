import { Bell, TrendingDown, Clock, Settings, Trash2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export function AlertsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Deal Alerts</h1>
            <p className="text-slate-500 dark:text-slate-400">Manage your price drop notifications and AI alerts.</p>
          </div>
          <Button variant="outline" className="bg-white dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300">
            <Settings className="mr-2 h-4 w-4" /> Alert Settings
          </Button>
        </div>

        {/* Notifications list */}
        <div className="space-y-4 mb-12">
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">New Alerts (2)</h3>
          
          <Card className="border-brand-200 dark:border-brand-800/50 bg-brand-50/50 dark:bg-brand-900/10 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500"></div>
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 border border-brand-100 dark:border-brand-800">
                <TrendingDown className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 border-none px-2 py-0">Price Drop Alert</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center"><Clock size={12} className="mr-1" /> 10 mins ago</span>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Sony WH-1000XM5 hit your target price!</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  The price just dropped to <strong className="text-slate-900 dark:text-slate-50">₹22,990</strong> on Amazon (below your ₹24,000 target).
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <Button className="w-full sm:w-auto h-10 px-6">Buy Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 border border-amber-100 dark:border-amber-800/50">
                <Bell className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 px-2 py-0">Flash Sale</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center"><Clock size={12} className="mr-1" /> 2 hours ago</span>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Apple iPhone 15 Sale Started</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Flipkart Big Saving Days has started. The iPhone 15 is currently at ₹65,999.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                <Button variant="outline" className="w-full sm:w-auto h-10 dark:border-slate-700 dark:text-slate-300">View Deal</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Trackers */}
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Active Price Trackers</h3>
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { name: "Sony WH-1000XM5", current: "₹22,990", target: "₹24,000", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100&q=80", status: "reached" },
                { name: "MacBook Air M2", current: "₹99,990", target: "₹85,000", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&q=80", status: "tracking" },
                { name: "Dyson V15 Detect", current: "₹54,900", target: "₹50,000", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=100&q=80", status: "tracking" }
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-1.5 flex-shrink-0">
                      <img src={item.image} alt="Product" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">{item.name}</h4>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Current: <strong className="text-slate-900 dark:text-slate-50">{item.current}</strong></span>
                        <span className="text-slate-300 dark:text-slate-700">|</span>
                        <span className="text-slate-500 dark:text-slate-400">Target: <strong className="text-brand-600 dark:text-brand-400">{item.target}</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {item.status === 'reached' ? (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 border-none">Target Reached</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400">Tracking</Badge>
                    )}
                    <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-auto sm:ml-0">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
