// Config pública de la landing.
// SUPABASE_URL y SUPABASE_ANON_KEY son públicos por diseño (van al navegador en cualquier app Supabase);
// la seguridad la da la policy RLS (INSERT permitido a rol anon, SELECT bloqueado).
// WEBHOOK_URL: cuando tengas la URL del webhook de n8n, pégala acá y hacé commit. No hace falta redeploy manual.
window.__REGISTRO_CONFIG__ = {
  SUPABASE_URL: 'https://fjrventlhrdpapsqyiac.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_bzZ70mImvFJU-2OStuFKSw_WvhtbBwT',
  WEBHOOK_URL: ''
};
