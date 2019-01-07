-- user table for users. they have display name email password and if they are a super user or not
create table users (
id serial primary key,
name varchar (100) not null unique,
password varchar (400) not null,
email varchar (200) not null unique,
is_super boolean
);

--requests users can make, requests have a title, body, reference which user they are from/ which user they go to
create table REQUESTS (
id serial primary key,
USER_ID_FROM integer references USERS (id),
title varchar (200) not null,
REQUEST_contents varchar (800),
USER_ID_TO integer references USERS (id),
is_private boolean,
stripe_token varchar (200) not null
);

--replies super users can make. replies have a body(reoly) and reference user from, user to,
-- and which requests they are replying to.
create table REPLIES (
id serial primary key,
USER_ID_FROM integer references USERS (id),
REQUESTS_ID integer references REQUESTS (id),
reply varchar (600) not null
);