"use client"

import React, { useState } from 'react';

export default function PDAMDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Data dummy untuk demo
  const userData = {
    name: "lowelo",
    idPelanggan: "PDM-2024-001234",
    alamat: "Jl. suir No. 123, Malang",
    phone: "0812-3456-7890"
  };

  const currentUsage = {
    bulan: "Januari 2026",
    penggunaan: 15,
    biaya: 65000,
    status: "Belum Bayar",
    jatuhTempo: "25 Januari 2026"
  };

  const riwayatPenggunaan = [
    { bulan: "Desember 2025", m3: 14, biaya: 78000, status: "Lunas" },
    { bulan: "November 2025", m3: 16, biaya: 92000, status: "Lunas" },
    { bulan: "Oktober 2025", m3: 13, biaya: 72000, status: "Lunas" },
  ];

  const notifications = [
    { id: 1, text: "Tagihan bulan Januari telah tersedia", time: "2 jam lalu" },
    { id: 2, text: "Pengingat: Jatuh tempo pembayaran 3 hari lagi", time: "1 hari lalu" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-blue-700"
              >
                {sidebarOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">PDAM Digital</h1>
                <p className="text-xs sm:text-sm text-blue-100">Sistem Informasi Pelanggan</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="relative p-2 rounded-full hover:bg-blue-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">{userData.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:block mt-16 lg:mt-0`}>
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Riwayat Tagihan</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Pembayaran</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Layanan Pengaduan</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profil Saya</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Info Pelanggan */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Informasi Pelanggan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nama</p>
                <p className="font-semibold text-gray-800">{userData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">ID Pelanggan</p>
                <p className="font-semibold text-gray-800">{userData.idPelanggan}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Alamat</p>
                <p className="font-semibold text-gray-800 flex items-start">
                  <svg className="w-4 h-4 mr-1 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{userData.alamat}</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telepon</p>
                <p className="font-semibold text-gray-800">{userData.phone}</p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {/* Penggunaan Bulan Ini */}
            <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
                <span className="text-sm bg-blue-400 px-3 py-1 rounded-full">{currentUsage.bulan}</span>
              </div>
              <h3 className="text-sm font-medium mb-2">Penggunaan Air</h3>
              <p className="text-3xl font-bold mb-1">{currentUsage.penggunaan} m³</p>
              <p className="text-blue-100 text-sm">Volume bulan ini</p>
            </div>

            {/* Tagihan */}
            <div className="bg-linear-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-sm bg-green-400 px-3 py-1 rounded-full">{currentUsage.status}</span>
              </div>
              <h3 className="text-sm font-medium mb-2">Tagihan Bulan Ini</h3>
              <p className="text-3xl font-bold mb-1">Rp {currentUsage.biaya.toLocaleString('id-ID')}</p>
              <p className="text-green-100 text-sm">Total yang harus dibayar</p>
            </div>

            {/* Jatuh Tempo */}
            <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm bg-orange-400 px-3 py-1 rounded-full">3 Hari</span>
              </div>
              <h3 className="text-sm font-medium mb-2">Jatuh Tempo</h3>
              <p className="text-2xl font-bold mb-1">{currentUsage.jatuhTempo}</p>
              <p className="text-orange-100 text-sm">Segera lakukan pembayaran</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Riwayat Penggunaan */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Riwayat Penggunaan</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 sm:px-4 text-sm font-semibold text-gray-600">Periode</th>
                      <th className="text-left py-3 px-2 sm:px-4 text-sm font-semibold text-gray-600">Volume</th>
                      <th className="text-left py-3 px-2 sm:px-4 text-sm font-semibold text-gray-600">Biaya</th>
                      <th className="text-left py-3 px-2 sm:px-4 text-sm font-semibold text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riwayatPenggunaan.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 sm:px-4 text-sm text-gray-800">{item.bulan}</td>
                        <td className="py-3 px-2 sm:px-4 text-sm text-gray-800">{item.m3} m³</td>
                        <td className="py-3 px-2 sm:px-4 text-sm text-gray-800">Rp {item.biaya.toLocaleString('id-ID')}</td>
                        <td className="py-3 px-2 sm:px-4">
                          <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="mt-4 w-full sm:w-auto text-blue-600 hover:text-blue-700 font-medium text-sm">
                Lihat Semua Riwayat →
              </button>
            </div>

            {/* Notifikasi */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Notifikasi</h2>
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <div key={notif.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="text-sm text-gray-800 mb-1">{notif.text}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Bayar Sekarang
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay untuk mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}