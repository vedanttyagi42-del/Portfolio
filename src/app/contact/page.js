"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-[#0b0b0b] border border-[#1f1f1f] rounded-2xl p-10 shadow-[0_0_40px_#0ff2]">
        <h1 className="text-4xl font-bold text-center">
          Let’s <span className="text-cyan-400">Connect</span>
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Feel free to reach out for collaborations, projects, or learning opportunities.
        </p>

        <div className="mt-10 space-y-6">
          <div className="w-full flex items-center justify-between border border-[#222] rounded-xl px-6 py-4">
            <span className="text-gray-400">Email</span>
            <span className="text-white font-medium">vedanttyagi42@gmail.com</span>
          </div>

          <div className="w-full flex items-center justify-between border border-[#222] rounded-xl px-6 py-4">
            <span className="text-gray-400">Phone</span>
            <span className="text-white font-medium">+919455166341 +917007798526</span>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          I usually respond within 24 hours.
        </p>
      </div>
    </main>
  );
}
