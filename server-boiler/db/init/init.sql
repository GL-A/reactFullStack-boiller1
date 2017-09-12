create table if not exists Users(
  id serial primary key,
  email varchar(254),
  password varchar(100),
  name varchar(100)
);
create table if not exists Project(
  id serial primary key,
  title varchar(100),
  goal integer,
  blurb varchar(200),
  createdDate varchar(200),
  expires varchar(200),
  zipcode integer,
  description text,
  creator_id integer references Users(id) on delete cascade
);
create table if not exists Pledges(
  id serial primary key,
  amount integer,
  backer_id integer references Users(id) on delete cascade,
  project_id integer references Project(id) on delete cascade,
  backedDate varchar(200),
  processed boolean
);
create table if not exists Comments(
  id serial primary key,
  comment varchar(200),
  commenter integer references Users(id) on delete cascade,
  project_id integer references Project(id) on delete cascade
);
