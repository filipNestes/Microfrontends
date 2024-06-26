# MICROFRONTEND

This project comprises multiple microfrontend applications including MainApp, Api-server, AngularMf, ReactMf, FooterVue, SvelteMf, and VueMf. The instructions below will guide you through the setup and running processes for these applications.

## Setup Instructions

### Step 1: Start Verdaccio in MainApp

Verdaccio acts as a local npm registry. To start it, navigate to the NpmPackage folder and run the Verdaccio command. This will serve your npm packages locally, which is particularly useful for development.

```bash
cd NpmPackage/
\NpmPackage> npm install -g --registry=https://registry.npmjs.org verdaccio
\NpmPackage> verdaccio
```

### Step 2: Open new terminal

```bash
cd NpmPackage/
\NpmPackage> npm install
\NpmPackage> npm run build
\NpmPackage> npm adduser
Username: "type your username to verdaccio"
Password: "type your password to verdaccio"
Email: "type your email"
\NpmPackage> npm publish
```

### Step 3: Open new terminal and install npm packages defined in package.json

```bash
cd MainApp
\MainApp> npm install
```

### Step 4: Create a build for production (not necessary if you only intend to run the application locally)

```bash
\MainApp> npm run build
```

### Step 5: Start aplication

```bash
\MainApp> npm run start
```

### Step 6: Open new terminal and start Api server

```bash
cd Api-server
\Api-server> npm i
\Api-server> node server.js
```

### Step 7: Open new terminal and switch to ReactMf and start it

```bash
cd ReactMf
\ReactMf> npm install
\ReactMf> npm run build   // only for production
\ReactMf> npm run start
```

### Step 8: Open new terminal and switch to AngularMf and start it

```bash
cd AngularMf
\AngularMf> npm install
\AngularMf> npm run build   // only for production
\AngularMf> npm run start
```

### Step 9: Open new terminal and switch to VueMf and start it

```bash
cd VueMf
\VueMf> npm install
\VueMf> npm run build   // only for production
\VueMf> npm run start
```

### Step 10: Open new terminal and switch to SvelteMf and start it

```bash
cd SvelteMf
\SvelteMf> npm install
\SvelteMf> npm run build   // only for production
\SvelteMf> npm run start
```

### Step 11: Open new terminal and switch to FooterVue and start it

```bash
cd FooterVue
\FooterVue> npm install
\FooterVue> npm run build   // only for production
\FooterVue> npm run start
```

All steps are done. Now you can go to the browrser to address http://localhost:3000/ and refresh the page.
