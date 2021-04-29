# HR admin

Front-End of this application was built using [Angular](https://github.com/angular/angular-cli) version 10.0.1. , **Bootstrap 4,  CSS3, and HTML5**.
Back-End of this application was built using [Spring Boot](https://start.spring.io/) , **Spring Web, Spring Data JPA, H2-database, Spring Boot DevTools and Java 11**.

## Build Front-End
**Serve it locally** : `ng serve`
Run `ng build --prod` to production build the project. The build artifacts will be stored in the `dist/` directory. You can deploy them in Nginx or Apache server. 

## Build Back-End

Run `mvn clean package` to generate `humanResourceManagement-0.0.1-SNAPSHOT.jar` file in `./target` folder. 

## Deploy  Front-End
Copy all files in `./dist/humanResourceManagement-UI` and paste into Nginx or Apache service.

## Deploy  Back-End
Run `java -jar humanResourceManagement-0.0.1-SNAPSHOT.jar`

## H2-database
### After deploying jar file: 
**UI**: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
**Setting Name (default)**: `Generic H2 (Embedded)`
**Drive class (default)**: `org.h2.Driver`
**JDBC URL (default)**: `jdbc:h2:mem:crew`
**Username**: `admin`
**Password**: `admin`

database will initial 5 test data when application runs .

## Back-End APIs
### Front-End part uses below APIs to do CRUD operation.

#### Get all Employees Details : 
`http://localhost:8080/all`
#### PUT or Update an Employee : 
`http://localhost:8080/post`
#### Delete an Employee :
`http://localhost:8080/delete/{id}`

#### Search an Employee by type:
For example: `http://localhost:8080/search?type=name&value=Leanne Graham`
**type** can be any one of `["id","name","email","phoneNumber","website"]`
UI part will alert "Employee Not Found" if not found in database

