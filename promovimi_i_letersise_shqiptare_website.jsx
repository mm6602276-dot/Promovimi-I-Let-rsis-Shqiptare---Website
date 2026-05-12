/*
  Senior-Level React Project: Promovimi i Letërsisë Shqiptare
  Refactored Architecture:
  - Home: Rich historical + aesthetic intro (girly pop pastel + cultural tone)
  - Learn: Literature explorer with images per era
  - Clean separation of concerns
*/

import { useState } from "react";

// ===================== DATA =====================
const literatureSections = [
  {
    id: "medieval",
    title: "Letërsia Mesjetare",
    image: "https://source.unsplash.com/800x600/?ancient,manuscript,book",
    description: "Fillimet e shkrimit shqip dhe tekstet e para fetare e kulturore.",
    entries: [
      { author: "Gjon Buzuku", book: "Meshari" },
      { author: "Pjetër Bogdani", book: "Çeta e Profetëve" },
      { author: "Pjetër Budi", book: "Doktrina e Krishterë" },
      { author: "Lekë Matrënga", book: "E mbësuame e krishterë" },
      { author: "Jul Variboba", book: "Ghiella e Shën Mërisë" }
    ]
  },
  {
    id: "renaissance",
    title: "Rilindja Kombëtare",
    image: "https://source.unsplash.com/800x600/?renaissance,history,book",
    description: "Periudha e zgjimit kombëtar dhe zhvillimit të gjuhës shqipe.",
    entries: [
      { author: "Naim Frashëri", book: "Bagëti e Bujqësi" },
      { author: "Sami Frashëri", book: "Shqipëria ç'ka qenë, ç'është" },
      { author: "Andon Zako Çajupi", book: "Baba Tomorri" },
      { author: "Ndre Mjeda", book: "Juvenilia" },
      { author: "Asdreni", book: "Ëndrra e Lotë" }
    ]
  },
  {
    id: "modern",
    title: "Letërsia Moderne",
    image: "https://source.unsplash.com/800x600/?library,old,books",
    description: "Zhvillimi i prozës dhe poezisë moderne shqiptare.",
    entries: [
      { author: "Ismail Kadare", book: "Gjenerali i Ushtrisë së Vdekur" },
      { author: "Migjeni", book: "Vargje të Lira" },
      { author: "Dritëro Agolli", book: "Komisari Memo" },
      { author: "Fatos Arapi", book: "Më jepni një emër" },
      { author: "Lasgush Poradeci", book: "Vallja e Yjeve" }
    ]
  },
  {
    id: "contemporary",
    title: "Letërsia Bashkëkohore",
    image: "https://source.unsplash.com/800x600/?modern,reading,book",
    description: "Autorë modernë dhe zhvillimi i letërsisë pas viteve '90.",
    entries: [
      { author: "Ben Blushi", book: "Të jetosh në ishull" },
      { author: "Fatos Kongoli", book: "I humburi" },
      { author: "Rudi Erebara", book: "Epika e Yjeve" },
      { author: "Ornela Vorpsi", book: "The Country Where No One Ever Dies" },
      { author: "Gazmend Kapllani", book: "A Short Border Handbook" }
    ]
  }
];

// ===================== MAIN APP =====================
export default function App() {
  const [page, setPage] = useState("home");
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3a2f28] via-[#4b3d34] to-[#2d241f] text-[#f4ead7]">

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-4 bg-[#4b3d34] border-b border-[#c7a96b] shadow-lg">
        <h1 className="text-[#d4af37] font-bold text-xl tracking-wide">
          📚 Letërsia Shqiptare
        </h1>
        <div className="space-x-4 font-semibold text-[#f5e6c8]">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("learn")}>Learn</button>
        </div>
      </div>

      {/* ================= HOME ================= */}
      {page === "home" && (
        <div className="p-10 max-w-5xl mx-auto">

          <h2 className="text-5xl text-center text-[#d4af37] font-extrabold mb-6">
            Letërsia Shqiptare
          </h2>

          <p className="text-center text-lg leading-relaxed text-[#f1e2c4] bg-[#5a4a3f] p-6 rounded-2xl shadow-xl border border-[#d4af37]">
            Letërsia shqiptare është një udhëtim emocional dhe historik që përfshin shekuj të tërë krijimtarie.
            Ajo fillon me dorëshkrimet e para mesjetare, kalon në epokën e Rilindjes Kombëtare ku u formësua
            identiteti shqiptar, dhe arrin deri në letërsinë moderne dhe bashkëkohore që njihet edhe ndërkombëtarisht.
            Kjo platformë është krijuar për ta bërë këtë trashëgimi më të bukur, më të thjeshtë dhe më interaktive 
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-[#8a6b4a] p-4 rounded-xl shadow text-[#f5e6c8]">
              📖 Shekuj historie letrare
            </div>
            <div className="bg-[#65798f] p-4 rounded-xl shadow text-[#f5e6c8]">
              ✨ Autorë legjendarë shqiptarë
            </div>
            <div className="bg-[#b08a3c] p-4 rounded-xl shadow text-[#f5e6c8]">
              🌍 Trashëgimi kulturore globale
            </div>
          </div>
        </div>
      )}

      {/* ================= LEARN ================= */}
      {page === "learn" && (
        <div className="p-8">

          <h2 className="text-3xl text-center text-[#d4af37] mb-6 font-bold">
            📚 Eksploro Letërsinë
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {literatureSections.map((sec) => (
              <div
                key={sec.id}
                onClick={() => setSelectedSection(sec)}
                className="cursor-pointer rounded-2xl shadow-xl hover:scale-105 transition overflow-hidden border border-[#d4af37]"
              >
                <div className={`w-full h-40 flex items-center justify-center text-3xl font-bold tracking-wide ${sec.id === 'medieval' ? 'bg-[#8a6b4a] text-[#f5e6c8]' : sec.id === 'renaissance' ? 'bg-[#65798f] text-[#f5e6c8]' : sec.id === 'modern' ? 'bg-[#b08a3c] text-[#f5e6c8]' : 'bg-[#7b5d73] text-[#f5e6c8]'}`}>
                  {sec.title}
                </div>
                <div className="p-4 bg-[#5a4a3f]">
                  <h3 className="text-xl font-bold text-[#d4af37]">{sec.title}</h3>
                  <p className="text-sm text-[#f0e2c2] mt-2">
                    {sec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* DETAIL VIEW */}
          {selectedSection && (
            <div className="mt-8 p-6 bg-[#5a4a3f] rounded-2xl shadow-2xl border border-[#d4af37]">

              <h3 className="text-2xl font-bold text-[#d4af37] mb-3">
                {selectedSection.title}
              </h3>

              <p className="mb-4 text-[#f8ecd1]">
                {selectedSection.description}
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {selectedSection.entries.map((e, i) => (
                  <div key={i} className="bg-[#6a594d] p-3 rounded-xl border border-[#d4af37]">
                    <p className="font-bold text-[#d4af37]">{e.author}</p>
                    <p className="text-sm">📖 {e.book}</p>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      )}
    </div>
  );
}
