"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [laporan, setLaporan] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch("http://localhost:5000/api/laporan", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("laporan:", json);
        setLaporan(json.data);
      });

  }, []);


  return (
    <main className="flex min-h-screen bg-[#F0F9FF] font-sans">
      {/* SIDEBAR - Konsisten dengan desain sebelumnya */}
      <aside
        className={`
      bg-[#0F172A] text-white
      transition-all duration-300 ease-in-out
      ${sidebarOpen ? "w-[280px] p-8 opacity-100" : "w-0 p-0 opacity-0"}
      overflow-hidden
      hidden md:flex flex-col shadow-2xl
    `}
      >
        <div className={`${sidebarOpen ? "block" : "hidden"}`}>
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold whitespace-nowrap tracking-tight">
              LAPOR<span className="text-[#06B6D4]">!</span>
            </h1>
            <p className="text-cyan-400 text-sm font-medium mt-1 uppercase tracking-wider whitespace-nowrap">
              Pengaduan Masyarakat
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <button className="bg-[#06B6D4] text-white px-6 py-4 rounded-2xl text-left font-bold whitespace-nowrap shadow-lg shadow-cyan-900/20">
              Home
            </button>

            <Link href="/laporan">
              <button className="hover:bg-slate-800 px-6 py-4 rounded-2xl text-left transition whitespace-nowrap w-full text-slate-300 hover:text-white font-medium">
                Pengaduan
              </button>
            </Link>

            <button className="hover:bg-slate-800 px-6 py-4 rounded-2xl text-left transition whitespace-nowrap text-slate-300 hover:text-white font-medium">
              Riwayat
            </button>

            <button className="hover:bg-slate-800 px-6 py-4 rounded-2xl text-left transition whitespace-nowrap text-slate-300 hover:text-white font-medium">
              Pengaturan
            </button>
          </nav>

          <div className="mt-auto pt-20">
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
              <p className="text-xs text-slate-400 leading-relaxed">
                Butuh bantuan teknis? Hubungi admin pusat kami.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* TOPBAR */}
        <div className="flex items-center gap-6 mb-10">
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
            Home
          </h1>
        </div>

        {/* HERO SECTION */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-cyan-100/50 flex flex-col lg:flex-row items-center justify-between gap-12 border border-cyan-50 border-b-4 border-b-cyan-500 mb-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold leading-[1.1] text-[#0F172A]">
              Sampaikan Laporan <br />
              <span className="text-[#06B6D4]">Mudah & Cepat</span>
            </h1>
            <p className="text-slate-500 mt-6 text-xl leading-relaxed">
              Kami siap mendengar dan menindaklanjuti setiap laporan masyarakat
              untuk pelayanan yang lebih transparan.
            </p>
            <button className="mt-10 bg-[#06B6D4] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#0891B2] transform hover:-translate-y-1 transition shadow-lg shadow-cyan-200">
              Buat Pengaduan Sekarang
            </button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://i.pinimg.com/736x/80/73/ea/8073eaad6ae560aad84571a92505daa7.jpg"
              alt="city"
              className="w-full lg:w-[450px] h-[300px] object-cover rounded-[32px] shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Total Pengaduan", val: "2.456", color: "text-[#0F172A]" },
            { label: "Dalam Proses", val: "312", color: "text-[#0891B2]" },
            { label: "Selesai", val: "2.041", color: "text-[#06B6D4]" },
            { label: "Pengguna", val: "1.823", color: "text-[#22D3EE]" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] p-8 shadow-md border border-cyan-50 hover:border-cyan-200 transition group"
            >
              <p className="text-slate-500 font-medium group-hover:text-[#06B6D4] transition-colors">
                {stat.label}
              </p>
              <h2 className={`text-4xl font-black mt-3 ${stat.color}`}>
                {stat.val}
              </h2>
            </div>
          ))}
        </div>

        {/* PENGADUAN TERBARU - Grid Dinamis 3/4 Kolom */}
        <div className="mt-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">
                Pengaduan Terbaru
              </h2>
              <p className="text-slate-500 text-sm mt-1 font-medium">
                Pantau laporan terkini dari masyarakat di sekitarmu.
              </p>
            </div>
            <button className="group text-[#0891B2] font-bold hover:text-[#06B6D4] flex items-center gap-2 transition-all text-sm bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-cyan-50 hover:shadow-md">
              Lihat Semua
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div
            className={`
          grid grid-cols-1 sm:grid-cols-2 gap-8 transition-all duration-500 ease-in-out
          ${sidebarOpen ? "lg:grid-cols-3 xl:grid-cols-3" : "lg:grid-cols-4 xl:grid-cols-4"}
        `}
          >
            {laporan.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-500 transform hover:-translate-y-3 border border-slate-100/50 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={`http://localhost:5000/gambar/${item.gambar}`}
                    alt={item.judul}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 backdrop-blur-md bg-white/80 border border-white/20 px-4 py-2 rounded-2xl shadow-sm">
                    <p className="text-[10px] font-black text-[#0891B2] uppercase tracking-widest text-center leading-none">
                      {new Date(item.create_at).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </p>
                    <p className="text-[9px] text-slate-500 font-bold text-center mt-1">
                      {new Date(item.create_at).getFullYear()}
                    </p>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-[19px] font-extrabold text-[#0F172A] line-clamp-2 group-hover:text-[#06B6D4] transition-colors duration-300 leading-[1.4] mb-3">
                    {item.judul}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-50 text-cyan-500 text-xs">
                      📍
                    </div>
                    <p className="text-slate-500 font-semibold text-xs tracking-wide truncate">
                      {item.lokasi}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => router.push(`/laporan/${item.id}`)}
                      className="w-full bg-[#F0F9FF] text-[#0891B2] py-4 rounded-[22px] font-black text-xs uppercase tracking-widest hover:bg-[#06B6D4] hover:text-white hover:shadow-lg hover:shadow-cyan-200 transition-all duration-300"
                    >
                      Detail Laporan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
