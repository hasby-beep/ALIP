// src/app/page.jsx

"use client";

import { useState } from "react";

import Link from "next/link";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const laporan = [
    {
      title: "Jalan Rusak di Depan Sekolah",
      image:
        "/image.png",
      lokasi: "Jakarta",
      tanggal: "20 Mei 2024",
      status: "Dalam Proses",
      warna: "bg-yellow-100 text-yellow-700",
    },

    {
      title: "Lampu Jalan Mati",
      image:
        "/image.png",
      lokasi: "Bandung",
      tanggal: "18 Mei 2024",
      status: "Selesai",
      warna: "bg-green-100 text-green-700",
    },

    {
      title: "Sampah Menumpuk di TPS",
      image:
        "/image.png",
      lokasi: "Surabaya",
      tanggal: "17 Mei 2024",
      status: "Menunggu",
      warna: "bg-blue-100 text-blue-700",
    },

    {
      title: "Selokan Tersumbat",
      image:
        "/image.png",
      lokasi: "Bekasi",
      tanggal: "15 Mei 2024",
      status: "Dalam Proses",
      warna: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <main className="flex min-h-screen bg-[#f5f5f5]">
      
      {/* SIDEBAR */}
     {/* SIDEBAR */}
<aside
  className={`
    bg-gray-900 text-white
    transition-all duration-300 ease-in-out
    ${sidebarOpen ? "w-[270px] p-8 opacity-100" : "w-0 p-0 opacity-0"}
    overflow-hidden
    hidden md:flex flex-col
  `}
>
  <div className={`${sidebarOpen ? "block" : "hidden"}`}>
    
    <div>
      <h1 className="text-4xl font-bold whitespace-nowrap">
        LAPOR!
      </h1>

      <p className="text-red-100 mt-2 whitespace-nowrap">
        Pengaduan Masyarakat
      </p>
    </div>

    <nav className="mt-14 flex flex-col gap-4">
      
      <button className="bg-white text-black px-5 py-4 rounded-2xl text-left font-semibold whitespace-nowrap">
        Home
      </button>

      <Link href="/admin">
        <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition whitespace-nowrap w-full">
          Dashboard
        </button>
      </Link>

      <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition whitespace-nowrap">
        Riwayat
      </button>

      <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition whitespace-nowrap">
        Pengaturan
      </button>
    </nav>

  </div>
</aside>

      {/* CONTENT */}
     {/* CONTENT */}
<section className="flex-1 p-10">

  {/* TOPBAR */}
  <div className="flex items-center gap-4 mb-8">

    {/* BUTTON MENU */}
    <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="bg-white shadow p-3 rounded-xl hover:bg-gray-100 transition"
    >
      <div className="flex flex-col gap-1">
        <span className="w-6 h-[3px] bg-black rounded"></span>
        <span className="w-6 h-[3px] bg-black rounded"></span>
        <span className="w-6 h-[3px] bg-black rounded"></span>
      </div>
    </button>

    <h1 className="text-2xl font-bold text-black">
      Dashboard
    </h1>
  </div>
        
        {/* HERO */}
        <div className="bg-white rounded-[30px] p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Sampaikan Laporan Anda
              <span className="block text-black">
                Dengan Mudah dan Cepat
              </span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Kami siap mendengar dan menindaklanjuti setiap laporan masyarakat
              untuk pelayanan yang lebih baik dan transparan.
            </p>

            <button className="mt-8 bg-black text-white px-7 py-4 rounded-2xl font-medium hover:bg-[#6f0000] transition">
              Buat Pengaduan
            </button>
          </div>

          <img
            src="https://i.pinimg.com/736x/80/73/ea/8073eaad6ae560aad84571a92505daa7.jpg"
            alt="city"
            className="w-full lg:w-[500px] h-[350px] object-cover rounded-3xl"
          />
        </div>

        {/* DIAGRAM */}
<div className="grid lg:grid-cols-2 gap-8 mt-10">

  {/* PIE CHART */}
  <div className="bg-white rounded-3xl p-8 shadow-sm">

    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-black">
          Statistik Pengaduan
        </h2>

        <p className="text-gray-500 mt-2">
          Data keseluruhan laporan masyarakat
        </p>
      </div>
    </div>

    <div className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          <Pie
            data={[
              { name: "Selesai", value: 2041 },
              { name: "Diproses", value: 312 },
              { name: "Menunggu", value: 103 },
            ]}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={130}
            paddingAngle={5}
            dataKey="value"
          >
            <Cell fill="#22c55e" />
            <Cell fill="#facc15" />
            <Cell fill="#ef4444" />
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* LEGEND */}
    <div className="grid grid-cols-3 gap-4 mt-5">

      <div className="bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>

          <p className="font-medium text-black">
            Selesai
          </p>
        </div>

        <h3 className="text-3xl font-bold mt-3 text-black">
          2.041
        </h3>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-yellow-400"></div>

          <p className="font-medium text-black">
            Diproses
          </p>
        </div>

        <h3 className="text-3xl font-bold mt-3 text-black">
          312
        </h3>
      </div>

      <div className="bg-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>

          <p className="font-medium text-black">
            Menunggu
          </p>
        </div>

        <h3 className="text-3xl font-bold mt-3 text-black">
          103
        </h3>
      </div>

    </div>
  </div>

  {/* CARD INFO */}
  <div className="bg-black rounded-3xl p-10 text-white flex flex-col justify-center">

    <h2 className="text-5xl font-bold leading-tight">
      Dashboard
      <span className="block text-gray-400">
        Pengaduan Online
      </span>
    </h2>

    <p className="text-gray-300 mt-6 text-lg leading-relaxed">
      Pantau seluruh laporan masyarakat secara realtime
      dengan tampilan modern dan interaktif.
    </p>

    <button className="mt-8 bg-white text-black px-7 py-4 rounded-2xl font-semibold w-fit">
      Lihat Statistik
    </button>
  </div>

</div>
        {/* CARD LAPORAN */}
        <div className="mt-14">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">
              Pengaduan Terbaru
            </h2>

            <button className="text-black font-semibold">
              Lihat Semua
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {laporan.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm px-4 py-2 rounded-full ${item.warna}`}
                    >
                      {item.status}
                    </span>

                    <p className="text-sm text-gray-500">
                      {item.tanggal}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3">
                    📍 {item.lokasi}
                  </p>

                  <button className="mt-6 w-full bg-black text-white py-3 rounded-2xl hover:bg-[#6f0000] transition">
                    Detail Laporan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}