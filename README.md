# Developer Assessment Project

## Overview
This project demonstrates a simple Angular frontend interacting with a .NET Core 6 RESTful API. 
The API accepts a name and address, stores the data in SQL Server, and returns the submitted data.

## Technologies Used
- Angular 15
- .NET Core 6
- SQL Server
- Visual Studio 2022

## Setup Instructions

### Prerequisites
- Visual Studio 2022
- Node.js and npm (for Angular)
- SQL Server

### Database Setup
1. Open `appsettings.json` in the ASP.NET Core project.
2. Update the connection string with your SQL Server details.
3. Run the following commands in the Package Manager Console:
	-> Add-Migration InitialCreate 
    -> Update-Database

### Running the Application
1. Start the ASP.NET Core API project `SampleProject.Server`:
- Open the solution in Visual Studio.
- Press `F5` to run the API.

2. Start the Angular frontend:
- Navigate to the Angular project folder `sampleproject.client`.
- Right click and open Terminal
- Run `ng serve`.
- Open a browser and go to `http://localhost:4200` or Reload the given host.

## Usage
- Fill out the form and submit it.
- The data will be stored in the SQL Server database and returned to the frontend.
- To view the Mock data open the console -> go to the Network tab -> Click the response. 

## Known Issues
- None.