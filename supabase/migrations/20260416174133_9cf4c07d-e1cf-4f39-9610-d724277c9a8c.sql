insert into storage.buckets (id, name, public)
values ('social-media', 'social-media', true);

create policy "Public read access"
on storage.objects for select
using (bucket_id = 'social-media');

create policy "Allow uploads"
on storage.objects for insert
with check (bucket_id = 'social-media');

create policy "Allow deletes"
on storage.objects for delete
using (bucket_id = 'social-media');

create table public.social_media (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('rowing', 'tiktok', 'facebook', 'instagram')),
  file_path text not null,
  file_type text not null,
  created_at timestamptz default now()
);

alter table public.social_media enable row level security;

create policy "Anyone can view media"
on public.social_media for select
to anon, authenticated
using (true);

create policy "Anyone can insert media"
on public.social_media for insert
to anon, authenticated
with check (true);

create policy "Anyone can delete media"
on public.social_media for delete
to anon, authenticated
using (true);