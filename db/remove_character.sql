DELETE FROM favorites WHERE favorites_id = $1
RETURNING *;