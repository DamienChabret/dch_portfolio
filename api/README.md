# template_api_csharp_EF

* Dotnet 8
*  EF Core 8.0.23
*  Npgsql.EntityFrameworkCore.PostgreSQL 8.0.X

## Installation

dotnet install

Premier lancement : dotnet tool run dotnet-ef database update

## Mettre à jour migration

dotnet tool run dotnet-ef database update

## Nouvelle migration 

Nouvelle migration : dotnet tool run dotnet-ef migrations add <nom_migration>

## Lancer

dotnet run

# Clean code

dotnet format

## Architecture

* Controller

* Data

* Exceptions

* Models

* Properties

* Services
Liste des services