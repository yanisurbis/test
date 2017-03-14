Test project for CSSSR.
[Instructions](https://goo.gl/3e7EJA) was found on the internet.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

SRC folder overview:

+ app
  + компонентом приложения
  + конфигурацией стора
    + рутовый редьюсер
    + рутовый эпик
  + роуты
+ components (неспецифичные для какого-либо отдельного роута компоненты)
+ data
  + модели сущностей
    + пользователь
    + репозиторий
    + issue
    + comment
  + конфигурация orm
  + reducer
  + селекоторы
+ helpers
  + работа с данными из api
    + фильтрация
    + нормализация
    + ...
  + статус по ошибке
  + составление urlов для запросов
+ pages (страницы приложения со стандартной структурой)
