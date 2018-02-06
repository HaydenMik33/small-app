UPDATE favorites
SET name = $2,
birth = $3,
gender = $4,
species = $5,
planet = $6
WHERE favorites_id = $1
RETURNING *;