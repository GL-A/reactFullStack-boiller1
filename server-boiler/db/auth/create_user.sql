insert into Users (email, password, name)
  values($1, $2, $3)
  returning id, email, name;
