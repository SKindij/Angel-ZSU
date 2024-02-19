# PostgreSQL Data Tables

## 🗄️ Creating Database Tables 📊

### Fund Campaigns

```sql
  CREATE TABLE fund_raising_variation (
    frv_id SMALLINT PRIMARY KEY,
    frv_type VARCHAR(20) NOT NULL UNIQUE
  );

  INSERT INTO fund_raising_variation (frv_id, frv_type)
  VALUES
    (21, 'for car'),
    (22, 'for drone'),
    (23, 'for medicine'),
    (24, 'for equipment'),
    (25, 'for another');

  CREATE TABLE fund_raising_cards (
    fr_id SMALLSERIAL PRIMARY KEY,
    fr_is_actual BOOLEAN NOT NULL,
	variation_id SMALLINT REFERENCES fund_raising_variation(frv_id) NOT NULL ,
    fr_purpose VARCHAR(50) NOT NULL,
    fr_info TEXT NOT NULL,
    fr_value REAL NOT NULL,
    request_video_url VARCHAR(255),
    report_video_url VARCHAR(255)
  );

  INSERT INTO fund_raising_cards (fr_id, fr_is_actual, variation_id, fr_purpose, fr_info, fr_value)
  VALUES
    (7501, false, 21, 'На ремонт евакуаційного автомобіля', 'Допоможіть нам придбати автомобіль для ефективної доставки бійців до медичних пунктів.', 98000),
    (7502, false, 23, 'На закупівлю медичного обладнання та препаратів', 'Збираємо кошти на закупівлю турнікетів, нош, ліків.', 23000),
    (7503, false, 24, 'На придбання інструментів для бліндажів', 'Потрібні кошти на закупівлю інструментів для проведення робіт у прифронтових районах.', 18000),
    (7504, true, 22, 'На придбання дронів для військового підрозділу', 'Допоможіть нам придбати дрони для ведення ефективної розвідки ворожих позицій.', 37000);
```


### users






## Retrieving Data







