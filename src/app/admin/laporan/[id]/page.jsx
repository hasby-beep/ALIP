"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function DetailLaporanAdmin() {
  const { id } = useParams();
  const [laporan, setLaporan] = useState();
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      router.push("/login");
      return;
    }
    if (role !== "admin") {
      router.push("/home");
      return;
    }

    fetch(`http://localhost:5000/api/laporan/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        if (json.data) {
          setLaporan(json.data[0]);
          setStatus(json.data[0].status);
        }
      });
  }, [id]);

  const handleEditStatus = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }
    const res = await fetch(`http://localhost:5000/api/laporan/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (data.ok) {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Status Laporan Berhasil Diubah!",
        confirmButtonColor: "#06B6D4",
      });
    }
  };
  if (!laporan) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-white">
      <img
        src={`http://localhost:5000/gambar/${laporan.gambar}`}
        alt={laporan.judul}
      />
      <h1>{laporan.judul}</h1>
      <p>{laporan.deskripsi}</p>
      <p>📍 {laporan.lokasi}</p>
      <p>👤 {laporan.username}</p>

      {/* Dropdown status */}
      <div>
        <label>Status Laporan:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">-- Pilih Status --</option>
          <option value="Diterima">Diterima</option>
          <option value="Ditolak">Ditolak</option>
          <option value="Diproses">Diproses</option>
        </select>

        <button onClick={handleEditStatus}>Simpan Status</button>
      </div>
    </div>
  );
}
