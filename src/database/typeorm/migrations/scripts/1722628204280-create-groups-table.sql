CREATE SCHEMA IF NOT EXISTS user_schema;

create table user_schema.groups
(
    id uuid default uuid_generate_v4() not null primary key,
    description varchar not null,
    unique_name varchar unique not null,
    active boolean default true,
    created_at  timestamp default now() not null,
    updated_at  timestamp default now() not null
);
