CREATE DATABASE mycontacts;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE categories(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);
