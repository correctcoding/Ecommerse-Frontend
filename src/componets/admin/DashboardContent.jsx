import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Settings, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Truck, 
  Activity,
  MoreHorizontal
} from 'lucide-react';

const DashboardContent = () => {
  // Animation Config
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const metrics = [
    { title: 'Total Sales', value: '$124,592', change: '+12%', icon: DollarSign, color: 'orange', trend: 'up' },
    { title: 'Total Users', value: '8,241', change: '+3%', icon: Users, color: 'blue', trend: 'up' },
    { title: 'Total Orders', value: '1,482', change: '-2%', icon: Truck, color: 'purple', trend: 'down' },
    { title: 'Active Visitors', value: '420', change: 'LIVE', icon: Activity, color: 'emerald', trend: 'live' },
  ];

  return (
    // ml-64 ডেস্কটপে থাকবে, মোবাইলে (sm/md) ml-0 হয়ে যাবে
    <main className="lg:ml-64 min-h-screen bg-slate-50/50 dark:bg-slate-950 transition-all duration-300">
      
      {/* --- TopAppBar --- */}
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md flex justify-between items-center px-4 lg:px-8 py-4 shadow-sm border-b border-slate-100 dark:border-slate-800">
        
        {/* Search - মোবাইলে উইডথ বাড়ানো হয়েছে */}
        <div className="flex items-center gap-4 flex-1 lg:flex-none lg:w-1/3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-full py-2 pl-11 pr-4 focus:ring-2 focus:ring-orange-500/20 text-sm outline-none transition-all" 
              placeholder="Search..." 
              type="text"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-5 ml-4">
          <div className="flex items-center gap-1">
            <IconButton icon={Bell} badge />
            <IconButton icon={Settings} className="hidden sm:flex" />
          </div>
          
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1 lg:mx-2 hidden sm:block"></div>
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Alex Rivera</p>
              <p className="text-[11px] text-slate-500 font-medium">Head Admin</p>
            </div>
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-orange-100 p-0.5">
              <img className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=alex" alt="profile" />
            </div>
          </div>
        </div>
      </header>

      {/* --- Dashboard Content Body --- */}
      <div className="p-4 lg:p-8 space-y-8 lg:space-y-10">
        
        {/* Metric Cards - Grid Responsive করা হয়েছে */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-5 lg:p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/20 flex items-center justify-center text-${item.color}-600`}>
                    <Icon size={22} />
                  </div>
                  <div className={`px-2 py-1 rounded-lg text-[10px] lg:text-xs font-bold flex items-center gap-1 ${
                    item.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 
                    item.trend === 'down' ? 'text-red-600 bg-red-50' : 'text-emerald-500 animate-pulse'
                  }`}>
                    {item.trend === 'up' && <TrendingUp size={12} />}
                    {item.trend === 'down' && <TrendingDown size={12} />}
                    {item.change}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-slate-500 text-xs lg:text-sm font-medium">{item.title}</p>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mt-1">{item.value}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Sales Revenue</h4>
                <p className="text-sm text-slate-500 font-medium">Monthly performance insight</p>
              </div>
              <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1 w-full sm:w-auto">
                {['30D', '6M', '1Y'].map(t => (
                  <button key={t} className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${t === '30D' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500'}`}>{t}</button>
                ))}
              </div>
            </div>
            <div className="h-48 lg:h-64 relative">
              {/* Simple Animated Path Placeholder */}
              <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                  d="M0,35 Q10,25 20,30 T40,15 T60,25 T80,10 T100,5"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Top Categories</h4>
            <div className="space-y-6">
              <CategoryProgress label="Electronics" percent="42%" color="bg-orange-500" />
              <CategoryProgress label="Fashion" percent="28%" color="bg-blue-500" />
              <CategoryProgress label="Home Decor" percent="18%" color="bg-purple-500" />
            </div>
          </motion.div>
        </section>

        {/* Table Section */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
            <h4 className="font-bold text-slate-900 dark:text-white">Recent Orders</h4>
            <button className="text-xs font-bold text-orange-600 hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-400 uppercase text-[10px] font-bold tracking-widest">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-bold">#924{i}</td>
                    <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400">User Name</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold">DELIVERED</span>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-400">
                      <MoreHorizontal size={18} className="ml-auto cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

// Helper Components
const IconButton = ({ icon: Icon, badge, className = "" }) => (
  <button className={`p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl relative transition-all active:scale-90 ${className}`}>
    <Icon size={20} />
    {badge && <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-white dark:border-black"></span>}
  </button>
);

const CategoryProgress = ({ label, percent, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold">
      <span className="text-slate-600 dark:text-slate-400">{label}</span>
      <span className="text-slate-900 dark:text-white">{percent}</span>
    </div>
    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }} 
        whileInView={{ width: percent }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`} 
      />
    </div>
  </div>
);

export default DashboardContent;