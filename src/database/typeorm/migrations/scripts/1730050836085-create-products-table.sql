CREATE SCHEMA IF NOT EXISTS product_schema;

create table product_schema.products
(
    id uuid default uuid_generate_v4() not null primary key,
    description varchar not null,
    details text,
    value decimal(6,2) not null default 0.00,
    quantity bigint not null default 0,
    balance bigint not null default 0,
    active boolean not null default true,
    creator_id uuid,
    updater_id uuid,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null
);