"use client";

import { useState } from "react";

export default function SuperAdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      email: "budi@gmail.com",
      role: "User",
    },

    {
      id: 2,
      nama: "Admin Utama",
      email: "admin@gmail.com",
      role: "Admin",
    },

    {
      id: 3,
      nama: "Siti Aulia",
      email: "siti@gmail.com",
      role: "User",
    },
  ]);

  const [popupOpen, setPopupOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    role: "User",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.nama || !form.email || !form.role) return;

    if (editId) {
      setUsers(
        users.map((item) =>
          item.id === editId ? { ...item, ...form } : item
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        ...form,
      };

      setUsers([...users, newUser]);
    }

    setPopupOpen(false);

    setForm({
      nama: "",
      email: "",
      role: "User",
    });

    setEditId(null);
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setForm({
      nama: item.nama,
      email: item.email,
      role: item.role,
    });

    setPopupOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
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

            <p className="text-gray-300 mt-2 whitespace-nowrap">
                Pengaduan Masyarakat
            </p>
          </div>

          <nav className="mt-14 flex flex-col gap-4">

            <button className="bg-white text-black px-5 py-4 rounded-2xl text-left font-semibold">
              Kelola User
            </button>

            <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition">
              Kelola Admin
            </button>

            <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition">
              Pengaduan
            </button>

            <button className="hover:bg-[#a00000] px-5 py-4 rounded-2xl text-left transition">
              Logout
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
              Super Admin Dashboard
            </h1>

          </div>

          <button
            onClick={() => {
              setPopupOpen(true);
              setEditId(null);

              setForm({
                nama: "",
                email: "",
                role: "User",
              });
            }}
            className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          >
            + Tambah User
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">
              Total User
            </p>

            <h2 className="text-4xl font-bold mt-3 text-black">
              {users.filter((item) => item.role === "User").length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">
              Total Admin
            </p>

            <h2 className="text-4xl font-bold mt-3 text-black">
              {users.filter((item) => item.role === "Admin").length}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">
              Total Akun
            </p>

            <h2 className="text-4xl font-bold mt-3 text-black">
              {users.length}
            </h2>
          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">
                <tr className="text-left text-black">

                  <th className="p-5">Nama</th>
                  <th className="p-5">Email</th>
                  <th className="p-5">Role</th>
                  <th className="p-5">Aksi</th>

                </tr>
              </thead>

              <tbody>

                {users.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t"
                  >

                    <td className="p-5 font-medium text-black">
                      {item.nama}
                    </td>

                    <td className="p-5 text-gray-600">
                      {item.email}
                    </td>

                    <td className="p-5">

                      <span
                        className={`
                          px-4 py-2 rounded-full text-sm
                          ${
                            item.role === "Admin"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        `}
                      >
                        {item.role}
                      </span>

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
                {editId ? "Edit User" : "Tambah User"}
              </h2>

              <div className="grid gap-6">

                <div>
                  <label className="text-sm text-gray-600">
                    Nama
                  </label>

                  <input
                    type="text"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Role
                  </label>

                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 text-black"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition"
              >
                {editId ? "Simpan Perubahan" : "Tambah User"}
              </button>

            </div>

          </div>
        )}

      </section>

    </main>
  );
}