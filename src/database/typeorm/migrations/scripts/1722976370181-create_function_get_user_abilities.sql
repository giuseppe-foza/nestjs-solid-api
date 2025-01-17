CREATE OR REPLACE FUNCTION user_schema.get_user_abilities(_user_uuid UUID)
    RETURNS TABLE (
                      id UUID,
                      description VARCHAR,
                      subject VARCHAR,
                      action VARCHAR,
                      group_active BOOLEAN,
                      ability_active BOOLEAN
                  ) AS $$
BEGIN
RETURN QUERY
SELECT DISTINCT
    ua.id,
    ua.description,
    ua.subject,
    ua.action,
    ua.active AS ability_active,
    gr.active AS group_active
FROM user_schema.abilities ua
         JOIN user_schema.groups_abilities ga ON ga.ability_id = ua.id
         JOIN user_schema.groups gr ON gr.id = ga.group_id
         JOIN user_schema.users_groups uug ON uug.group_id = gr.id
         JOIN user_schema.users uu ON uu.id = uug.user_id
WHERE uu.id = _user_uuid
  AND gr.active = true
  AND ua.active = true
GROUP BY ua.id;
END;
$$ LANGUAGE plpgsql;