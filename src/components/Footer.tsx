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
                alt="Info Ciledug.id Logo" 
                className="w-10 h-10 object-contain" 
              />
              <span className="font-bold text-lg text-white tracking-tight">Info Ciledug.id</span>
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
            <a
              href="https://wa.me/6285754976351"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-green-500 text-xs mt-2 transition-colors group"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.651zm6.59-4.819c1.414.843 3.058 1.288 4.734 1.289 4.966 0 9.007-4.041 9.01-9.007.001-2.407-.936-4.671-2.637-6.37s-3.965-2.637-6.37-2.638c-4.969 0-9.01 4.041-9.013 9.008-.001 1.761.516 3.479 1.494 4.992l-.995 3.637 3.781-.991zm11.726-6.705c-.273-.137-1.62-.8-1.87-.892-.25-.092-.43-.137-.61.137-.18.273-.69.892-.845 1.074-.155.183-.311.206-.584.069-.273-.137-1.155-.426-2.2-1.359-.812-.724-1.36-1.618-1.519-1.892-.159-.274-.017-.422.12-.558.123-.122.273-.319.41-.479.137-.16.183-.274.274-.457.091-.183.045-.343-.023-.479-.068-.137-.61-1.463-.836-2.012-.22-.53-.443-.459-.61-.468l-.52-.008c-.18 0-.474.068-.721.343-.247.274-.942.921-.942 2.246s.965 2.603 1.098 2.786c.133.183 1.9 2.901 4.599 4.065.642.277 1.144.443 1.534.567.645.205 1.232.176 1.696.107.518-.077 1.62-.663 1.848-1.303.228-.639.228-1.188.16-1.303-.069-.115-.25-.183-.523-.319z"/>
              </svg>
              0857-5497-6351
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {year} Info Ciledug.id. Untuk warga, dari warga.
          </p>
          <p className="text-slate-600 text-xs">
            Dibuat dengan ❤️ untuk Ciledug
          </p>
        </div>
      </div>
    </footer>
  );
}
