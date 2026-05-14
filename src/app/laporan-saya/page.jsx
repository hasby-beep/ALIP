"use client";

import { useState } from "react";
import Link from "next/link";

export default function LaporanSayaPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [laporan, setLaporan] = useState([
    {
      id: 1,
      judul: "Jalan Rusak",
      kategori: "Infrastruktur",
      lokasi: "Bekasi",
      status: "Diproses",
      tanggal: "20 Mei 2024",
    },

    {
      id: 2,
      judul: "Lampu Jalan Mati",
      kategori: "Fasilitas Umum",
      lokasi: "Jakarta",
      status: "Selesai",
      tanggal: "18 Mei 2024",
    },
  ]);

  const [popupOpen, setPopupOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    judul: "",
    kategori: "",
    lokasi: "",
    status: "",
    tanggal: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !form.judul ||
      !form.kategori ||
      !form.lokasi ||
      !form.status ||
      !form.tanggal
    ) {
      return;
    }

    if (editId) {
      setLaporan(
        laporan.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );
    } else {
      const newLaporan = {
        id: Date.now(),
        ...form,
      };

      setLaporan([...laporan, newLaporan]);
    }

    setPopupOpen(false);

    setForm({
      judul: "",
      kategori: "",
      lokasi: "",
      status: "",
      tanggal: "",
    });

    setEditId(null);
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setForm({
      judul: item.judul,
      kategori: item.kategori,
      lokasi: item.lokasi,
      status: item.status,
      tanggal: item.tanggal,
    });

    setPopupOpen(true);
  };

  const handleDelete = (id) => {
    setLaporan(laporan.filter((item) => item.id !== id));
  };

  return (
    <main className="flex min-h-screen bg-[#f5f5f5]">

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

            <Link href="/home">
              <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition w-full">
                Home
              </button>
            </Link>

            <button className="bg-white text-black px-5 py-4 rounded-2xl text-left font-semibold">
              Laporan Saya
            </button>

            <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition">
              Riwayat
            </button>

            <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition">
              Pengaturan
            </button>
          </nav>

        </div>
      </aside>

      {/* CONTENT */}
      <section className="flex-1 p-10">

        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">

          <div className="flex items-center gap-4">

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

            <h1 className="text-3xl font-bold text-black">
              Laporan Saya
            </h1>

          </div>

          <button
            onClick={() => {
              setPopupOpen(true);
              setEditId(null);

              setForm({
                judul: "",
                kategori: "",
                lokasi: "",
                status: "",
                tanggal: "",
              });
            }}
            className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          >
            + Tambah Laporan
          </button>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">
                <tr className="text-left text-black">

                  <th className="p-5">Judul</th>
                  <th className="p-5">Kategori</th>
                  <th className="p-5">Lokasi</th>
                  <th className="p-5">Status</th>
                  <th className="p-5">Tanggal</th>
                  <th className="p-5">Aksi</th>

                </tr>
              </thead>

              <tbody>

                {laporan.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t"
                  >

                    <td className="p-5 text-black font-medium">
                      {item.judul}
                    </td>

                    <td className="p-5 text-gray-600">
                      {item.kategori}
                    </td>

                    <td className="p-5 text-gray-600">
                      {item.lokasi}
                    </td>

                    <td className="p-5">
                      <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
                        {item.status}
                      </span>
                    </td>

                    <td className="p-5 text-gray-600">
                      {item.tanggal}
                    </td>

                    <td className="p-5">

                      <div className="flex gap-3">

                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                        >
                          Hapus
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* POPUP */}
        {popupOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-5">

            <div className="bg-white w-full max-w-2xl rounded-3xl p-8 relative">

              {/* CLOSE */}
              <button
                onClick={() => setPopupOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-black mb-8">
                {editId ? "Edit Laporan" : "Tambah Laporan"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-gray-600">
                    Judul
                  </label>

                  <input
                    type="text"
                    name="judul"
                    value={form.judul}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Kategori
                  </label>

                  <input
                    type="text"
                    name="kategori"
                    value={form.kategori}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Lokasi
                  </label>

                  <input
                    type="text"
                    name="lokasi"
                    value={form.lokasi}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Status
                  </label>

                  <input
                    type="text"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">
                    Tanggal
                  </label>

                  <input
                    type="text"
                    name="tanggal"
                    value={form.tanggal}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition"
              >
                {editId ? "Simpan Perubahan" : "Tambah Laporan"}
              </button>

            </div>

          </div>
        )}

      </section>

    </main>
  );
}