# テーブルを結合できる

## 1. 内部結合

部署マネージャーテーブルに、従業員テーブルのデータを内部結合させた全データを取得してください。

```sql
SELECT * FROM dept_manager
JOIN employees
ON dept_manager.emp_no = employees.emp_no;
```

## 2. 列の選択

部署ごとに、部署番号、歴代のマネージャーの従業員番号、マネージャーのファーストネーム、マネージャーのラストネームを取得してください。

```sql
SELECT dm.dept_no, dm.emp_no, e.first_name, e.last_name FROM dept_manager AS dm
JOIN employees AS e
ON dm.emp_no = e.emp_no;
```

## 3. 複数の内部結合

部署ごとに、部署番号、部署名、歴代のマネージャーの従業員番号、マネージャーのファーストネーム、マネージャーのラストネームを取得してください。

```sql
SELECT dm.dept_no, d.dept_name, dm.emp_no, e.first_name, e.last_name
FROM dept_manager AS dm
JOIN employees AS e
ON dm.emp_no = e.emp_no
JOIN departments AS d
ON dm.dept_no = d.dept_no;
```

## 4. 絞り込み

部署ごとに、部署番号、部署名、現在のマネージャーの従業員番号、マネージャーのファーストネーム、マネージャーのラストネームを取得してください。

```sql
SELECT dm.dept_no, d.dept_name, dm.emp_no, e.first_name, e.last_name
FROM dept_manager AS dm
JOIN employees AS e
ON dm.emp_no = e.emp_no
JOIN departments AS d
ON dm.dept_no = d.dept_no
WHERE dm.to_date = '9999-01-01';
```

## 5. 給与

従業員番号10001から10010の従業員ごとに、ファーストネーム、ラストネーム、いつからいつまで給与がいくらだったかを取得してください。

```sql
SELECT s.emp_no, e.first_name, e.last_name, s.from_date, s.to_date
FROM salaries AS s
JOIN employees AS e
ON s.emp_no = e.emp_no
WHERE s.emp_no BETWEEN '10001' AND '10010';
```

## 6. 内部結合と外部結合の違い

INNER JOIN と OUTER JOIN の違いについて、SQL 初心者にわかるように説明してください。またどのように使い分けるのかも合わせて説明してください。

### INNER JOIN

- 結合すべき相手の行が見つからない場合に行が消滅してしまう
- 目的に沿った絞り込みに必要なテーブルの結合はINNER JOINを使用する

### OUTER JOIN

- 本来結果表から消滅してしまう行も強制的に出力する
- 目的に沿った絞り込みには直接的に関係ないテーブルに結合はOUTER JOINを使用する
