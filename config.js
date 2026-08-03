(function(){
  const defaults = {
    SUPABASE_URL: "YOUR_SUPABASE_PROJECT_URL",
    SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY",
    STORAGE_BUCKET: "menu-images",
    DEFAULT_LANGUAGE: "lo",
    RESTAURANT: {
      nameLao: "ຊື່ຮ້ານອາຫານ", nameThai: "ชื่อร้านอาหาร", nameEnglish: "YOUR RESTAURANT",
      phoneDisplay: "020 0000 0000", phoneIntl: "8562000000000", whatsappIntl: "8562000000000",
      facebookName: "Your Facebook Page", mapsUrl: "YOUR_GOOGLE_MAPS_LINK",
      addressLao: "ໃສ່ທີ່ຢູ່ຮ້ານ", openingHours: "09:00–18:30"
    }
  };
  try {
    const profiles=JSON.parse(localStorage.getItem('restaurant_template_profiles')||'[]');
    const activeId=localStorage.getItem('restaurant_template_active_profile');
    const active=profiles.find(x=>x.id===activeId);
    window.TPG_CONFIG=active?{...defaults,...active,RESTAURANT:{...defaults.RESTAURANT,...(active.RESTAURANT||{})}}:defaults;
  } catch(e){ window.TPG_CONFIG=defaults; }
})();
