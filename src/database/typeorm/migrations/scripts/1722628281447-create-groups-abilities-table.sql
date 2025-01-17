CREATE TABLE user_schema.groups_abilities
(
    id uuid default uuid_generate_v4() not null primary key,
    group_id uuid constraint "GroupsAbilitiesGroupId" references user_schema.groups on delete cascade,
    ability_id uuid constraint "GroupsAbilitiesAbilityId" references user_schema.abilities on delete cascade,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null
);