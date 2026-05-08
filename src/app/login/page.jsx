import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#154d08] flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-white text-6xl font-bold mb-12">
        Lapor !
      </h1>

      {/* Card */}
      <div className="bg-black w-full max-w-lg rounded-3xl shadow-[0_20px_30px_rgba(0,0,0,0.25)] p-8">
        
        {/* Input Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-500 rounded-2xl px-5 py-4 mb-5 outline-none bg-transparent text-lg"
        />

        {/* Input Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-500 rounded-2xl px-5 py-4 mb-12 outline-none bg-transparent text-lg"
        />

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#154d08] text-white text-3xl font-bold px-24 py-3 rounded-2xl hover:scale-105 transition duration-300">
            Login
          </button>
        </div>

        {/* Register Text */}
        <p className="text-center text-gray-500 mt-4 text-lg">
          Don’t have account?{" "}
          <Link href="/register">
            <button className="cursor-pointer hover:underline">
              Register
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}