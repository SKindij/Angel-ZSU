# PostgreSQL Data Tables

## 🗄️ Creating Database Tables 📊

### Fund Campaigns

```sql
  CREATE TABLE fund_raising_types (
    id SMALLINT PRIMARY KEY,
    type VARCHAR(20) NOT NULL UNIQUE
  );

  INSERT INTO fund_raising_types (id, type)
  VALUES
    (21, 'for car'),
    (22, 'for drone'),
    (23, 'for medicine'),
    (24, 'for equipment'),
    (25, 'for another');

  CREATE TABLE fund_raising_info (
    id SMALLSERIAL PRIMARY KEY,
    is_actual BOOLEAN NOT NULL,
	type_id SMALLINT REFERENCES fund_raising_types(id) NOT NULL ,
    purpose VARCHAR(50) NOT NULL,
    info TEXT NOT NULL,
    value INTEGER NOT NULL,
    request_video_url VARCHAR(200),
    report_video_url VARCHAR(200),
    monobanka VARCHAR(200)
  );

  INSERT INTO fund_raising_info (id, is_actual, type_id, purpose, info, value, request_video_url, monobanka)
  VALUES
    (7501, false, 22, 'Збираємо на дрони для 45 ОСБ', 'Ми вже довели, що тільки разом непереможні, тож не зволікайте і об"єднуйтесь! Знаю,втомились, важко, але хто як не ми?', 98000, '', ''),
    (7502, true, 24, 'Плащі-антитепловізори на Запорізький напрямок', 'Як у фільмі про Гаррі Потера, нашим хлопцям потрібні плащі-невидимки для роботи у темну пору доби.', 120000, 'https://www.youtube.com/shorts/dBP5r93QqDU', 'https://send.monobank.ua/jar/2okvjsTNBQ'),
    (7503, true, 21, 'На пікап для 13 ОБ НГУ', 'Бійці  Бригади ведуть важкі бої  в Серебрянському лісі. Їм вкрай необхідне авто для підвозу бк, продовольства та вивозу поранених воїнів.', 245000, 'https://www.youtube.com/watch?v=cyWmQuznz94', 'https://send.monobank.ua/jar/5Am9vRJE7v'),
    (7504, true, 23, 'Терміновий збір на Авдіївський напрямок', 'Хлопці потребують: турнікети, аптечки, старлінки. Долучайся до збору поки не пізно!', 320000, 'https://www.youtube.com/shorts/vf2QvrdsxAU', 'https://send.monobank.ua/jar/3RWiy1PPFb');
```

#### add new column to the table

```sql
  ALTER TABLE fund_raising_info 
  ADD COLUMN last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
```

- - -

## Retrieving Data

```sql
  SELECT * FROM fund_raising_types;
  SELECT type FROM fund_raising_types;

  SELECT * FROM fund_raising_info;

  SELECT id, purpose, value, last_updated FROM fund_raising_info;
  SELECT id, request_video_url, report_video_url FROM fund_raising_info;

  SELECT * FROM fund_raising_info WHERE id = your_id;


```


#### Command to delete a table from a database
```sql
  DROP TABLE table_name;
```

- - -

## Update Information

```sql
UPDATE fund_raising_info
  SET 
    is_actual = true,  -- зміна is_actual на true
    type_id = 25,      -- нове значення type_id
    purpose = 'Нова мета',  -- нова мета
    info = 'Нова інформація',  -- нова інформація
    value = 40000,     -- нове значення value
    request_video_url = 'новий_урл'  -- новий URL для запиту відео
    WHERE id = 7504;

```



