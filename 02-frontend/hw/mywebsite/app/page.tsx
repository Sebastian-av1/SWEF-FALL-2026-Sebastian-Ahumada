export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-emerald-400">Sebastian Ahumada</h1>

        <p className="text-white py-6">
          I am a student at Northeastern. I grew up in Mexico, went to school in
          Canada, now live in Boston. I joined SWEF to learn
          about software engineering and potentially join the SWE track.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/Sebastian-av1" className="text-emerald-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sebastian-ahumada-villa-1abb40387/" className="text-emerald-400">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
