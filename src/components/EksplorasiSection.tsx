"use client";

import { motion, Variants } from "framer-motion";


const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const mapFeatures = [
  { icon: "📍", label: "Lokasi Strategis", desc: "Ciledug di jantung Tangerang" },
  { icon: "🏙️", label: "Kota yang Hidup", desc: "Pusat komersial 24 jam" },
  { icon: "🚌", label: "Akses Mudah", desc: "Terhubung ke Jakarta & BSD" },
  { icon: "🌿", label: "Nyaman Ditinggali", desc: "Komunitas warga yang aktif" },
];

export default function EksplorasiSection() {
  return (
    <section
      id="eksplorasi"
      className="min-h-screen py-24 bg-slate-900 text-white relative overflow-hidden"
      aria-label="Eksplorasi"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #0057FF 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-700/30">
            <span>🗺️</span>
            City Explorer
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Eksplorasi{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ciledug
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Kenali lebih dalam situasi dan kondisi kota Ciledug. Dari lokasi penting
            hingga kehidupan urban yang dinamis.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Embed Google Maps */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800"
          >
            <iframe
              src="https://www.google.com/maps?q=Ciledug,+Tangerang+City,+Banten&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Ciledug"
              className="absolute inset-0 grayscale-[20%] contrast-[110%] saturate-[120%]"
            />
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            } as Variants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {mapFeatures.map((f) => (
                <motion.div
                  key={f.label}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  } as Variants}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <h3 className="font-semibold text-white text-sm mb-1">{f.label}</h3>
                  <p className="text-slate-400 text-xs">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* About Ciledug */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              } as Variants}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20"
            >
              <h3 className="font-bold text-white text-lg mb-2">Tentang Ciledug</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ciledug adalah kecamatan di Kota Tangerang, Banten, yang berbatasan
                langsung dengan Jakarta Selatan. Kawasan ini dikenal sebagai pusat
                perdagangan, kuliner, dan permukiman padat dengan komunitas warga
                yang hangat dan gotong royong.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["#Ciledug", "#Tangerang", "#PortalLokal", "#InfoCiledug"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-lg bg-blue-900/40 text-blue-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
