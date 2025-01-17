START TRANSACTION;

DO $$

    DECLARE
_name VARCHAR := 'Giuseppe Foza';
        _email VARCHAR := 'jofender.foza@gmail.com';
        _password VARCHAR := '$2b$10$C5e72x.IaiB799aSxtXvqOEPu3euUS6d1reSEonyAT8SKh0xBqJai';
        _group_id uuid;
        _user_id uuid;

BEGIN

SELECT id INTO _group_id FROM user_schema.groups WHERE unique_name = 'ADMIN_MASTER';

insert into user_schema.users (
    name,
    email,
    password
) values (
             _name,
             _email,
             _password
         )
    RETURNING id into _user_id;

INSERT INTO user_schema.users_groups(group_id, user_id) VALUES (_group_id, _user_id);

END $$;
COMMIT;