"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function App() {
  const router = useRouter();
  const handleAlert = () => {
    Swal.fire({
      title: "Sudah Punya Akun?",
      text: "Kalau Belum Silahkan Register",
      icon: "question", // success, error, warning, info
      showCancelButton: true,
      confirmButtonText: "Register",
      cancelButtonText: "Login",
      confirmButtonColor: "#06B6D4",
      cancelButtonColor: "gray",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/register");
      } else if (
        result.isDismissed &&
        result.dismiss === Swal.DismissReason.cancel
      ) {
        router.push("/login");
      }
    });
  };
  return (
    <div className="min-h-screen bg-[#F0F9FF] px-4 py-8 text-[#0F172A] font-sans">
      {/* Header Section */}
      <header className="mx-auto mb-8 flex w-full max-w-6xl items-center justify-between rounded-[32px] bg-white p-6 shadow-xl shadow-cyan-100 border border-cyan-50">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#06B6D4] font-bold">
            LAPOR !
          </p>
          <h1 className="text-2xl font-bold text-[#0F172A]">
            Pengaduan Masyarakat
          </h1>
        </div>
        <div className="flex gap-4">
          <Link href={"/register"}>
            <button className="rounded-full border-2 border-cyan-100 bg-white px-6 py-2 text-sm font-bold text-[#0891B2] transition hover:bg-cyan-50">
              Register
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="rounded-full bg-[#06B6D4] px-6 py-2 text-sm font-bold text-white transition hover:bg-[#0891B2] shadow-md shadow-cyan-200">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] px-10 py-16 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-cyan-200">
        <div className="max-w-md text-white">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Suaramu, <br />
            Perubahan Kita.
          </h2>
          <p className="text-cyan-50 mb-10 text-lg leading-relaxed opacity-90">
            Lapor bukan berarti mengeluh, tapi wujud kepedulianmu terhadap
            kemajuan daerahmu. Mari bangun masa depan yang lebih baik.
          </p>
          <button
            onClick={handleAlert}
            className="bg-white text-[#0891B2] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#F0F9FF] transition transform hover:scale-105 shadow-lg"
          >
            Lihat Selengkapnya
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="hero"
            className="w-[350px] relative z-10 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="mx-auto max-w-6xl px-0 py-16">
        <div className="bg-white border border-cyan-100 rounded-[40px] p-10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl shadow-cyan-50">
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold text-[#0F172A] leading-tight">
              Sampaikan <br />
              <span className="text-[#06B6D4]">Laporan Anda</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Proses cepat, transparan, dan terpercaya.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#F0F9FF] w-full lg:w-[550px] rounded-3xl p-8 flex flex-col gap-5 border border-cyan-100">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Judul laporan"
                className="w-full border-2 border-white rounded-2xl px-5 py-4 outline-none focus:border-[#06B6D4] bg-white transition-all shadow-sm"
              />

              <textarea
                placeholder="Isi detail laporan anda secara lengkap..."
                rows={5}
                className="w-full border-2 border-white rounded-2xl px-5 py-4 outline-none focus:border-[#06B6D4] bg-white resize-none transition-all shadow-sm"
              ></textarea>

              <input
                type="text"
                placeholder="Pilih Kategori (Infrastruktur, Kebersihan, dll)"
                className="w-full border-2 border-white rounded-2xl px-5 py-4 outline-none focus:border-[#06B6D4] bg-white transition-all shadow-sm"
              />
            </form>
            <div className="flex justify-end mt-2">
              <button
                onClick={handleAlert}
                className="bg-[#06B6D4] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#0891B2] transition transform hover:-translate-y-1 shadow-lg shadow-cyan-200"
              >
                Kirim Laporan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#0F172A] text-white px-8 py-4 rounded-full shadow-2xl hover:bg-[#06B6D4] transition-all duration-300 flex items-center gap-3 group">
          <span className="font-bold">Talk to us</span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </button>
      </div>
    </div>
  );
}
