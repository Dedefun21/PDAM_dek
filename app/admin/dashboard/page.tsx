'use client';


import { useState } from "react";
import { useEffect } from "react";



export default  function Dasboard() {

  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState(' ');

  // Update waktu dan tanggal
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
      });
      const dateString = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  // Data statistik
  const statsData = [
    {
      title: "Penggunaan Air",
      value: "45.230 m³",
      change: "+5.2%",
      icon: "💧",
      desc: "Bulan ini"
    },
    {
      title: "Total Pelanggan",
      value: "12.450",
      change: "+3.1%",
      icon: "👥",
      desc: "Aktif"
    },
    {
      title: "Pendapatan",
      value: "Rp 2,4M",
      change: "+8.7%",
      icon: "💰",
      desc: "Bulan ini"
    },
    {
      title: "Efisiensi",
      value: "94,5%",
      change: "+1.3%",
      icon: "📈",
      desc: "Distribusi"
    },
  ];

  // Menu cepat
  const quickActions = [
    { title: "Cek Tagihan", icon: "📄", color: "bg-blue-100 text-blue-600" },
    { title: "Lapor Kerusakan", icon: "⚠️", color: "bg-red-100 text-red-600" },
    { title: "Tambah Pelanggan", icon: "➕", color: "bg-green-100 text-green-600" },
    { title: "Generate Laporan", icon: "📊", color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-xl">💧</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-800">Dashboard PDAM</h1>
                  <p className="text-sm text-gray-600">Sistem Manajemen Air Bersih</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-sm text-gray-600">{currentDate}</span>
                  <span className="font-medium text-zinc-800">{currentTime}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <span className="text-xl">🔔</span>
                  </button>

                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600">👤</span>
                    </div>
                    <div className="ml-2 hidden sm:block">
                      <p className="text-sm font-medium text-blue-900">Admin PDAM</p>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          {/* Welcome Banner */}
          <div className="bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg p-6 mb-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Selamat Datang di Dashboard PDAM</h1>
                <p className="opacity-90 max-w-2xl">
                  Monitor penggunaan air, kelola pelanggan, dan pantau distribusi air bersih secara real-time.
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-4 bg-white/20 p-3 rounded-lg">
                <div className="text-center">
                  <p className="text-sm opacity-80">Hari Ini</p>
                  <p className="text-lg font-bold">{currentDate.split(',')[0]}</p>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <p className="text-sm opacity-80">Jam</p>
                  <p className="text-lg font-bold">{currentTime}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white/30 px-3 py-1 rounded-full text-sm">Status: Normal</span>
              <span className="bg-white/30 px-3 py-1 rounded-full text-sm">Zona: Semua Beroperasi</span>
              <span className="bg-white/30 px-3 py-1 rounded-full text-sm">Update: Real-time</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.desc}</p>
                  </div>
                  <div className="text-2xl">{stat.icon}</div>
                </div>
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">dari bulan lalu</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Aksi Cepat</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} rounded-xl p-4 flex flex-col items-center justify-center hover:opacity-90 transition-opacity`}
                >
                  <span className="text-2xl mb-2">{action.icon}</span>
                  <span className="font-medium">{action.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity & Water Usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Aktivitas Terbaru</h2>
              <div className="space-y-4">
                {[
                  { time: "10:30", activity: "Pembayaran tagihan oleh Pelanggan #04521", status: "success" },
                  { time: "09:15", activity: "Perbaikan pipa di zona Utara selesai", status: "success" },
                  { time: "08:45", activity: "Laporan kebocoran baru diterima", status: "warning" },
                  { time: "07:30", activity: "Penambahan 15 pelanggan baru", status: "success" },
                  { time: "06:00", activity: "Pengecekan rutin reservoir utama", status: "info" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start border-b pb-3 last:border-0 last:pb-0">
                    <div className="shrink-0 w-16">
                      <span className="text-sm text-gray-500">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">{item.activity}</p>
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded text-xs ${item.status === 'success' ? 'bg-green-100 text-green-600' :
                          item.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-blue-100 text-blue-600'
                        }`}>
                        {item.status === 'success' ? 'Berhasil' :
                          item.status === 'warning' ? 'Perhatian' : 'Info'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Water Usage Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Penggunaan Air (m³)</h2>
              <div className="space-y-4">
                {[
                  { zone: "Zona Utara", usage: 12500, percent: 75 },
                  { zone: "Zona Selatan", usage: 9800, percent: 60 },
                  { zone: "Zona Timur", usage: 15600, percent: 85 },
                  { zone: "Zona Barat", usage: 8200, percent: 50 },
                  { zone: "Zona Pusat", usage: 18900, percent: 95 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{item.zone}</span>
                      <span className="font-medium">{item.usage.toLocaleString()} m³</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-black text-sm">Total Distribusi Hari Ini</p>
                    <p className="text-2xl font-bold text-black">65.000 m³</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Kapasitas Tersedia</p>
                    <p className="text-2xl font-bold text-green-600">82%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">📞 Kontak Darurat</h3>
                <p className="text-gray-600 text-sm">Layanan 24 jam untuk laporan kebocoran dan gangguan air</p>
                <p className="text-blue-600 font-bold mt-1">1500-123</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">⏰ Jam Operasional</h3>
                <p className="text-gray-600 text-sm">Kantor Pelayanan:</p>
                <p className="text-sm mt-1">Senin-Jumat: 08:00-16:00</p>
                <p className="text-sm">Sabtu: 08:00-12:00</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">📍 Informasi</h3>
                <p className="text-gray-600 text-sm">PDAM Kota Mandiri</p>
                <p className="text-sm mt-1">Jalan Air Bersih No. 123</p>
                <p className="text-sm">info@pdam-kotamandiri.id</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 bg-white border-t py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">© 2023 PDAM Kota Mandiri - Semua hak dilindungi</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <span className="text-gray-600 text-sm">Versi 2.1.0</span>
                <span className="text-gray-600 text-sm">•</span>
                <span className="text-green-600 text-sm font-medium">● Sistem Online</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}



