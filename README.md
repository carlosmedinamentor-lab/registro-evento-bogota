# Registro Evento Bogotá — Taller IA (5 sept)

Landing estática de registro para el taller presencial "IA: De Cero a Ingresos" en la Cámara de Comercio de Bogotá.

## Estado

| Componente | Estado |
|---|---|
| HTML/CSS/JS de la landing | ✅ Desplegado en GitHub Pages |
| Assets (sello, foto, OG) | ✅ Optimizados y desplegados |
| DNS `registro.5000millas.com` | ⏳ **Falta que agregues el CNAME en Cloudflare** |
| Tabla Supabase | ⏳ **Falta que corras el SQL** |
| Credenciales Supabase en `config.js` | ⏳ **Falta que pegues URL + anon key** |
| Webhook n8n en `config.js` | ⏳ Opcional; pegalo cuando lo tengas |

## URLs

- **Producción (una vez activo DNS + Supabase):** https://registro.5000millas.com/
- **GitHub Pages directo (redirige al CNAME):** https://carlosmedinamentor-lab.github.io/registro-evento-bogota/
- **Repo:** https://github.com/carlosmedinamentor-lab/registro-evento-bogota

## 3 pasos para activar

### 1. DNS en Cloudflare

En el panel de Cloudflare para `5000millas.com`, agregá:

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `registro` | `carlosmedinamentor-lab.github.io` | DNS only (nube gris) |

Importante: **DNS only, no proxy**, para que GitHub emita el certificado SSL automáticamente. Podés activar el proxy naranja después, si querés.

### 2. Supabase: crear la tabla

- Entrá al proyecto Supabase que vas a usar → SQL Editor.
- Pegá el contenido de [`registros_evento_bogota.sql`](./registros_evento_bogota.sql) y corré.
- Copiá `Project URL` y `anon public key` desde Settings → API.

### 3. Pegar credenciales en `config.js`

Editá [`config.js`](./config.js):

```js
window.__REGISTRO_CONFIG__ = {
  SUPABASE_URL: 'https://TU_PROYECTO.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_...',
  WEBHOOK_URL: ''  // opcional, pegar cuando tengas el n8n
};
```

`git commit -am "config: activar Supabase" && git push`. GitHub Pages redeploya en <2 min.

## Cómo funciona el submit

Cliente (JS) → Supabase REST API (upsert con `on_conflict=correo`, autorizado por RLS INSERT policy para `anon`) → si `WEBHOOK_URL` está definido, dispara POST a n8n en fire-and-forget con `keepalive`.

Anti-spam: honeypot oculto (`empresa_web`). Si viene relleno, se muestra éxito silencioso sin insertar.

## Cambiar el webhook

Editar `config.js` → commit + push. Zero downtime.

## Assets

- `logo-sello.webp` (86 KB) — sello dorado.
- `carlos-medina.jpg` (104 KB) + `carlos-medina-mobile.jpg` (28 KB) — retrato responsive.
- `og.jpg` (96 KB, 1200×630) — imagen para compartir.
