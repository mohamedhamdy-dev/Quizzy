export default function Header() {
  return (
    <header className="relative w-full py-8 text-center">
      {/* 🌟 Gold Glow Background */}
      <div className="absolute inset-0 -z-10 mx-auto h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]"></div>

      {/* 💫 Subtle top lights */}
      <div className="absolute top-0 left-1/2 -z-20 h-32 w-64 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl"></div>

      {/* 🏆 App Title */}
      <h1 className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
        Ultimate Quiz Master
      </h1>

      {/* 📘 Subtitle */}
      <p className="mt-2 text-sm text-white/70 sm:text-lg">
        Test your knowledge. Challenge your brain. Earn your stars.
      </p>

      {/* ⚡ Decorative Divider */}
      <div className="mx-auto mt-6 h-[2px] w-40 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </header>
  );
}
