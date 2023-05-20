# 条件分岐ができる

## 1. CASE

従業員番号10100から10200の従業員に対して、最終在籍日に応じて在籍中か離職済みかを出し分けたいです。従業員番号、最終在籍日 (to_date)、在職状況(employed/unemployed) を、CASE 式を使用して表示してください。

```sql
SELECT emp_no AS '従業員番号', MAX(to_date) AS '最終在籍日',
  CASE WHEN MAX(to_date) = '9999-01-01' THEN 'unemployed'
       ELSE 'employed'
   END AS '在職状況'
  FROM salaries
 WHERE emp_no BETWEEN '10100' AND '10200'
 GROUP BY emp_no;
```

## 2. 年代

従業員番号が10001から10050の従業員を対象に、従業員番号、誕生日、年代を表示してください。なお年代は、誕生日が1950年代の場合「50s」、誕生日が1960年代の場合「60s」と表記してください。

```sql
SELECT emp_no '従業員番号', birth_date '誕生日',
  CASE WHEN birth_date LIKE '195%' THEN '50s'
       WHEN birth_date LIKE '196%' THEN '60s'
   END AS '年代'
  FROM employees
 WHERE emp_no BETWEEN '10001' AND '10050';
```

## 3. 年代ごとの最大給与

年代ごとの最大給与を取得してください。なお年代は、誕生日が1950年代の場合「50s」、誕生日が1960年代の場合「60s」と表記してください。

```sql
SELECT
  CASE WHEN e.birth_date LIKE '195%' THEN '50s'
       WHEN e.birth_date LIKE '196%' THEN '60s'
   END AS '年代',
       MAX(g.max_salary) AS '最大給与'
  FROM employees AS e
  JOIN (SELECT emp_no, MAX(salary) AS max_salary
          FROM salaries
         GROUP BY emp_no) AS g
    ON e.emp_no = g.emp_no
   GROUP BY 年代;
```
