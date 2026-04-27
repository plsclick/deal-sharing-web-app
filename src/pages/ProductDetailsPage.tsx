import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Bell, ShieldCheck, Sparkles, AlertTriangle, ChevronRight, TrendingDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card, CardContent } from "../components/ui/Card";

export function ProductDetailsPage() {
  useParams();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6 gap-2">
          <Link to="/explore" className="hover:text-brand-600 flex items-center gap-1"><ArrowLeft size={14} /> Back to Deals</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-300 font-medium">Electronics</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-300 font-medium truncate">Sony WH-1000XM5</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Images & AI Analysis */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex items-center justify-center relative">
              <Badge className="absolute top-4 left-4 bg-red-500 text-white border-none shadow-sm text-sm px-3 py-1">23% OFF</Badge>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-950 text-slate-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-900/30"><Heart size={18} /></Button>
                <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-slate-950 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"><Share2 size={18} /></Button>
              </div>
              <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80" alt="Product" className="w-full max-w-md mix-blend-multiply dark:mix-blend-normal" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`bg-white dark:bg-slate-900 rounded-lg border ${i === 1 ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-200 dark:border-slate-800'} aspect-square p-2 cursor-pointer hover:border-brand-300 dark:hover:border-brand-700 transition-colors`}>
                  <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80" alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
              ))}
            </div>

            {/* AI Deal Analysis */}
            <Card className="border-brand-200 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/10 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={80} />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-brand-700 dark:text-brand-400 font-semibold mb-4">
                  <Sparkles size={20} /> AI Deal Analysis
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-1.5 rounded-full mt-0.5"><ShieldCheck size={16} /></div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">Excellent Deal (Buy Now)</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">This price is in the lowest 10% we've seen in the last 6 months. It's unlikely to drop further soon.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 p-1.5 rounded-full mt-0.5"><AlertTriangle size={16} /></div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">Low Stock Warning</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">This item is selling 3x faster than normal across platforms.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Product Info & Pricing */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">Sony</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="flex items-center text-amber-500 text-sm font-medium">★ 4.8 <span className="text-slate-400 font-normal ml-1">(2,451 reviews)</span></span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 leading-tight mb-4">
                Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones
              </h1>
              
              <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">₹22,990</span>
                      <span className="text-lg text-slate-400 line-through">₹29,990</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1 flex items-center"><TrendingDown size={14} className="mr-1" /> ₹7,000 savings</p>
                  </div>
                  <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border-none px-3 py-1">Amazon</Badge>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Button className="w-full h-12 text-base">Buy Now on Amazon</Button>
                  <Button variant="outline" className="w-full h-12 text-base border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    <Bell className="mr-2 h-4 w-4" /> Set Price Drop Alert
                  </Button>
                </div>
              </div>
            </div>

            {/* Price Comparison Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex justify-between items-center">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Compare Prices</h3>
                <Link to="/compare" className="text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium flex items-center">Detailed view <ChevronRight size={16} /></Link>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                <div className="p-4 flex items-center justify-between bg-green-50/30 dark:bg-green-900/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center font-bold text-orange-500 text-xs">AMZ</div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Amazon</p>
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center"><ShieldCheck size={12} className="mr-0.5" /> Best Deal</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-slate-900 dark:text-slate-50">₹22,990</p>
                    <a href="#" className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline">Go to Store</a>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center font-bold text-blue-500 text-xs">FLK</div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Flipkart</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Standard Price</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-slate-900 dark:text-slate-50">₹24,499</p>
                    <a href="#" className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline">Go to Store</a>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center font-bold text-teal-600 text-xs">CMA</div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">Croma</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Out of Stock</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-slate-900 dark:text-slate-50">₹26,990</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price History Chart Placeholder */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Price History (3 Months)</h3>
              <div className="h-40 w-full flex items-end gap-1 relative border-b border-l border-slate-200 dark:border-slate-700 pl-2 pb-2">
                {/* Y-axis labels */}
                <div className="absolute left-[-2rem] top-0 text-[10px] text-slate-400">30k</div>
                <div className="absolute left-[-2rem] bottom-0 text-[10px] text-slate-400">20k</div>
                
                {/* Fake Chart Bars */}
                {Array.from({length: 30}).map((_, i) => (
                  <div key={i} className="flex-1 bg-brand-100 dark:bg-brand-900/30 hover:bg-brand-500 dark:hover:bg-brand-500 transition-colors rounded-t-sm" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-medium">
                <span>Jan 1</span>
                <span>Today</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
