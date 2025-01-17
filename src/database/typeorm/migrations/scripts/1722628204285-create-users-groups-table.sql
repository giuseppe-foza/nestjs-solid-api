CREATE TABLE user_schema.users_groups
(
    id uuid default uuid_generate_v4() not null primary key,
    group_id uuid constraint "UsersGroupsGroupIdFk" references user_schema.groups on delete cascade,
    user_id uuid constraint "UsersGroupsUserIdFk" references user_schema.users on delete cascade,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null
);
