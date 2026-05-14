"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  useEffect (() => {
    const role = localStorage.getItem("role")
    const token = localStorage.getItem("token")

    if (!token) {
      router.push("/login")
      return
    }
    if (role !== "admin") {
      router.push("/home")
      return
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex">

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
      <div className="flex-1">

        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">

            {/* BUTTON SIDEBAR */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition"
            >
              <div className="flex flex-col gap-1">
                <span className="w-6 h-[3px] bg-black rounded"></span>
                <span className="w-6 h-[3px] bg-black rounded"></span>
                <span className="w-6 h-[3px] bg-black rounded"></span>
              </div>
            </button>

            <h2 className="text-xl font-semibold text-black">
              Dashboard
            </h2>
          </div>

          <span className="font-medium text-black">
            Admin
          </span>
        </header>

        {/* Content */}
        <main className="p-6">

          {/* Table */}
          <div className="bg-white p-6 rounded-xl shadow">

            <h3 className="text-lg font-semibold mb-4 text-black">
              Pengaduan Terbaru
            </h3>

            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>
                  <tr className="text-left border-b text-black">
                    <th className="py-2">Gambar</th>
                    <th>ID</th>
                    <th>Judul</th>
                    <th>Pelapor</th>
                    <th>Kategori</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-b text-black">
                    <td className="py-2">
                      <img
                        src="https://via.placeholder.com/60"
                        alt="laporan"
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    </td>

                    <td>#001</td>
                    <td>Jalan Rusak</td>
                    <td>Budi</td>
                    <td>Infrastruktur</td>

                    <td>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                        Menunggu
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b text-black">
                    <td className="py-2">
                      <img
                        src="https://via.placeholder.com/60"
                        alt="laporan"
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    </td>

                    <td>#002</td>
                    <td>Sampah Menumpuk</td>
                    <td>Siti</td>
                    <td>Kebersihan</td>

                    <td>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                        Diproses
                      </span>
                    </td>
                  </tr>

                  <tr className="text-black">
                    <td className="py-2">
                      <img
                        src="https://via.placeholder.com/60"
                        alt="laporan"
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    </td>

                    <td>#003</td>
                    <td>Lampu Mati</td>
                    <td>Andi</td>
                    <td>Infrastruktur</td>

                    <td>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        Selesai
                      </span>
                    </td>
                  </tr>

                </tbody>

              </table>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}