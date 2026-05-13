"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Top Section */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="/favicon.png" 
                alt="Info Ciledug Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="font-bold text-lg text-white tracking-tight">Info Ciledug</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Portal informasi lokal terpercaya untuk warga Ciledug dan sekitarnya. Terus update, terus terhubung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Navigasi</h3>
            <ul className="space-y-2">
              {["Beranda", "Kabar Terkini", "Kuliner", "Eksplorasi"].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => {
                      const id = label.toLowerCase().replace(/ /g, "-");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Ikuti Kami</h3>
            <a
              href="https://www.instagram.com/infociledug.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-pink-900/30 transition-all hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white"/>
              </svg>
              Instagram
            </a>
            <p className="text-slate-500 text-xs mt-3">@infociledug.id</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {year} Info Ciledug. Untuk warga, dari warga.
          </p>
          <p className="text-slate-600 text-xs">
            Dibuat dengan ❤️ untuk Ciledug
          </p>
        </div>
      </div>
    </footer>
  );
}
