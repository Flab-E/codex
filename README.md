# Codex
## Webtech Mini Project

### Authors:
>   Abhay Bhat
>   Aditya Shah
>   Abhinav

### Overview:
The root folder of the app contains all the contents required for the backend.  
The directory `frontend` within the codex directory contains all the required contents for the front-end  
The directory `node_modules` has been removed from each directory: **codex** and **app**  

### Launching the project:
##### Step 1: Installing node modules
```
git clone http://github.com/
cd codex
npm install
```
This installtion takes a while. Once the installation is complete,
```
cd frontend
npm install
```
and now everything is set and ready for launch.

##### Step 2: starting mongodb service:
The backend of this project requires mongodb. Once mongodb is installed from their official website [mongodb](https://www.mongodb.com/try/download/community) on linux (ubuntu or arch) mongodb service can be started with the command:
```
sudo service mongodb start
# or
sudo systemctl start mongodb
```
the status of your mongodb client will be available with the command:
```
sudo service status mongodb
```

##### Step 3: launching project:
To launch this project 2 instances have to be launched simultaneously.  
One for backend express app and the other for the frontend react app.  
This has been taken care of with a node module `concurrently`.  
To launch the app, make sure you are in the `codex` directory and run:
```
npm run dev
```

##### Codex
by default the app launches at ports 8080 and 3000 **if** they are available.  
Any other port used otherwise will be prompted upon launch.  
The frontend react user interface will be available at `http://localhost:3000`.  
the backend api is accessible at `http://localhost:8080` with the following routs:
```
/api/get/user/:user/pass/:password      -> used for login
/api/getall                             -> used to get all users from the database
/api/put/user/:user/pass/:password      -> used for registration
```

Upon launch an instance of your default browser will be opened with the url `http://localhost:3000` where you can interact with the react app.

# Thank You
