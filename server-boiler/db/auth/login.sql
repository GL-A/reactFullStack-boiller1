select password, name, email, id from Users
where
email = $1;
