
import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Filter, Download, Printer } from 'lucide-react';
import TopNavBar from '../../componets/admin/TopNavBar';
import InventoryTable from '../../componets/admin/productManage/InventoryTable';
import StatCard from '../../componets/admin/productManage/StatCard';
// import TopNavBar from './TopNavBar';
// import StatCard from './StatCard';
// import InventoryTable from './InventoryTable';

const AdminProductManage = () => {
  const products = [
    { name: 'Velocity X1 Runners', brand: 'Nike Performance', sku: 'NK-VX1-2024', price: '129.99', stock: 142, status: 'In Stock', statusColor: 'bg-emerald-100 text-emerald-700', img: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Zenith Sound Hub', brand: 'Kinetic Audio', sku: 'KN-ZH-900', price: '249.00', stock: 8, status: 'Low Stock', statusColor: 'bg-orange-100 text-orange-700', img: 'https://i.pravatar.cc/150?u=2' },
  ];

  return (
    <main className="lg:ml-64 min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-12 transition-all">
      <TopNavBar />
      
      <div className="pt-24 px-4 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Product Inventory</h2>
            <p className="text-slate-500 mt-1">Manage your marketplace catalog and stock levels.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all"
          >
            <PlusCircle size={20} />
            Add New Product
          </motion.button>
        </motion.div>

        {/* Bento Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Products" value="1,284" />
          <StatCard title="Out of Stock" value="12" colorClass="text-red-600" />
          <StatCard title="Low Stock" value="48" colorClass="text-orange-600" />
          <StatCard title="Active Listings" value="1,240" colorClass="text-emerald-600" />
        </div>

        {/* Controls */}
        <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-t-xl flex flex-wrap items-center justify-between gap-4 border-x border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-none focus:ring-2 focus:ring-orange-500/20 text-sm" placeholder="Filter inventory..." type="text"/>
            </div>
            <select className="px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border-none text-sm font-medium text-slate-600 dark:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500/20">
              <option>Stock Status: All</option>
              <option>In Stock</option>
              <option>Low Stock</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-500 hover:text-orange-600 shadow-sm transition-colors border border-slate-100 dark:border-slate-800"><Download size={18} /></button>
            <button className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-500 hover:text-orange-600 shadow-sm transition-colors border border-slate-100 dark:border-slate-800"><Printer size={18} /></button>
          </div>
        </div>

        <InventoryTable products={products} />
      </div>
    </main>
  );
};
export default AdminProductManage