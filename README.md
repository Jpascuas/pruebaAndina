Funcionamiento del progrma

FRONTED
Para el funcionamiento del front se necesita tener en una carpeta las dependencias de angular/cli ya implementas y mandar el proyecto ahi mismo, es necesario tener las dependencias  instaladas porque si no habra 
conflicto con las importaciones y no servira el programa , ademas se debe instalar bootstrap en la carpeta front con el comando ng add @ng-bootstrap/ng-bootstrap
se debe ejecutar el comando ng serve para ejecutar el programa

BACKEND
para el funcionamiento del backend se necesita tener las dependencias de composer instaladas en una carpeta para poder guardar ahi el proyecto 
se debe configurar la base de datos en el archivo .env y agregar en la parte DB_DATABASE=andinaseguridad para que se conecte a la base de datos
Ejecutar en el cmd de proycto back el comando       composer require --dev "kitloong/laravel-migrations-generator"       para poder tener las migraciones de la base de datos 
y luego ejecutar php artisan migrate:generate
Ejecutar el comando php artisan serve para tener funcionando el programa


El programa funciona con la url http://localhost:4200/ al darle click en  Angular 10 y Laravel 8 se redirecciona a el index
