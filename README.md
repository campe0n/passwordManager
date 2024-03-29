# Password Manager 

This is a Password Manager project created using the MERN stack.
You can login and save your passwords and list them under a "user-set" categories. Passwords are saved in the database use mongoDB.

After 1 hour the user will be automatically logged out and upon refreshing the page the use will be redirected to the login page.

### DEPLOYABLE LINK VIA HEROKU

https://amigos-passwordmanager.herokuapp.com/

### SCREENSHOT 
![Main page.](./home.png)


<a id="setting">
<h2>Setting up the project</h2>
</a>
Go to the folder in which you want to clone the project and run the following command

```bash
git clone git@github.com:campe0n/passwordManager.git
```

### Setting up the server
To setup the server in your system run the following commands

```sh
cd server
npm install
```

After installing all the server dependencies run the server using the following command 

```sh
npm run develop
```
Now, the server will be up and running

**Note :- You have to configure all the environment variables by creating a config.env file in root server folder.

Structure of the .env file

```js
TOKEN_SECRET=<desired secret>
TOKEN_EXP=<amount of time before reset>
```

### Setting up the client
Go to the client folder and run 

```sh
npm install
```
All the dependencies should be installed. Now, you just have to start the React server by following command

```sh
npm start
```
### You also have to keep the mongodb cluster open in order to run the app properly.

### 🚩 Clone repository :
Now you have your own copy of the project. Here you have to start your work.
Go to the desired location on your computer where you want to set up the project.
Right-click there and click on git bash. A terminal window will pop up
Type the command git clone <your-fork-url>.git and hit enter.
Wait for few seconds till the project gets copied
  
### Setup the project given at the top of this readme file. [here](#setting)

### 🚩 Pushing your changes :
After doing the changes, and when tests are successfully passing you can push your changes to remote.
Go to your terminal and type git status and hit enter, this will show your changes from the files.
Then type in git add . and hit enter, this will add all the files to the staging area.
Commit the changes by git commit -m "<message-describing-your-change>" and hit enter.
Now push your branch to your fork by git push origin <your-branch-name> or git push and hit enter.


### Setting up Client and Servers :

USER can setup both client and server servers by using the npm run install command at the root directory

```sh
npm run install
```
  



### Contributers :

Melvin Finn // https://github.com/campe0n // https://github.com/campe0n/passwordManager

Christopher Sayegh  // https://github.com/csayegh123 // https://github.com/Csayegh123/passwordManager

Abdale Hassan // https://github.com/Abdale88/ // https://github.com/Abdale88/passwordManager

Jose Orozco // https://github.com/Jose8160 // https://github.com/Jose8160/passwordManger
