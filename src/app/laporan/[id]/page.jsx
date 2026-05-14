"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailLaporanUsers() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { id } = useParams();
  const router = useRouter();
  const [laporan, setLaporan] = useState(null);

  const statusStyles = {
    Diterima: "bg-green-50 text-green-600 border-green-100 dot-green-500",
    Ditolak: "bg-red-50 text-red-600 border-red-100 dot-red-500",
    Diproses: "bg-amber-50 text-amber-600 border-amber-100 dot-amber-500",
    Pending: "bg-gray-50 text-gray-400 border-gray-100 dot-gray-400",
  };

  // Ambil style berdasarkan status, default ke Pending jika tidak ditemukan

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
      router.push("/login");
      return;
    }
    if (role === "admin") {
      router.push(`/admin/laporan/${id}`);
      return;
    }

    fetch(`http://localhost:5000/api/laporan/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("laporan:", json);
        setLaporan(json.data[0]);
      });
  }, [id]);

  if (!laporan) {
    return <div>Loading...</div>;
  }

  const currentStyle = statusStyles[laporan.status] || statusStyles.Pending;

  return (
    <div className="min-h-screen bg-[#F0F9FF] flex font-sans">
      {/* Sidebar */}
      <aside
        className={`
          bg-[#0F172A] text-white
      transition-all duration-300 ease-in-out
      ${sidebarOpen ? "w-[280px] p-8 opacity-100" : "w-0 p-0 opacity-0"}
      overflow-hidden hidden md:flex flex-col shadow-2xl
      `}
      >
        <div className={`${sidebarOpen ? "block" : "hidden"}`}>
          <div className="mb-12">
            <Link href="/home">
              <h1 className="text-4xl font-extrabold whitespace-nowrap tracking-tight">
                LAPOR<span className="text-[#06B6D4]">!</span>
              </h1>
            </Link>
            <p className="text-cyan-400 text-sm font-medium mt-1 uppercase tracking-wider whitespace-nowrap">
              Pengaduan Masyarakat
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <Link href="/home">
              <button className="w-full hover:bg-slate-800 px-6 py-4 rounded-2xl text-left transition whitespace-nowrap text-slate-300 hover:text-white font-medium">
                Home
              </button>
            </Link>
            <button className="bg-[#06B6D4] text-white px-6 py-4 rounded-2xl text-left font-bold whitespace-nowrap shadow-lg shadow-cyan-900/20">
              Dashboard
            </button>
            <button className="hover:bg-slate-800 px-6 py-4 rounded-2xl text-left transition whitespace-nowrap text-slate-300 hover:text-white font-medium">
              Riwayat
            </button>
            <button className="hover:bg-slate-800 px-6 py-4 rounded-2xl text-left transition whitespace-nowrap text-slate-300 hover:text-white font-medium">
              Komentar
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* HEADER TOP */}
        <div className="flex items-center gap-6 mb-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-white shadow-md shadow-cyan-100 p-4 rounded-2xl hover:bg-cyan-50 transition border border-cyan-50"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-[2.5px] bg-[#06B6D4] rounded"></span>
              <span className="w-4 h-[2.5px] bg-[#0891B2] rounded"></span>
              <span className="w-6 h-[2.5px] bg-[#06B6D4] rounded"></span>
            </div>
          </button>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Detail Laporan
          </h1>
        </div>

        {/* Header Card (Judul & ID) */}
        <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-cyan-100/50 mb-8 border border-cyan-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-cyan-100 text-[#0891B2] text-xs font-bold px-3 py-1 rounded-lg">
                ID: #{laporan.id}
              </span>
              <span className="text-slate-400 text-sm font-medium">
                {new Date(laporan.create_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-black text-[#0F172A] leading-tight">
              {laporan.judul}
            </h1>
          </div>

          <div
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all ${currentStyle.split(" ").slice(0, 3).join(" ")}`}
          >
            {/* Dot Animation */}
            <span className="relative flex h-3 w-3">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStyle.split(" ").pop().replace("dot-", "bg-")}`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-3 w-3 ${currentStyle.split(" ").pop().replace("dot-", "bg-")}`}
              ></span>
            </span>

            {/* Text Status */}
            <span className="font-bold text-sm uppercase tracking-wider">
              {laporan.status || "Menunggu"}
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content (Image & Description) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="bg-white p-4 rounded-[40px] shadow-xl shadow-cyan-100/50 border border-cyan-50 overflow-hidden">
              <img
                src={`http://localhost:5000/gambar/${laporan.gambar}`}
                alt="laporan"
                className="rounded-[32px] w-full h-[450px] object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Description Box */}
            <div className="bg-white p-8 rounded-[32px] shadow-lg shadow-cyan-100/50 border border-cyan-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  Deskripsi Lengkap
                </h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {laporan.deskripsi}
              </p>
            </div>
          </div>

          {/* Right Info Panels */}
          <div className="space-y-8">
            {/* Panel Informasi Laporan */}
            <div className="bg-[#0F172A] p-8 rounded-[32px] shadow-2xl text-white relative overflow-hidden">
              {/* Aksesori Dekoratif */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>

              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-6 bg-cyan-400 rounded-full"></span>
                Detail Kejadian
              </h3>

              <div className="space-y-6">
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                    Kategori
                  </p>
                  <p className="text-cyan-400 font-bold text-lg">
                    {laporan.nama_kategori}
                  </p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                    Lokasi
                  </p>
                  <p className="text-white font-bold text-lg">
                    📍 {laporan.lokasi || "Lokasi tidak terinci"}
                  </p>
                </div>
              </div>
            </div>

            {/* Panel Informasi Pelapor */}
            <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-cyan-100/50 border border-cyan-50">
              <h3 className="text-lg font-bold text-[#0F172A] mb-8 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#06B6D4] rounded-full"></span>
                Profil Pelapor
              </h3>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-cyan-200">
                  {laporan.username?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-black text-[#0F172A] text-lg">
                    {laporan.username}
                  </p>
                  <p className="text-slate-400 text-sm font-medium">
                    Citizen Reporter
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="font-medium truncate">{laporan.email}</p>
                </div>

                <button className="w-full py-4 bg-[#F0F9FF] text-[#0891B2] font-bold rounded-2xl hover:bg-cyan-100 transition-colors duration-300">
                  Hubungi Pelapor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
