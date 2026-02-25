```
board-app/
├── app.js
├── .env
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── memberModel.js
│   └── boardModel.js
├── services/
│   ├── authService.js
│   └── boardService.js
├── controllers/
│   ├── authController.js
│   └── boardController.js
└── routes/
    ├── authRoutes.js
    └── boardRoutes.js
```

```
DB 사용자
show databases;
use dev;
show tables;

select * from customers;

-- dev01 / 1234 계정생성
create user 'dev01'@'%' identified with mysql_native_password by '1234';

-- 권한부여
grant all privileges on dev.* to 'dev01'@'%' with grant option;
flush privileges;
```

```
테이블 데이터 입력
use dev;
select * from customers;
-- 입력
insert into customers (name, email, phone)
values('홍길동', 'hong@email.com', '010-1111-2222');

insert into customers set name='리오',
						  email='kim@email.com',
                          phone='010-2222-3333',
                          passwd = '1234';
-- 조회
select * from customers;
alter table customers add column passwd varchar(100);
alter table customers modify passwd varchar(100) not null;
alter table customers modify email varchar(45) not null unique;
alter table customers drop constraint email;

desc customers;

update customers set passwd = '1111'
where id > 0;
```
