import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <header className="mx-auto mb-8 flex w-full max-w-6xl items-center justify-between rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">LAPOR !</p>
          <h1 className="text-2xl font-semibold text-slate-900">Pengaduan Masyarakat</h1>
        </div>
        <div className="flex gap-3">
          <Link href ="/login">
            <button className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
              Masuk
            </button>
          </Link>
          <Link href ="/register">
            <button className="rounded-full bg-green-800 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-900">
              Daftar
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#d8cccc] px-6 py-12 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-black mb-4">
            Pengaduan Masyarakat
          </h2>
        
          <p className="text-gray-700 mb-8 leading-relaxed">
            Lapor bukan berarti mengeluh, tapi wujud kepedulianmu terhadap
            kemajuan daerahmu.
          </p>

          <button className="bg-green-800 text-white px-8 py-3 rounded-2xl hover:bg-green-900 transition">
            Lihat Selengkapnya
          </button>
        </div>

        <div className="mt-6 md:mt-0">
          <img
  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  alt="hero"
  className="w-[320px]"
/>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-0 py-10">
        <div className="bg-[#d8cccc] rounded-[30px] p-8 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="flex-1 flex justify-center items-center">
            <h2 className="text-5xl font-bold text-black leading-tight">
              Sampaikan <br /> Laporan Anda
            </h2>
          </div>

          {/* Form Card */}
          <div className="bg-white w-full md:w-[500px] rounded-3xl shadow-lg p-6">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Ketik laporan anda"
                className="border border-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
              />

              <textarea
                placeholder="Isi laporan"
                rows={6}
                className="border border-gray-400 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-700"
              ></textarea>

              <input
                type="text"
                placeholder="Kategori"
                className="border border-gray-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 py-2 rounded-xl hover:bg-green-900 transition"
                >
                  Lapor
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-green-800 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-900 transition">
          Talk to us
        </button>
      </div>
    </div>
  );
}

