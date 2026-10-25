export const site = {
  name: "Alpha Gym",
  city: "Kota Bharu",
  tagline: "Kekuatan. Disiplin. Hasil.",
  whatsapp: "60123456789",
  phone: "+60123456789",
  phoneDisplay: "012-345 6789",
  whatsappMessage: "Hi Alpha Gym, saya nak tahu lebih lanjut tentang keahlian.",
  address: {
    line1: "Level 5, Wisma TCH",
    line2: "Jln Tok Guru, 15400 Kota Bharu",
    state: "Kelantan",
    landmark: "Bersebelahan PK Corner Restaurant, berhadapan Dewan Perniagaan Cina",
    mapsUrl: "https://maps.google.com/?q=Alpha+Gym+Kota+Bharu",
  },
  hours: {
    days: "Isnin – Ahad",
    time: "7:00 pagi – 12:00 malam",
    note: "Buka setiap hari, termasuk cuti umum",
  },
  social: {
    instagram: "https://instagram.com/alphagymkotabharu",
    tiktok: "https://tiktok.com/@alpha.gym.kota.bh",
  },
  rating: {
    score: "5.0",
    count: "10+",
  },
};

export const waLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message ?? site.whatsappMessage,
  )}`;
