import React from "react";
import { Package, ShoppingCart, TrendingUp } from "lucide-react";

export default function ProductList({ products = [] }) {
  return (
    <div
      className="relative overflow-hidden rounded-[32px] 
        bg-white/40 backdrop-blur-2xl border border-white/60 
        shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
      {/* Header Section */}
      <div className="px-8 pt-8 pb-2">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          Product Overview
        </h3>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-1">
          Performance & Sales
        </p>
      </div>

      <ul className="divide-y divide-gray-100/50 mt-4">
        {products.map(({ id, name, price, sales, category }) => (
          <li
            key={id}
            className="group relative flex items-center justify-between px-8 py-5 
              transition-all duration-500 ease-out hover:bg-white/60">
            {/* Hover Background Accent */}
            <div
              className="absolute inset-y-2 left-2 w-0 group-hover:w-[calc(100%-16px)] 
                bg-gradient-to-r from-emerald-50/60 to-transparent 
                rounded-2xl transition-all duration-500 -z-10"
            />

            <div className="flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center 
                   border border-gray-100 text-[#1B4332] 
                  group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                  {category === "subscription" ? (
                    <Package size={20} strokeWidth={2} />
                  ) : (
                    <ShoppingCart size={20} strokeWidth={2} />
                  )}
                </div>

                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-sm" />
              </div>

              <div className="flex flex-col">
                <h3 className="text-[15px] font-bold text-gray-900 tracking-tight group-hover:text-emerald-900 transition-colors">
                  {name}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] font-black text-emerald-600/70 uppercase tracking-widest">
                    MSRP
                  </span>
                  <span className="text-sm font-bold text-gray-600">
                    $
                    {price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-10">
              {/* Sales Info */}
              <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <TrendingUp size={16} strokeWidth={2.5} />
                  <span className="text-base font-black leading-none">
                    {sales}
                  </span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mt-1">
                  Units Sold
                </p>
              </div>

              <div className="w-28 flex justify-end">
                <span
                  className={`px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300
                    ${
                      category === "subscription"
                        ? "bg-[#1B4332] text-white shadow-md shadow-emerald-900/10 group-hover:bg-emerald-800"
                        : "bg-white border border-gray-200 text-gray-500 group-hover:border-emerald-200 group-hover:text-emerald-700"
                    }`}>
                  {category}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/80 pointer-events-none" />
    </div>
  );
}
