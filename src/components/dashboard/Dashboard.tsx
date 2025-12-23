import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Dashboard = () => {
  return (
    <div className="flex h-screen w-full bg-background-dark text-white font-display overflow-hidden selection:bg-primary selection:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-background-dark scroll-smooth">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
            {/* Headline Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-white text-3xl font-bold tracking-tight">
                  Total Net Worth
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Aggregated across all connected wallets
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs font-medium text-text-muted hover:text-white px-3 py-1 rounded-full border border-border-dark bg-card-dark transition-colors">
                  Last 24h
                </button>
                <button className="text-xs font-medium text-white px-3 py-1 rounded-full bg-primary/20 border border-primary transition-colors">
                  Last 7d
                </button>
                <button className="text-xs font-medium text-text-muted hover:text-white px-3 py-1 rounded-full border border-border-dark bg-card-dark transition-colors">
                  Last 30d
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-card-dark border border-border-dark hover:border-primary/50 transition-colors group">
                <div className="flex justify-between items-start">
                  <p className="text-text-muted text-sm font-medium">
                    Total Balance (USD)
                  </p>
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded text-[20px]">
                    account_balance
                  </span>
                </div>
                <p className="text-white text-2xl font-bold tracking-tight mt-2">
                  $124,592.31
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-success text-[16px]">
                    trending_up
                  </span>
                  <p className="text-success text-xs font-medium">+5.2%</p>
                  <p className="text-text-muted text-xs ml-1">vs yesterday</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-card-dark border border-border-dark hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start">
                  <p className="text-text-muted text-sm font-medium">
                    Total Balance (ETH)
                  </p>
                  <span className="material-symbols-outlined text-[#627eea] bg-[#627eea]/10 p-1 rounded text-[20px]">
                    currency_bitcoin
                  </span>
                </div>
                <p className="text-white text-2xl font-bold tracking-tight mt-2">
                  64.2 ETH
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-success text-[16px]">
                    trending_up
                  </span>
                  <p className="text-success text-xs font-medium">+3.1%</p>
                  <p className="text-text-muted text-xs ml-1">vs yesterday</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-card-dark border border-border-dark hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start">
                  <p className="text-text-muted text-sm font-medium">
                    24h Profit/Loss
                  </p>
                  <span className="material-symbols-outlined text-success bg-success/10 p-1 rounded text-[20px]">
                    monitoring
                  </span>
                </div>
                <p className="text-white text-2xl font-bold tracking-tight mt-2">
                  +$6,231.50
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-success text-[16px]">
                    trending_up
                  </span>
                  <p className="text-success text-xs font-medium">+5.2%</p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col gap-2 rounded-xl p-5 bg-card-dark border border-border-dark hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start">
                  <p className="text-text-muted text-sm font-medium">
                    Avg Gas (Gwei)
                  </p>
                  <span className="material-symbols-outlined text-danger bg-danger/10 p-1 rounded text-[20px]">
                    local_gas_station
                  </span>
                </div>
                <p className="text-white text-2xl font-bold tracking-tight mt-2">
                  12
                </p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-success text-[16px]">
                    arrow_downward
                  </span>
                  <p className="text-success text-xs font-medium">-2.1%</p>
                  <p className="text-text-muted text-xs ml-1">Low congestion</p>
                </div>
              </div>
            </div>

            {/* Main Chart & Asset Allocation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart Area */}
              <div className="lg:col-span-2 rounded-xl bg-card-dark border border-border-dark p-6 relative overflow-hidden">
                {/* Gradient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      Portfolio Performance
                    </h3>
                    <p className="text-text-muted text-xs">
                      Visualized historical data
                    </p>
                  </div>
                  <div className="flex bg-[#121118] rounded-lg p-1">
                    <button className="px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold">
                      1D
                    </button>
                    <button className="px-3 py-1 rounded text-text-muted hover:text-white text-xs font-medium transition-colors">
                      1W
                    </button>
                    <button className="px-3 py-1 rounded text-text-muted hover:text-white text-xs font-medium transition-colors">
                      1M
                    </button>
                    <button className="px-3 py-1 rounded text-text-muted hover:text-white text-xs font-medium transition-colors">
                      1Y
                    </button>
                  </div>
                </div>
                <div className="w-full h-[280px]">
                  <svg
                    className="w-full h-full"
                    data-alt="Line chart showing portfolio value increase over time with a purple gradient fill"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 478 150"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="chartGradient"
                        x1={236}
                        x2={236}
                        y1={20}
                        y2={150}
                      >
                        <stop stopColor="#3713ec" stopOpacity="0.4" />
                        <stop offset={1} stopColor="#3713ec" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 110 C40 110 40 50 80 50 C120 50 120 90 160 90 C200 90 200 40 240 40 C280 40 280 100 320 100 C360 100 360 20 400 20 C440 20 440 80 478 80 V150 H0 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0 110 C40 110 40 50 80 50 C120 50 120 90 160 90 C200 90 200 40 240 40 C280 40 280 100 320 100 C360 100 360 20 400 20 C440 20 440 80 478 80"
                      stroke="#3713ec"
                      strokeLinecap="round"
                      strokeWidth={3}
                    />
                  </svg>
                </div>
                <div className="flex justify-between mt-2 px-2">
                  <p className="text-text-muted text-xs">00:00</p>
                  <p className="text-text-muted text-xs">04:00</p>
                  <p className="text-text-muted text-xs">08:00</p>
                  <p className="text-text-muted text-xs">12:00</p>
                  <p className="text-text-muted text-xs">16:00</p>
                  <p className="text-text-muted text-xs">20:00</p>
                  <p className="text-text-muted text-xs">23:59</p>
                </div>
              </div>

              {/* Asset Allocation */}
              <div className="rounded-xl bg-card-dark border border-border-dark p-6 flex flex-col">
                <h3 className="text-white text-lg font-semibold mb-6">
                  Asset Allocation
                </h3>
                <div className="flex flex-col items-center justify-center flex-1 gap-8">
                  {/* CSS-only Donut Chart */}
                  <div
                    className="relative size-48 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#3713ec 0% 55%, #0bda6c 55% 80%, #fa6938 80% 90%, #a19db9 90% 100%)"
                    }}
                  >
                    <div className="absolute inset-4 bg-card-dark rounded-full flex items-center justify-center flex-col">
                      <p className="text-text-muted text-xs">Dominance</p>
                      <p className="text-white text-2xl font-bold">ETH</p>
                      <p className="text-primary text-sm font-bold">55%</p>
                    </div>
                  </div>
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-sm text-white">Ethereum (ETH)</span>
                      </div>
                      <span className="text-sm font-medium text-white">55%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-success" />
                        <span className="text-sm text-white">USDC</span>
                      </div>
                      <span className="text-sm font-medium text-white">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-danger" />
                        <span className="text-sm text-white">Bitcoin (WBTC)</span>
                      </div>
                      <span className="text-sm font-medium text-white">10%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-text-muted" />
                        <span className="text-sm text-white">Others</span>
                      </div>
                      <span className="text-sm font-medium text-white">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Watchlist & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Token Watchlist */}
              <div className="lg:col-span-2 rounded-xl bg-card-dark border border-border-dark flex flex-col overflow-hidden">
                <div className="p-6 border-b border-border-dark flex justify-between items-center">
                  <h3 className="text-white text-lg font-semibold">
                    Token Watchlist
                  </h3>
                  <button className="text-primary text-sm font-medium hover:text-primary/80">
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#121118] text-text-muted text-xs uppercase font-medium">
                      <tr>
                        <th className="px-6 py-4">Asset</th>
                        <th className="px-6 py-4 text-right">Price</th>
                        <th className="px-6 py-4 text-right">Balance</th>
                        <th className="px-6 py-4 text-right">Value</th>
                        <th className="px-6 py-4 text-right">24h Change</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-white divide-y divide-border-dark">
                      <tr className="hover:bg-primary/5 transition-colors cursor-pointer group">
                        <td className="px-6 py-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-[10px] font-bold">
                            ETH
                          </div>
                          <div>
                            <p className="font-bold">Ethereum</p>
                            <p className="text-xs text-text-muted">ETH</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          $1,940.23
                        </td>
                        <td className="px-6 py-4 text-right text-text-muted">
                          32.5 ETH
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          $63,057.47
                        </td>
                        <td className="px-6 py-4 text-right text-success">
                          +4.23%
                        </td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors cursor-pointer group">
                        <td className="px-6 py-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-[10px] font-bold">
                            BTC
                          </div>
                          <div>
                            <p className="font-bold">Bitcoin</p>
                            <p className="text-xs text-text-muted">WBTC</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          $29,321.00
                        </td>
                        <td className="px-6 py-4 text-right text-text-muted">
                          0.45 WBTC
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          $13,194.45
                        </td>
                        <td className="px-6 py-4 text-right text-danger">
                          -1.05%
                        </td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors cursor-pointer group">
                        <td className="px-6 py-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold">
                            UNI
                          </div>
                          <div>
                            <p className="font-bold">Uniswap</p>
                            <p className="text-xs text-text-muted">UNI</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          $5.43
                        </td>
                        <td className="px-6 py-4 text-right text-text-muted">
                            2,500 UNI
                        </td>
                        <td className="px-6 py-4 text-right font-medium">
                          $13,575.00
                        </td>
                        <td className="px-6 py-4 text-right text-success">
                          +8.12%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-xl bg-card-dark border border-border-dark flex flex-col">
                <div className="p-6 border-b border-border-dark flex justify-between items-center">
                  <h3 className="text-white text-lg font-semibold">
                    Recent Activity
                  </h3>
                  <button className="text-primary text-sm font-medium hover:text-primary/80">
                    All
                  </button>
                </div>
                <div className="flex flex-col p-4 gap-4 overflow-y-auto max-h-[300px]">
                  {/* Item 1 */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#121118] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-success/10 flex items-center justify-center text-success">
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_downward
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white text-sm font-semibold">
                          Received
                        </p>
                        <p className="text-text-muted text-xs">
                          From: 0x8a...2b91
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-success text-sm font-bold">+ 2.5 ETH</p>
                      <p className="text-text-muted text-xs">2 mins ago</p>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#121118] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">
                          swap_calls
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white text-sm font-semibold">
                          Swapped
                        </p>
                        <p className="text-text-muted text-xs">Uniswap V3</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-white text-sm font-bold">500 USDC</p>
                      <p className="text-text-muted text-xs">2h ago</p>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#121118] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-danger/10 flex items-center justify-center text-danger">
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_upward
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white text-sm font-semibold">Sent</p>
                        <p className="text-text-muted text-xs">To: 0x3d...11aa</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-white text-sm font-bold">- 100 UNI</p>
                      <p className="text-text-muted text-xs">5h ago</p>
                    </div>
                  </div>
                  {/* Item 4 */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#121118] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-text-muted/10 flex items-center justify-center text-text-muted">
                        <span className="material-symbols-outlined text-[20px]">
                          contract
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white text-sm font-semibold">
                          Approve
                        </p>
                        <p className="text-text-muted text-xs">Opensea</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-white text-sm font-bold">0 ETH</p>
                      <p className="text-text-muted text-xs">1d ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
