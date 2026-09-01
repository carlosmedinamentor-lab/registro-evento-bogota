# Registro Evento Bogotá — 5 sept

Landing estática de registro para el taller presencial "IA: De Cero a Ingresos" (Bogotá, 5 de septiembre 2026).

- **URL final:** https://registro.5000millas.com/
- **Deploy:** GitHub Pages sobre la rama `main` (raíz del repo).
- **Backend:** Supabase (proyecto `fjrventlhrdpapsqyiac`, tabla `registros_evento_bogota`, RLS anon-insert).
- **Webhook n8n:** editable en [`config.js`](./config.js) — `WEBHOOK_URL`. Vacío por defecto.

## Cómo funciona el submit

Cliente → Supabase REST API (upsert on_conflict=`correo`, RLS INSERT policy para `anon`) → si `WEBHOOK_URL` está definido, dispara POST a n8n en fire-and-forget.

## Requisitos operativos

1. Correr el DDL una vez en el editor SQL de Supabase (proyecto `fjrventlhrdpapsqyiac`): ver [`registros_evento_bogota.sql`](./registros_evento_bogota.sql).
2. En DNS de `5000millas.com` (Cloudflare / registrar):
   - `registro` `CNAME` → `carlosmedinamentor-lab.github.io.`
3. En GitHub → Settings → Pages: activar Pages sobre `main` / `/`, esperar cert SSL.

## Cambiar el webhook

Editar `config.js`, commit + push. GitHub Pages redeploya en <2min.

## Assets

- `logo-sello.webp` (86 KB) — sello dorado.
- `carlos-medina.jpg` (104 KB), `carlos-medina-mobile.jpg` (28 KB) — retrato en dos tamaños.
- `og.jpg` (96 KB, 1200×630) — imagen para compartir.
