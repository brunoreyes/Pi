CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Pepperoni','Pepperoni is an American variety of salami, made from a cured mixture of pork and beef seasoned with paprika or other chili pepper. Pepperoni is characteristically soft, slightly smoky, and bright red in color. Thinly sliced pepperoni is a popular pizza topping in American pizzerias.',12.99,'images/pepperoni.png'),
('Anchovy & Pepperoni','Best anchovy pizza Mediavine Anchovies on pizza? There’s a reason that real Italian pizza has anchovies: these little fish are chock full of savory, salty, umami flavor. What’s better than adding more savory and salty elements to a pizza? In addition to tasting great, anchovies are some of the most nutritious and sustainable fish on the planet: they’re full of Omega 3’s and protein.', 14.99,'images/anchovy_pepperoni.png'),
('California Style','California-style pizza is a style of single-serving pizza that combines New York and Italian thin crust with toppings from the California cuisine cooking style. Its invention is generally attributed to chef Ed LaDou, and Chez Panisse, in Berkeley, California.',14.99,'images/california.png'),
('Veggie', 'Spread pizza sauce over dough, leaving a 1/2-inch border; top evenly with spinach. Sprinkle mozzarella over spinach. Arrange eggplant, zucchini, and squash slices alternately over cheese. Top evenly with onion and bell pepper mixture.', 13.99,'images/veggie.png'),
('Canadian Bacon','The "Canadian pizza" toppings typically include tomato sauce, mozzarella cheese, bacon, pepperoni, and mushrooms; variations exist); this recipe is also known internationally by that name.',12.99,'images/pepperoni.png'),
('Cheese','The most popular cheeses used in the preparation of pizza are mozzarella (accounting for about 30%), provolone, cheddar and Parmesan. Emmental, Romano and ricotta are often used as toppings, and processed pizza cheeses manufactured specifically for pizza are mass-produced.',9.99,'images/cheese.png'),
('Taco','Taco Pizza is a Mexican meets Italian dinner. Pizza dough topped with beans, salsa, beef, cheese, and all the toppings. If you’re looking to switch up your Taco Tuesday, this Taco Pizza is the perfect twist on dinner!',15.99,'images/taco.png'),
('Southern Heat','The summer heat is here and it''s called The Southern Heat Pizza and the Buffalo Chicken Panini with flavors to tickle the taste buds!  Come enjoy these awesome signature entrees at Your Pie',16.99,'images/southern_heat.png'),
('Neapolitan','Neapolitan pizza (Italian: pizza napoletana) also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese. ... This style of pizza gave rise to the New York-style pizza that was first made by Italian immigrants to the United States in the early 20th century.',12.99,'images/Neapolitan.png');
CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);
