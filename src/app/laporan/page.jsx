"use client";

import Link from "next/link";
import { useState } from "react";

export default function DetailLaporan() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
     {/* Sidebar */}
<aside
  className={`
    bg-gray-900 text-white
    transition-all duration-300 ease-in-out
    ${sidebarOpen ? "w-64 p-6 opacity-100" : "w-0 p-0 opacity-0"}
    overflow-hidden
  `}
>
  <div className={`${sidebarOpen ? "block" : "hidden"}`}>
    
    <h1 className="text-2xl font-bold mb-8 whitespace-nowrap">
      LAPOR!
    </h1>

    <nav className="flex flex-col gap-4 text-sm whitespace-nowrap">
      
      <Link href="/home">
        <span className="hover:bg-gray-800 p-2 rounded block">
          Home
        </span>
      </Link>

      <a className="bg-gray-800 p-2 rounded">
        Pengaduan
      </a>

      <a className="hover:bg-gray-800 p-2 rounded">
        Riwayat
      </a>

      <a className="hover:bg-gray-800 p-2 rounded">
        Komentar
      </a>
    </nav>

  </div>
</aside>
      {/* Main */}
      <div className="flex-1 p-6">

        {/* HEADER TOP */}
        <div className="flex items-center gap-4 mb-6">

          {/* BUTTON MENU */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-white shadow p-3 rounded-xl hover:bg-gray-100 transition"
          >
            {/* ICON GARIS TIGA */}
            <div className="flex flex-col gap-1">
              <span className="w-6 h-[3px] bg-black rounded"></span>
              <span className="w-6 h-[3px] bg-black rounded"></span>
              <span className="w-6 h-[3px] bg-black rounded"></span>
            </div>
          </button>

          <h1 className="text-2xl font-bold text-black">
            Detail Laporan
          </h1>
        </div>

        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          
          <div className="flex justify-between items-start">
            
            <div>
              <p className="text-black text-sm">
                ID Laporan
              </p>

              <h2 className="text-xl font-bold text-black">
                #LP-240526-001
              </h2>

              <h1 className="text-2xl font-bold mt-2 text-black">
                Jalan Rusak di Depan Sekolah
              </h1>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">
              Menunggu
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Image */}
            <div className="bg-white p-4 rounded-xl shadow">
              <img
                src="/image.png"
                alt="laporan"
                className="rounded-xl w-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow">
              
              <h3 className="font-semibold mb-3 text-black">
                Deskripsi Laporan
              </h3>

              <p className="text-black text-sm leading-relaxed">
                Jalan di depan sekolah sangat rusak dan berlubang.
                Saat hujan menjadi tergenang air dan membahayakan pengguna jalan.
                Mohon segera diperbaiki.
              </p>
            </div>
          </div>

          {/* Right Info */}
          <div className="space-y-6">

            {/* Informasi Laporan */}
            <div className="bg-white p-6 rounded-xl shadow text-sm space-y-3">
              
              <h3 className="font-semibold mb-3 text-black">
                Informasi Laporan
              </h3>

              <div>
                <p className="text-black">Kategori</p>
                <p className="text-yellow-500">Infrastruktur</p>
              </div>

              <div>
                <p className="text-black">Tanggal</p>
                <p className="text-yellow-500">26 Mei 2024</p>
              </div>

              <div>
                <p className="text-black">Prioritas</p>
                <p className="text-yellow-500">Sedang</p>
              </div>
            </div>

            {/* Informasi Pelapor */}
            <div className="bg-white p-6 rounded-xl shadow text-sm space-y-3">
              
              <h3 className="font-semibold mb-3 text-black">
                Informasi Pelapor
              </h3>

              <div>
                <p className="text-black">Nama</p>
                <p className="text-yellow-500">Budi Santoso</p>
              </div>

              <div>
                <p className="text-black">Email</p>
                <p className="text-yellow-500">budi@email.com</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}