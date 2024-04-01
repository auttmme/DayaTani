# DayaTani
To run this application, please follow the instructions below:

## Prerequisites
Ensure that you have Node.js version 16 or higher installed on your system.

## Clone Repository
Begin by cloning this repository to your local machine. You can do this by executing the following command in your terminal:

```
git clone <repository-url>
```
## Setting Up Environment Variables
Before starting the project, it's necessary to set up environment variables. Follow these steps:

1. Convert your `username:password` to `Base64` using [Base64 Converter](https://base64.guru/converter)
2. Copy the `base64` string.
3. Create a `.env` file in the root directory of the project.
4. Inside the `.env` file, assign the Base64 string to the `VITE_AUTH` variable in the following format:
```
 VITE_AUTH= Basic [your Base64 auth]
```
Here, username is dayatani, and password is your desired password, which will also be used to start the Agricola server later.

## Installing Dependencies
Next, install the project dependencies by running the following command in your terminal:
```
npm install
```

## Starting the Agrigola HTTP Server
Before launching **DayaTani** project, ensure that you have the [Agricola](https://github.com/DayaTani/agricola) HTTP Server running, as the **DayaTani** project retrieves data from this server.

## Launching the DayaTani Project
Finally, start the **DayaTani** project by executing the following command:
```
npm run dev
```
This will initiate the development serrver for the **DayaTani** application.
