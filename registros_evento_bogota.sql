-- =====================================================================
-- Tabla: registros_evento_bogota
-- Propósito: capturar inscripciones de la landing /registro-evento-bogota
-- Fecha: 2026-09-01 (para evento 5 sept)
-- Correr una sola vez en el editor SQL de Supabase (proyecto fjrventlhrdpapsqyiac).
-- =====================================================================

create extension if not exists "pgcrypto";

create table if not exists public.registros_evento_bogota (
  id            uuid primary key default gen_random_uuid(),
  creado_en     timestamptz not null default now(),
  nombre        text not null,
  whatsapp      text not null,
  correo        text not null,
  ocupacion     text,
  localidad     text,
  origen        text not null default 'landing-registro',
  estado        text not null default 'registrado',
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  ip            text,
  user_agent    text
);

-- Deduplicación por correo (upsert lo usa)
create unique index if not exists registros_evento_bogota_correo_uidx
  on public.registros_evento_bogota (lower(correo));

-- Índice secundario para lookup rápido por whatsapp
create index if not exists registros_evento_bogota_whatsapp_idx
  on public.registros_evento_bogota (whatsapp);

-- RLS: habilitado, con INSERT y UPSERT permitido a anon (para el submit público).
-- SELECT bloqueado a anon (los leads no se leen desde el navegador).
alter table public.registros_evento_bogota enable row level security;

drop policy if exists "anon puede insertar registros"
  on public.registros_evento_bogota;
create policy "anon puede insertar registros"
  on public.registros_evento_bogota
  for insert
  to anon
  with check (true);

drop policy if exists "anon puede upsertear (update sobre correo existente)"
  on public.registros_evento_bogota;
create policy "anon puede upsertear (update sobre correo existente)"
  on public.registros_evento_bogota
  for update
  to anon
  using (true)
  with check (true);

-- Nada de SELECT/DELETE para anon. Solo service_role y authenticated pueden leer.
