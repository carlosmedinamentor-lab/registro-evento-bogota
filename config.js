// ============================================================
// Config pública de la landing.
//
// ⚠️ ANTES DE IR A PRODUCCIÓN:
//   1. Poné SUPABASE_URL y SUPABASE_ANON_KEY del proyecto donde corriste
//      el DDL de registros_evento_bogota.sql. Son públicos por diseño
//      (van al navegador en cualquier app Supabase). La seguridad la da
//      la policy RLS (INSERT permitido a rol anon, SELECT bloqueado).
//   2. Opcional: cuando tengas la URL del webhook de n8n, pegala en
//      WEBHOOK_URL. Empty = webhook desactivado (form igual funciona).
//   3. git commit + push. GitHub Pages redeploya en <2min.
// ============================================================
window.__REGISTRO_CONFIG__ = {
  SUPABASE_URL: 'https://hvtmujeeaxoskntkkldm.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dG11amVlYXhvc2tudGtrbGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMTQ5ODYsImV4cCI6MjEwMzg5MDk4Nn0.shH2tx3FEt9G-lnrCLF60gb8fwbeV3UA_bPB55yhzA0',
  WEBHOOK_URL: ''
};
