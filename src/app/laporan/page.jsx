"use client";

import Link from "next/link";
import { useState } from "react";

export default function DetailLaporan() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [comments, setComments] = useState([
    {
      nama: "Andi",
      isi: "Semoga segera diperbaiki karena cukup berbahaya.",
      likes: 12,
      dislikes: 1,
      balasan: [
        {
          nama: "Admin",
          isi: "Terima kasih atas laporannya, sedang diproses.",
        },
      ],
    },
    {
      nama: "Siti",
      isi: "Saya juga sering lewat jalan ini.",
      likes: 8,
      dislikes: 0,
      balasan: [],
    },
  ]);

  const [inputKomentar, setInputKomentar] = useState("");
  const [replyInput, setReplyInput] = useState({});

  // TAMBAH KOMENTAR
  const handleTambahKomentar = () => {
    if (inputKomentar.trim() === "") return;

    const komentarBaru = {
      nama: "User",
      isi: inputKomentar,
      likes: 0,
      dislikes: 0,
      balasan: [],
    };

    setComments([...comments, komentarBaru]);
    setInputKomentar("");
  };

  // LIKE
  const handleLike = (index) => {
    const updated = [...comments];
    updated[index].likes += 1;
    setComments(updated);
  };

  // DISLIKE
  const handleDislike = (index) => {
    const updated = [...comments];
    updated[index].dislikes += 1;
    setComments(updated);
  };

  // BALAS KOMENTAR
  const handleReply = (index) => {
    if (!replyInput[index]) return;

    const updated = [...comments];

    updated[index].balasan.push({
      nama: "User",
      isi: replyInput[index],
    });

    setComments(updated);

    setReplyInput({
      ...replyInput,
      [index]: "",
    });
  };

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
      <div className="flex-1 p-6">

        {/* HEADER TOP */}
        <div className="flex items-center gap-4 mb-6">

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

            {/* KOMENTAR */}
            <div className="bg-white p-6 rounded-xl shadow">

              <h3 className="font-semibold text-black text-lg mb-5">
                Komentar
              </h3>

              {/* INPUT KOMENTAR */}
              <div className="flex gap-3 mb-6">

                <input
                  type="text"
                  placeholder="Tulis komentar..."
                  value={inputKomentar}
                  onChange={(e) => setInputKomentar(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black text-black"
                />

                <button
                  onClick={handleTambahKomentar}
                  className="bg-black text-white px-5 rounded-xl hover:bg-gray-800 transition"
                >
                  Kirim
                </button>
              </div>

              {/* LIST KOMENTAR */}
              <div className="space-y-5">

                {comments.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-5"
                  >

                    {/* USER */}
                    <div className="flex items-center justify-between">

                      <div>
                        <h4 className="font-semibold text-black">
                          {item.nama}
                        </h4>

                        <p className="text-gray-600 text-sm mt-2">
                          {item.isi}
                        </p>
                      </div>

                    </div>

                    {/* ACTION */}
                    <div className="flex items-center gap-4 mt-4">

                      <button
                        onClick={() => handleLike(index)}
                        className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm hover:bg-green-200 transition"
                      >
                        👍 {item.likes}
                      </button>

                      <button
                        onClick={() => handleDislike(index)}
                        className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-xl text-sm hover:bg-red-200 transition"
                      >
                        👎 {item.dislikes}
                      </button>

                    </div>

                    {/* BALASAN */}
                    <div className="mt-5 ml-5 space-y-3">

                      {item.balasan.map((reply, i) => (
                        <div
                          key={i}
                          className="bg-gray-100 rounded-xl p-4"
                        >
                          <h5 className="font-semibold text-sm text-black">
                            {reply.nama}
                          </h5>

                          <p className="text-gray-600 text-sm mt-1">
                            {reply.isi}
                          </p>
                        </div>
                      ))}

                    </div>

                    {/* INPUT BALAS */}
                    <div className="flex gap-3 mt-5">

                      <input
                        type="text"
                        placeholder="Balas komentar..."
                        value={replyInput[index] || ""}
                        onChange={(e) =>
                          setReplyInput({
                            ...replyInput,
                            [index]: e.target.value,
                          })
                        }
                        className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black text-black"
                      />

                      <button
                        onClick={() => handleReply(index)}
                        className="bg-black text-white px-5 rounded-xl hover:bg-gray-800 transition"
                      >
                        Balas
                      </button>

                    </div>

                  </div>
                ))}

              </div>
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