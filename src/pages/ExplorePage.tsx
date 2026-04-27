import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, SlidersHorizontal, Loader2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { fetchDealsFromGemini, type Deal } from "../lib/geminiDeals";

export function ExplorePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [deals, setDeals] = useState<Deal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  useEffect(() => {
    loadDeals(activeSearch);
  }, [activeSearch]);

  const loadDeals = async (query: string = "") => {
    setIsLoading(true);
    setError("");
    try {
      const generatedDeals = await fetchDealsFromGemini(12, query);
      setDeals(generatedDeals);
    } catch (err: any) {
      console.error(err);
      setError(`Failed to generate deals: ${err?.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8">
      <div className="container mx-auto px-4">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Explore Deals</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Discover the best discounts across all platforms.</p>
          </div>
          <div className="flex bg-white dark:bg-slate-900 rounded-lg p-1 border border-slate-200 dark:border-slate-800 shadow-sm w-full md:w-auto overflow-x-auto hide-scrollbar">
            {['All Deals', 'Trending', 'Price Drops', 'AI Recommended'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${activeTab === tab.toLowerCase() || (activeTab === 'all' && tab === 'All Deals')
                  ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800'
                  }`}
              >
                {tab === 'AI Recommended' && <Sparkles className="inline-block h-3 w-3 mr-1 text-brand-500" />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <SlidersHorizontal size={18} /> Filters
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-3">AI Search</h4>
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <Input
                      placeholder="Search for anything..."
                      className="text-sm dark:bg-slate-950 flex-1"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit" size="sm" className="px-3" disabled={isLoading}>Search</Button>
                  </form>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Gaming'].map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-brand-600 focus:ring-brand-600 w-4 h-4 cursor-pointer" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-3">Platform</h4>
                  <div className="space-y-2">
                    {['Amazon', 'Flipkart', 'Myntra', 'Meesho'].map(platform => (
                      <label key={platform} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-brand-600 focus:ring-brand-600 w-4 h-4 cursor-pointer" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-3">Price Range</h4>
                  <div className="flex gap-2 items-center">
                    <Input placeholder="Min" className="h-8 text-sm dark:bg-slate-950" />
                    <span className="text-slate-400">-</span>
                    <Input placeholder="Max" className="h-8 text-sm dark:bg-slate-950" />
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Showing {deals.length} deals {activeSearch ? `for "${activeSearch}"` : ""}
              </span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => loadDeals(activeSearch)} disabled={isLoading}>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Find New Deals
                </Button>
                <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
                  Best Deals <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {error && (
              <div className="p-4 mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm rounded-lg flex justify-between items-center">
                <span>{error}</span>
                <Button variant="outline" size="sm" onClick={() => loadDeals(activeSearch)}>Retry</Button>
              </div>
            )}

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                <Loader2 className="h-8 w-8 animate-spin mb-4 text-brand-500" />
                <p>Searching Live Deals...</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {deals.map((deal) => (
                  <Card key={deal.id} className="h-full overflow-hidden group border-slate-200 dark:border-slate-800 flex flex-col">
                    <CardContent className="p-5 flex-1 flex flex-col justify-between bg-white dark:bg-slate-900">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <Badge variant="outline" className="text-[10px] uppercase tracking-wider bg-slate-50 dark:bg-slate-950 dark:text-slate-300">{deal.platform}</Badge>
                          <Badge className="bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 border-none shadow-sm">
                            {deal.discount} OFF
                          </Badge>
                        </div>
                        <Link to={`/product/${deal.id}`}>
                          <h3 className="font-medium text-lg text-slate-900 dark:text-slate-100 leading-tight mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                            {deal.title}
                          </h3>
                        </Link>
                        <div className="flex items-center text-amber-500 text-xs font-medium mb-4">
                          ★ {deal.rating}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-xl font-bold text-slate-900 dark:text-slate-50">{deal.dealPrice}</span>
                          <span className="text-sm text-slate-400 line-through">{deal.originalPrice}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Link to={`/product/${deal.id}`}>
                            <Button className="w-full text-xs h-9">View Deal</Button>
                          </Link>
                          <Link to="/chatbot">
                            <Button variant="outline" className="w-full text-xs h-9 bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800">
                              <Sparkles className="mr-1 h-3 w-3 text-brand-500" /> Ask AI
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="px-8">Load More Deals</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
