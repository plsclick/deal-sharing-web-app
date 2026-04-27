import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";

export function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6 gap-2">
          <Link to="/product/1" className="hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-1"><ArrowLeft size={14} /> Back to Product</Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Compare Prices</h1>
          <p className="text-slate-500 dark:text-slate-400">Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones</p>
        </div>

        {/* AI Recommendation Banner */}
        <Card className="mb-8 border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-900/20 shadow-sm overflow-hidden relative">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-green-100 dark:from-green-900/50 to-transparent pointer-events-none"></div>
          <div className="p-6 flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-800 dark:text-green-400 mb-1">AI Recommendation: Buy on Amazon</h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Amazon currently offers the lowest price (₹22,990) which is 15% below the average market price. They also include free 1-day delivery and a better return policy compared to other platforms.
              </p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-sm">
                Go to Deal <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 w-1/4">
                    <span className="font-semibold text-slate-900 dark:text-slate-50">Features</span>
                  </th>
                  <th className="p-6 border-b border-slate-200 dark:border-slate-800 border-l border-slate-100 dark:border-slate-800 w-1/4 relative bg-green-50/30 dark:bg-green-900/10">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 hover:bg-green-600 border-none px-3 shadow-sm text-xs font-bold whitespace-nowrap">BEST OVERALL</Badge>
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="text-xl font-bold text-orange-500 mb-2">Amazon</div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">₹22,990</div>
                      <div className="text-sm text-slate-400 line-through mb-4">₹29,990</div>
                      <Button className="w-full">Buy Now</Button>
                    </div>
                  </th>
                  <th className="p-6 border-b border-slate-200 dark:border-slate-800 border-l border-slate-100 dark:border-slate-800 w-1/4">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-xl font-bold text-blue-500 mb-2">Flipkart</div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">₹24,499</div>
                      <div className="text-sm text-slate-400 line-through mb-4">₹29,990</div>
                      <Button variant="outline" className="w-full dark:bg-slate-950 dark:border-slate-700">Buy Now</Button>
                    </div>
                  </th>
                  <th className="p-6 border-b border-slate-200 dark:border-slate-800 border-l border-slate-100 dark:border-slate-800 w-1/4">
                    <div className="flex flex-col items-center text-center opacity-60">
                      <div className="text-xl font-bold text-teal-600 mb-2">Croma</div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">₹26,990</div>
                      <div className="text-sm text-slate-400 line-through mb-4">₹29,990</div>
                      <Button variant="outline" className="w-full dark:bg-slate-950 dark:border-slate-700" disabled>Out of Stock</Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-950/30">Availability</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center bg-green-50/10 dark:bg-green-900/5"><Badge variant="success" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">In Stock</Badge></td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center"><Badge variant="success" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">In Stock (Low)</Badge></td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center"><Badge variant="destructive" className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">Out of Stock</Badge></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-950/30">Delivery</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center bg-green-50/10 dark:bg-green-900/5">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Tomorrow</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Free with Prime</div>
                  </td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">3-4 Days</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">₹40 Shipping</div>
                  </td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500">-</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-950/30">Return Policy</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center bg-green-50/10 dark:bg-green-900/5 text-slate-700 dark:text-slate-300">7 Days Replacement</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center text-slate-700 dark:text-slate-300">7 Days Replacement</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center text-slate-700 dark:text-slate-300">15 Days Return</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-950/30">Seller Rating</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center bg-green-50/10 dark:bg-green-900/5">
                    <div className="flex items-center justify-center text-amber-500 font-medium">
                      ★ 4.8 <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">(Appario)</span>
                    </div>
                  </td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center">
                    <div className="flex items-center justify-center text-amber-500 font-medium">
                      ★ 4.5 <span className="text-xs text-slate-400 dark:text-slate-500 ml-1">(SuperComNet)</span>
                    </div>
                  </td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500">-</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-200 bg-slate-50/30 dark:bg-slate-950/30">Bank Offers</td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center bg-green-50/10 dark:bg-green-900/5">
                    <ul className="text-xs text-slate-600 dark:text-slate-400 text-left space-y-1 list-disc pl-4 inline-block">
                      <li>10% off on HDFC CC</li>
                      <li>5% Cashback on Amazon Pay</li>
                    </ul>
                  </td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center">
                    <ul className="text-xs text-slate-600 dark:text-slate-400 text-left space-y-1 list-disc pl-4 inline-block">
                      <li>5% off on Axis Bank CC</li>
                    </ul>
                  </td>
                  <td className="p-4 border-l border-slate-100 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
