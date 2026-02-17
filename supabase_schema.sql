-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Properties Table
create table public.properties (
  id text primary key,
  title text not null,
  slug text unique not null,
  description text,
  price numeric,
  type text check (type in ('sale', 'rent')),
  bhk numeric,
  location jsonb, -- { area, city, address, tower, floor }
  amenities jsonb, -- [{ icon, label }]
  images text[],
  project_images text[],
  stats jsonb, -- { bathrooms, areaSqFt }
  is_featured boolean default false,
  status text check (status in ('LISTED', 'SOLD', 'ARCHIVED')),
  
  -- Seller/Developer Info
  seller_name text,
  developer_name text,
  contact_details jsonb, -- { phone, email }
  
  -- Details
  highlights text,
  connectivity text,
  usage_type text check (usage_type in ('RESIDENTIAL', 'COMMERCIAL')),
  construction_status text,
  possession_date text,
  view_orientation text,
  environmental_scores jsonb, -- { light, noise, air }
  audit_score numeric,
  
  -- Media
  virtual_tour_url text,
  master_plan_url text,
  floor_plan_url text,
  map_url text,
  
  -- Configurations
  configurations jsonb, -- [{ configuration, price, area }]
  
  -- RERA
  rera_number text,
  rera_qr text,
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Submissions Table
create table public.submissions (
  id text primary key,
  seller_id text,
  society_id text,
  tower text,
  floor numeric,
  carpet_area numeric,
  status text check (status in ('PENDING', 'VALUATED', 'AUDITING', 'REJECTED', 'APPROVED')),
  valuation_amount numeric,
  
  -- Contact
  seller_name text,
  developer_name text,
  contact_details jsonb,
  
  -- Property Details for Listing
  property_name text,
  description text,
  location text, -- simple string or jsonb
  amenities text[], -- array of strings
  image text, -- cover image
  project_images text[],
  
  -- Media
  virtual_tour_url text,
  master_plan_url text,
  floor_plan_url text,
  map_url text,
  
  -- Configurations
  configurations jsonb,
  highlights text,
  connectivity text,
  
  -- RERA
  rera_number text,
  rera_qr text,
  
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Inquiries Table
create table public.inquiries (
  id uuid default uuid_generate_v4() primary key,
  property_id text references public.properties(id),
  name text not null,
  email text,
  phone text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Societies Table (Optional, for now just basic text or referenced in generic ways)
create table public.societies (
  id text primary key,
  name text not null,
  area text,
  city text,
  environmental_scores jsonb
);

-- Settings Table (for Filters)
create table public.settings (
  id int primary key default 1,
  filter_settings jsonb,
  check (id = 1) -- Ensure singleton
);

-- Insert Default Settings
insert into public.settings (id, filter_settings)
values (1, '{
    "bhkOptions": ["2 BHK", "2.5 BHK", "3 BHK", "4 BHK"],
    "bathOptions": ["2 Bath", "3 Bath", "4 Bath"],
    "assuranceLabels": ["Legally cleared", "Fully refurbished", "Ready-to-move in"],
    "locations": ["Worli", "Parel", "Lower Parel", "Dadra", "Byculla", "Prabhadevi"],
    "sortOptions": [
        { "id": "relevance", "label": "Relevance" },
        { "id": "price-asc", "label": "Price: Low to High" },
        { "id": "price-desc", "label": "Price: High to Low" },
        { "id": "area-desc", "label": "Area: Largest First" }
    ],
    "priceSettings": { "min": 1, "max": 20, "step": 0.5 }
}'::jsonb)
on conflict (id) do nothing;

-- Enable Row Level Security (RLS)
alter table public.properties enable row level security;
alter table public.submissions enable row level security;
alter table public.inquiries enable row level security;
alter table public.settings enable row level security;

-- Policies (Public Read, Anon Write for Development)
-- For a real production app, you would lock this down with auth.
-- Allowing public read for properties
create policy "Public properties are viewable by everyone" on public.properties for select using (true);
create policy "Anon can insert submissions" on public.submissions for insert with check (true);
create policy "Anon can read submissions" on public.submissions for select using (true); -- For dashboard demo
create policy "Anon can update submissions" on public.submissions for update using (true); -- For dashboard demo
create policy "Anon can delete submissions" on public.submissions for delete using (true); -- For dashboard demo

create policy "Anon can insert properties" on public.properties for insert with check (true); -- For admin demo
create policy "Anon can update properties" on public.properties for update using (true);
create policy "Anon can delete properties" on public.properties for delete using (true);

create policy "Public settings are viewable by everyone" on public.settings for select using (true);
create policy "Anon can update settings" on public.settings for update using (true);
