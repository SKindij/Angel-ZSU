# Price Pulse Data Tables

### countries

| country_id       | country_name       | prefix_ean        |
|------------------|--------------------|-------------------|
|SERIAL PRIMARY KEY|VARCHAR(20) NOT NULL|VARCHAR(7) NOT NULL|
| 1          |   Argentina  |    '779'   |
| 2          |   Armenia    |	'485'    |
| 3          | Australia    | '930'      |
| 4          | Barbados     | '500'      |
| 5          | Belgium      | '540'      |
| 6          | Britain      | '500-509'  |
| 7          | Bulgaria     | '380'      |
| 8          | Cuba         | '850'      |
| 9          | CzechRepublic| '859'      |
| 10         | Dominican    | '000-019'  |
| 11         | Finland      | '640-649'  |
| 12         | France       | '300-379'  |
| 13         | Georgia      | '000-019'  |
| 14         | Germany      | '400-440'  |
| 15         | Greece       | '520'      |
| 16         | Ireland      | '539'      |
| 17         | Italy        | '800-839'  |
| 18         | Jamaica      | '600-601'  |
| 19         | Mexico       | '750-751'  |
| 20         | Norway       | '700-709'  |
| 21         | Poland       | '590'      |
| 22         | Portugal     | '560'      |
| 23         | Scotland     | '500'      |
| 24         | Slovakia     | '860'      |
| 25         | SouthAfrica  | '600-601'  |
| 26         | Spain        | '841-843'  |
| 27         | Sweden       | '730-739'  |
| 28         | Ukraine      | '482'      |
| 29         | USA          | '000-019'  |

### drink_categories

| Drink_id         | Drink_name       |
|------------------|------------------|
|SERIAL PRIMARY KEY|VARCHAR(10) UNIQUE|
| 1        | absinthe   |
| 2        | bourbon    |
| 3        | brandy     |
| 4        | champagne  |
| 5        | cider      |
| 6        | gin        |
| 7        | horilka    |
| 8        | liqueur    |
| 9        | portwein   |
| 10       | rum        |
| 11       | tequila    |
| 12       | tincture   |
| 13       | whiskey    |
| 14       | wine       |

### retail_chains

| Retail_chain_id  | Retail_chain_name |
|------------------|-------------------|
|SERIAL PRIMARY KEY|VARCHAR(10) UNIQUE |
|        1         |      Auchan       |
|        2         |      Novus        |
|        3         |      Silpo        |
|        4         |      ATB          |
|        5         |     Rozetka       |










