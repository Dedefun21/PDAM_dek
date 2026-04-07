"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const menuItems = [
    { href: "/admin/dashboard", icon: "📊", label: "Dashboard" },
    { href: "/admin/users", icon: "👥", label: "Users" },
    { href: "/admin/products", icon: "📦", label: "Products" },
    { href: "/admin/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-linearto-r from-gray-900 to-gray-800 text-white p-4 shadow-lg ">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-lg">
            🎛️
          </div>
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-2xl"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Overlay Mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full bg-linear-to-b from-gray-900 to-gray-800 text-white
          transform transition-all duration-300 shadow-2xl
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${desktopCollapsed ? "md:w-20" : "md:w-64"}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${desktopCollapsed ? "md:justify-center md:w-full" : ""}`}>
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-xl">
              🎛️
            </div>
            {!desktopCollapsed && (
              <div>
                <h2 className="font-bold text-lg">Admin Panel</h2>
                <p className="text-xs text-gray-400">Management System</p>
              </div>
            )}
          </div>
          
          {/* Desktop Toggle Button */}
          <button
            onClick={() => setDesktopCollapsed(!desktopCollapsed)}
            className="hidden md:block p-2 hover:bg-gray-700 rounded-lg transition-colors text-xl"
          >
            {desktopCollapsed ? "›" : "‹"}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 p-3 rounded-xl
                  hover:bg-gray-700/50 hover:shadow-md
                  transition-all duration-200
                  group relative
                  ${desktopCollapsed ? "md:justify-center" : ""}
                `}
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                {!desktopCollapsed && (
                  <span className="font-medium group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                )}
                
                {/* Tooltip untuk mode collapsed */}
                {desktopCollapsed && (
                  <div className="hidden md:block absolute left-full ml-2 px-3 py-2 bg-gray-800 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                )}
                
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl transition-all" />
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700/50">
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 ${desktopCollapsed ? "md:justify-center" : ""}`}>
            <div className="w-8 h-8 bg-linear-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
              A
            </div>
            {!desktopCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-xs text-gray-400 truncate">admin@example.com</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className={`hidden md:block transition-all duration-300 ${desktopCollapsed ? "md:w-20" : "md:w-64"}`} />
    </>
  );
}