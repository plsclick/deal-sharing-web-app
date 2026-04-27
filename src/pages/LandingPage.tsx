import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

const LOGOS = [
  { name: "Amazon", color: "text-orange-500" },
  { name: "Flipkart", color: "text-blue-500" },
  { name: "Myntra", color: "text-pink-500" },
  { name: "Meesho", color: "text-purple-500" },
  { name: "Ajio", color: "text-teal-600" },
];

const TRENDING_DEALS = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    originalPrice: "₹29,990",
    dealPrice: "₹22,990",
    discount: "23%",
    platform: "Amazon",
    rating: 4.8
  },
  {
    id: 2,
    title: "Apple iPhone 15 (128GB) - Black",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
    originalPrice: "₹79,900",
    dealPrice: "₹65,999",
    discount: "17%",
    platform: "Flipkart",
    rating: 4.9
  },
  {
    id: 3,
    title: "Nike Air Max 270 Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    originalPrice: "₹12,995",
    dealPrice: "₹7,797",
    discount: "40%",
    platform: "Myntra",
    rating: 4.7
  },
  {
    id: 4,
    title: "Samsung 4K Smart TV 55 inch",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&q=80",
    originalPrice: "₹64,900",
    dealPrice: "₹42,990",
    discount: "33%",
    platform: "Amazon",
    rating: 4.6
  }
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 dark:bg-slate-950 dark:border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/50 via-white to-white dark:from-brand-900/20 dark:via-slate-950 dark:to-slate-950" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-6 px-3 py-1 bg-brand-50 text-brand-700 border-brand-200">
                <Sparkles className="h-3 w-3 mr-1" /> AI-Powered Shopping Assistant
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 leading-[1.1]">
                Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">Best Deals</span> Before Anyone Else
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our AI continuously tracks live prices across Amazon, Flipkart, Myntra, and more to ensure you never overpay again. Set alerts, compare platforms, and chat with our smart assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/explore">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-brand-500/25 shadow-lg">
                    Explore Deals <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-white dark:bg-slate-900 dark:border-slate-800">
                    <Sparkles className="mr-2 h-4 w-4 text-brand-500" /> Ask AI
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-500 mb-4">Tracking prices from your favorite stores:</p>
                <div className="flex flex-wrap gap-6 items-center opacity-70">
                  {LOGOS.map((logo) => (
                    <span key={logo.name} className={`font-bold text-xl ${logo.color}`}>{logo.name}</span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hero Interactive Element (AI Chat Preview) */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-indigo-50 dark:from-brand-900/30 dark:to-indigo-900/30 rounded-[2rem] transform rotate-3 scale-105" />
              <Card className="relative z-10 border-slate-200/60 dark:border-slate-800/60 shadow-2xl shadow-brand-500/10 rounded-[2rem] overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">DealSmart AI</h3>
                    <p className="text-xs text-brand-600 font-medium flex items-center gap-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                      </span>
                      Online
                    </p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-600 text-xs">You</div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-slate-700">
                      Find me the cheapest noise-cancelling earbuds under ₹3,000.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-brand-600" />
                    </div>
                    <div className="bg-brand-50 dark:bg-brand-900/20 rounded-2xl rounded-tr-none px-4 py-3 text-sm text-slate-800 dark:text-slate-200 space-y-3 w-full">
                      <p>I found a great deal right now! The <strong>OnePlus Nord Buds 2</strong> just dropped in price.</p>
                      <Card className="bg-white dark:bg-slate-950 border-brand-100 dark:border-slate-800 shadow-sm p-3">
                        <div className="flex gap-3">
                          <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&q=80" className="h-16 w-16 object-cover rounded-lg" alt="Earbuds" />
                          <div>
                            <h4 className="font-medium text-sm">OnePlus Nord Buds 2</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-bold text-slate-900 dark:text-slate-50">₹2,499</span>
                              <span className="text-xs line-through text-slate-400">₹3,299</span>
                            </div>
                            <Badge className="mt-1 bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-none px-1.5 py-0">Amazon</Badge>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                  <div className="h-10 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 flex items-center px-4 text-sm text-slate-400">
                    Type a message...
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">How DealSmart Works</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">We use advanced AI to make sure you never miss a price drop again.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-900 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-slate-100">Live Deal Aggregation</h3>
                <p className="text-slate-500 dark:text-slate-400">We continuously scan millions of products across top retailers to find hidden discounts and flash sales.</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-900 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-slate-100">Smart Price Alerts</h3>
                <p className="text-slate-500 dark:text-slate-400">Set your target price and let our system notify you instantly when the product hits your desired budget.</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-900 border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-14 h-14 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-slate-100">AI Verification</h3>
                <p className="text-slate-500 dark:text-slate-400">Our AI checks price histories to tell you if it's a genuine discount or a fake markup trick.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Deals */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Trending Live Deals</h2>
              <p className="text-slate-500 dark:text-slate-400">The most popular discounts happening right now.</p>
            </div>
            <Link to="/explore">
              <Button variant="ghost" className="hidden sm:flex text-brand-600 hover:text-brand-700 hover:bg-brand-50 dark:hover:bg-brand-900/20">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRENDING_DEALS.map((deal) => (
              <Link to={`/product/${deal.id}`} key={deal.id}>
                <Card className="h-full overflow-hidden group cursor-pointer border-slate-200/60 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700">
                  <div className="relative aspect-square bg-white p-4">
                    <img src={deal.image} alt={deal.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 dark:mix-blend-multiply" />
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {deal.discount} OFF
                    </div>
                  </div>
                  <CardContent className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider bg-white dark:bg-slate-950 dark:text-slate-300">{deal.platform}</Badge>
                      <div className="flex items-center text-amber-500 text-xs font-medium">
                        ★ {deal.rating}
                      </div>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {deal.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-slate-900 dark:text-slate-50">{deal.dealPrice}</span>
                      <span className="text-sm text-slate-400 line-through">{deal.originalPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-900 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">Stop Overpaying for Your Favorite Products</h2>
          <p className="text-lg text-slate-300 mb-10">
            Join thousands of smart shoppers who use DealSmart to save money every day. It's free, intelligent, and easy to use.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base bg-brand-500 hover:bg-brand-600 border-none shadow-xl shadow-brand-500/20">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
