-- 1. Roles enum + user_roles table (best practice — never store roles on profiles)
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to avoid recursive RLS
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. Tighten social_media RLS — public can read, only admins can write
DROP POLICY IF EXISTS "Anyone can insert media" ON public.social_media;
DROP POLICY IF EXISTS "Anyone can delete media" ON public.social_media;

CREATE POLICY "Admins can insert media"
  ON public.social_media FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete media"
  ON public.social_media FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 3. Storage policies for social-media bucket — public read, admin write/delete
DROP POLICY IF EXISTS "Anyone can upload to social-media" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete from social-media" ON storage.objects;

CREATE POLICY "Admins can upload to social-media"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'social-media' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete from social-media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'social-media' AND public.has_role(auth.uid(), 'admin'));