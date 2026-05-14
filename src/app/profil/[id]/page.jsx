"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch(`http://localhost:5000/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("users", json);
        setUsers(json.data[0]);
      });
  }, [id]);

  if (!users) {
    return <div>Loading.....</div>;
  }

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
            <h1 className="text-4xl font-bold whitespace-nowrap">LAPOR!</h1>

            <p className="text-red-100 mt-2 whitespace-nowrap">
              Pengaduan Masyarakat
            </p>
          </div>

          <nav className="mt-14 flex flex-col gap-4">
            <Link href="/">
              <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition whitespace-nowrap w-full">
                Home
              </button>
            </Link>

            <Link href="/laporan">
              <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition whitespace-nowrap w-full">
                Pengaduan
              </button>
            </Link>

            <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition whitespace-nowrap">
              Riwayat
            </button>

            <button className="bg-white text-black px-5 py-4 rounded-2xl text-left font-semibold whitespace-nowrap">
              Profil
            </button>
          </nav>
        </div>
      </aside>

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

          <h1 className="text-2xl font-bold text-black">Profile</h1>
        </div>

        {/* PROFILE SECTION */}
        <div className="grid lg:grid-cols-3 gap-8">
<<<<<<< HEAD:src/app/profil/[id]/page.jsx
          {/* LEFT PROFILE */}
=======

          {/* CARD PROFILE */}
>>>>>>> 3ac8c57cfed6e4d8a81e98fe18c8c2dee348ff37:src/app/profil/page.jsx
          <div className="bg-white rounded-3xl shadow-sm p-8 h-fit">
            <div className="flex flex-col items-center">
              <img
                src="https://i.pinimg.com/736x/28/36/ed/2836ed60aa938a17992f5212f9a0c416.jpg"
                alt="profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-gray-200"
              />

              <h2 className="text-2xl font-bold mt-5 text-black">
                {users.username}
              </h2>

<<<<<<< HEAD:src/app/profil/[id]/page.jsx
              <p className="text-gray-500 mt-1">{users.email}</p>
=======
              <p className="text-gray-500 mt-2">
                budi@email.com
              </p>
>>>>>>> 3ac8c57cfed6e4d8a81e98fe18c8c2dee348ff37:src/app/profil/page.jsx

              <span className="mt-5 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
                Pengguna Aktif
              </span>
<<<<<<< HEAD:src/app/profil/[id]/page.jsx
            </div>

            {/* INFO */}
            <div className="mt-10 space-y-5">
              <div>
                <p className="text-gray-500 text-sm">Nomor Telepon</p>

                <h3 className="font-semibold text-black mt-1">
                  0812-3456-7890
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Alamat</p>

                <h3 className="font-semibold text-black mt-1">
                  Bekasi, Indonesia
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Bergabung</p>

                <h3 className="font-semibold text-black mt-1">
                  {new Date(users.bergabung).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm p-10 h-full flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-black leading-tight">
                Profile
                <span className="block text-gray-400">Settings</span>
              </h2>

              <p className="text-gray-500 mt-6 text-lg leading-relaxed max-w-xl">
                Kelola informasi akun anda, ubah data profile, dan perbarui
                informasi pribadi dengan mudah.
              </p>
=======

            </div>
          </div>

          {/* DATA DIRI */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-10">

            <div className="flex items-center justify-between mb-10">

              <div>
                <h2 className="text-4xl font-bold text-black">
                  Data Diri
                </h2>

                <p className="text-gray-500 mt-2">
                  Informasi lengkap pengguna
                </p>
              </div>
>>>>>>> 3ac8c57cfed6e4d8a81e98fe18c8c2dee348ff37:src/app/profil/page.jsx

              <button
                onClick={() => setEditOpen(true)}
                className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition"
              >
                Edit Profile
              </button>
            </div>
<<<<<<< HEAD:src/app/profil/[id]/page.jsx
=======

            {/* INFO GRID */}
            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-gray-500 text-sm">
                  Nama Lengkap
                </p>

                <h3 className="text-xl font-bold text-black mt-2">
                  Budi Santoso
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <h3 className="text-xl font-bold text-black mt-2">
                  budi@email.com
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-gray-500 text-sm">
                  Nomor Telepon
                </p>

                <h3 className="text-xl font-bold text-black mt-2">
                  0812-3456-7890
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-gray-500 text-sm">
                  Kota
                </p>

                <h3 className="text-xl font-bold text-black mt-2">
                  Bekasi
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-gray-500 text-sm">
                  Bergabung
                </p>

                <h3 className="text-xl font-bold text-black mt-2">
                  Januari 2024
                </h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <p className="text-gray-500 text-sm">
                  Status
                </p>

                <h3 className="text-xl font-bold text-green-600 mt-2">
                  Aktif
                </h3>
              </div>

            </div>

            {/* BIO */}
            <div className="bg-gray-100 rounded-2xl p-6 mt-8">

              <p className="text-gray-500 text-sm">
                Bio
              </p>

              <p className="text-black leading-relaxed mt-3">
                Saya aktif menggunakan layanan pengaduan masyarakat
                untuk membantu lingkungan menjadi lebih baik dan nyaman
                bagi semua warga.
              </p>

            </div>

>>>>>>> 3ac8c57cfed6e4d8a81e98fe18c8c2dee348ff37:src/app/profil/page.jsx
          </div>
        </div>

        {/* POPUP EDIT PROFILE */}
        {editOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-5">
            <div className="bg-white w-full max-w-3xl rounded-3xl p-8 relative">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setEditOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-black text-xl"
              >
                ✕
              </button>

              {/* HEADER */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-black">Edit Profile</h2>

                <p className="text-gray-500 mt-2">
                  Perbarui informasi profile anda
                </p>
              </div>

              {/* FORM */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">Nama Lengkap</label>

                  <input
                    type="text"
                    defaultValue="Budi Santoso"
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email</label>

                  <input
                    type="email"
                    defaultValue="budi@email.com"
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Nomor Telepon</label>

                  <input
                    type="text"
                    defaultValue="0812-3456-7890"
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Kota</label>

                  <input
                    type="text"
                    defaultValue="Bekasi"
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black text-black"
                  />
                </div>
              </div>

              {/* BIO */}
              <div className="mt-6">
                <label className="text-sm text-gray-600">Bio</label>

                <textarea
                  rows={5}
                  defaultValue="Saya aktif menggunakan layanan pengaduan masyarakat untuk membantu lingkungan menjadi lebih baik."
                  className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-black text-black"
                />
              </div>

              {/* BUTTON */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setEditOpen(false)}
                  className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition"
                >
                  Simpan Perubahan
                </button>

                <button
                  onClick={() => setEditOpen(false)}
                  className="border border-gray-300 text-black px-6 py-4 rounded-2xl hover:bg-gray-100 transition"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
