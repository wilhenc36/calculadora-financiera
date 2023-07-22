# Calculadora Financiera App
![Badge License](https://img.shields.io/badge/license-MIT-green)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wilhenc36/calculadora-financiera/main/backend)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/wilhenc36/calculadora-financiera/main/frontend)
![Badge Developing](https://img.shields.io/badge/status-developing-green)

**[Follow me (@wilhenc36) on Twitter!](https://twitter.com/intent/user?screen_name=wilhenc36)**

## Índice 
#
* [Project Description](#📄-project-description)
* [Characteristics](#🙌-characteristics)
* [Project Access](#📂-projact-access)

## 📄 Project Description
#
The Calculadora Financiera is a versatile and powerful tool, designed to perform financial calculations related to loans and compound interest. This web app allows you to easily obtain crucial information for financial planning and decision making.

## 🙌 Characteristics
#

1. Calculation of loans with the French method: The calculator allows you to calculate monthly and total installments of a loan using the French method. You can enter the amount of the loan, the annual interest rate and the term in years to obtain the detail of the monthly payments, including the repaid principal, the interest paid and the outstanding balance.

2. Calculation of Compound Interest: With this calculator, you can estimate the growth of an investment by calculating compound interest. You can enter the initial investment amount, the annual interest rate, and the time period in years. You will obtain the future value of the investment, including the interest generated.

3. User creation and calculation history: The Financial Calculator allows you to create users to have a history of the calculations made. Each user can store and access previous calculations, allowing you to keep an orderly record of your financial analysis and compare different scenarios. In addition, you will be able to manage your personal data and account settings securely.

4. Intuitive and easy-to-use interface: The calculator's interface is intuitive and friendly, making it easy to enter the necessary data and view the results. In addition, clear and detailed explanations of the calculations made are provided, which will help you better understand the process..

5. Accuracy and reliability: The calculations made by the calculator are designed to be accurate and reliable, based on standard financial formulas. You can be sure that the results obtained are reliable to support your financial decisions.

## 📂 Projact Access
#
To run the Calculadora Financiera in your local environment, follow the steps below:

1. You must use PostgreSQL as database manager.
2. Create a database with the following tables: 

	- Roles:
	``` postgresql
	idrol serial primary key,
	rol varchar(60) not null
	```

    - Usuarios: 
    ``` postgresql
    idusuario serial primary key,
	nombre varchar(80) not null,
	apellido varchar(80) not null,
	pais varchar(120),
	usuario varchar(50) not null,
	correoelectronico varchar(150) not null,
	contraseña varchar(255) not null,
	activo boolean default true,
	idrol int references roles(idrol),
	fechacreacion date default current_date,
	fechaactualizacion date
    ```   

    - solicitudescambiocontraseña
    ``` postgresql
    idsolicitud serial primary key,
	idusuario int references usuarios(idusuario),
	token varchar(255) not null,
	fechacreacion date default current_date,
	usado boolean default false
    ```

    - tiposcalculos:
    ``` postgresql
    idtipocalculo serial primary key,
	tipocalculo varchar(150)
    ```

    - calculos:
    ``` postgresql
    idcalculo serial primary key,
	monto decimal(10,2) not null,
	tasainteres decimal(3,2) not null,
	periodo decimal(8,2) not null,
	idtipocalculo int references tiposcalculos(idtipocalculo),
	idusuario int references usuarios(idusuario)
    ```

3. With the next command you can clone the repository:
``` sh
git clone https://github.com/wilhenc36/calculadora-financiera.git
```

4. After, you must first start the backend, navigate to it using:
``` sh
cd backend
```

5. Install its dependecies:
``` sh
yarn install
```
6. Run the backend:
``` sh
yarn run dev
```

