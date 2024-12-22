# MySQL

## SQL与MySQL语法差异？

SQL（Structured Query Language）是一种标准化的数据库查询语言，**MySQL** 是一种具体的关系型数据库管理系统 (RDBMS)。SQL 是通用的，但不同的数据库管理系统（如 MySQL、PostgreSQL、SQL Server 和 Oracle）在标准 SQL 的基础上会有所扩展或有特定实现差异。

### 共同点

1. **基本查询语法一致**：标准 SQL 操作（例如 `SELECT`、`INSERT`、`UPDATE`、`DELETE`）在 MySQL 中可以正常工作。

```sql
SELECT * FROM users WHERE id = 1;
```

2. **DDL 操作**：创建、修改、删除表的语法基本相同。

```sql
CREATE TABLE example (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
```

### 差异点

1. **数据类型**

   - MySQL 有自己特定的数据类型，如 `TINYINT`、`TEXT`、`DATETIME`。
   - 一些其他数据库系统可能没有这些类型，比如 SQL Server 中使用 `NVARCHAR(MAX)` 替代 MySQL 的 `TEXT`。

2. **函数差异**

   - MySQL 专有函数

     ：

     - 日期函数：`NOW()`、`DATE_ADD()`、`DATE_FORMAT()` 等。
     - 字符串函数：`CONCAT()`、`SUBSTRING_INDEX()`。

   - 其他数据库（如 PostgreSQL 或 SQL Server）可能有不同的函数或命名规则。

3. **语法扩展**

   - **LIMIT**：MySQL 用 `LIMIT` 来限制查询结果条数，而其他数据库（如 SQL Server）用 `TOP` 或 `OFFSET FETCH`。

```sql
-- MySQL
SELECT * FROM users LIMIT 10;

-- SQL Server
SELECT TOP 10 * FROM users;
```

1. - **INSERT IGNORE** 和 **REPLACE** 是 MySQL 的特有语法，用于避免插入冲突或替代现有记录。
2. **事务处理**
   - MySQL 默认引擎（如 InnoDB）支持事务，而某些引擎（如 MyISAM）不支持。
   - SQL 标准的事务控制命令（如 `COMMIT` 和 `ROLLBACK`）都支持，但具体实现和行为可能稍有不同。
3. **存储过程和触发器**
   - MySQL 在存储过程和触发器功能上有自己的一套语法，与其他数据库系统可能不完全兼容。

### 总结

MySQL 的语法是基于 SQL 标准的，但加入了许多特有的扩展。如果你在使用 MySQL，建议查阅 [MySQL 官方文档](https://dev.mysql.com/doc/) 来了解其具体实现。如果需要在不同数据库之间迁移，则需要特别注意语法兼容性。

---

## 数据定义

### 数据库

**创建数据库**

```sql
CREATE DATABASE test;
```

**删除数据库**

```sql
DROP DATABASE test;
```

**选择数据库**

```sql
USE test;
```

### 数据表

#### **创建数据表**

**普通创建**

```sql
CREATE TABLE user (
  id int(10) unsigned NOT NULL COMMENT 'Id',
  username varchar(64) NOT NULL DEFAULT 'default' COMMENT '用户名',
  password varchar(64) NOT NULL DEFAULT 'default' COMMENT '密码',
  email varchar(64) NOT NULL DEFAULT 'default' COMMENT '邮箱'
) COMMENT='用户表';
```

**根据已有的表创建新表**

```sql
CREATE TABLE vip_user AS
SELECT * FROM user;
```

**删除数据表**

```sql
DROP TABLE user;
```

#### 修改数据表

**添加列**

```sql
ALTER TABLE user
ADD age int(3);
```

**删除列**

```sql
ALTER TABLE user
DROP COLUMN age;
```

**修改列**

```sql
ALTER TABLE `user`
MODIFY COLUMN age tinyint;
```

**添加主键**

```sql
ALTER TABLE user
ADD PRIMARY KEY (id);
```

**删除主键**

```sql
ALTER TABLE user
DROP PRIMARY KEY;
```

------

