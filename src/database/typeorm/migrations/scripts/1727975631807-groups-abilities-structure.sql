DO $$
    DECLARE
_view_action   varchar := 'VIEW';
        _insert_action varchar := 'INSERT';
        _update_action varchar := 'UPDATE';
        _remove_action varchar := 'REMOVE';
        _upload_action varchar := 'UPLOAD';

        -- PROFILES
        _profile1 uuid := uuid_generate_v4();
        _profile2 uuid := uuid_generate_v4();
        _profile3 uuid := uuid_generate_v4();

        -- ABILITIES
        _ability1 uuid := uuid_generate_v4();
        _ability2 uuid := uuid_generate_v4();
        _ability3 uuid := uuid_generate_v4();
        _ability4 uuid := uuid_generate_v4();
        _ability5 uuid := uuid_generate_v4();

BEGIN
INSERT INTO user_schema.abilities (id, description, subject, action)
VALUES
    (_ability1, 'ROOT', 'ROOT', _view_action),
    (_ability2, 'PRODUCTS_VIEW', 'PRODUCTS', _view_action),
    (_ability3, 'PRODUCTS_CREATE', 'PRODUCTS', _insert_action),
    (_ability4, 'PRODUCTS_UPDATE', 'PRODUCTS', _update_action),
    (_ability5, 'PRODUCTS_REMOVE', 'PRODUCTS', _remove_action)
;

INSERT INTO user_schema.groups (id, description, unique_name)
VALUES
    (
        _profile1,
        'Admin Master',
        'ADMIN_MASTER'
    ),
    (
        _profile2,
        'Colaborador',
        'EMPLOYEE'
    ),
    (
        _profile3,
        'Cliente',
        'CUSTOMER'
    );

INSERT INTO user_schema.groups_abilities (group_id, ability_id)
VALUES
    -- ADMIN MASTER
    (_profile1, _ability1),
    (_profile1, _ability2),
    (_profile1, _ability3),
    (_profile1, _ability4),
    (_profile1, _ability5)
;
END $$;
