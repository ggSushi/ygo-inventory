-- Yu-Gi-Oh! Inventory DB --
--- Storing YGOProDeck API info ---
CREATE TABLE "inventory"(
	id serial primary key,
	card_name varchar NOT NULL,
	card_id INT NOT NULL,
	card_type varchar NOT NULL,
	"frameType" varchar,
	"desc" varchar NOT NULL,
	atk varchar,
	def varchar,
	"level" varchar,
--	"type" will be the "race" from API
	"type" varchar,
	"attribute" varchar,
--	card_sets should be an array of objects with more information
--  card_images should be the same
	card_sets text array, -- text and varchar are essentially the same
	card_images text[], -- you can identify an array with the brackets or declaration
	quantity INT NOT NULL,
--	storage_location will be the name of a deck, a marked tin/box, or a binder name
	storage_location varchar
	);
	
CREATE TABLE "my_decks"(
	id serial primary key,
	deck_name varchar NOT NULL DEFAULT 'new deck',
	"create_date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"last_edit_date" DATE NOT NULL DEFAULT CURRENT_DATE,
--	"cards" will be an array that holds an object per card {id, card info, quantity}
	"cards" text[]
	);
	
	
CREATE TABLE "concept_decks"(
	id serial primary key,
	deck_name varchar NOT NULL DEFAULT 'new concept deck',
	"create_date" DATE NOT NULL DEFAULT CURRENT_DATE,
--	"cards" will be an array that holds an object per card {id, card info, quantity}
	"cards" text[]
	);
	
Create Table "wishlist"(
	id serial primary key,
	card text[] NOT NULL,
	archetype varchar,
	my_deck_id int references "my_decks"
	);