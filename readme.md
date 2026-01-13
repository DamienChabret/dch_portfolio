# Portfolio personnel

## Versions

* Front
   * Angular 17
* Back
   * Dotnet 8
   * EF Core 9.0.7
   * Npgsql.EntityFrameworkCore.PostgreSQL 9.0.4
* Docker
   * Postgres 18

## Installing

### Docker
1. `docker compose up -d`

### Back
1. `dotnet tool run dotnet-ef database update`

### Front

1. `npm install`

## Running 

### Docker
`docker compose up -d`

### Back
`dotnet run`

### Front

`npm run start`

## Version History

A faire : 
- Pouvoir export mon CV en PDF
-- CV personnalisé (formulaire pour choisire ce que je veux mettre en avant)
-- CV complet 
Chaque CV peut être sobre ou non
- Single One Page

## TODO

/!\ important, penser à améliorer le code avant de continuer à faire de nouvelles features /!\

convertir tous les css en scss
Utiliser _variable.scss pour les couleurs (utiliser couleur rouge/violet bizarre comme sur mon CV comme couleur principal)
Génération de CV sobre / design (+ formulaire pour choisir quoi mettre dedans)
Contineur à améliorer ANgular et C#
CI/CD, branches, règles de branche, automatisation
Docker

