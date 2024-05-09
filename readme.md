# MICROFRONTEND

This project comprises multiple microfrontend applications including MainApp, Api-server, AngularMf, ReactMf, FooterVue, SvelteMf, and VueMf. The instructions below will guide you through the setup and running processes for these applications.

## Setup Instructions

### Step 1: Start Verdaccio in MainApp

Verdaccio acts as a local npm registry. To start it, navigate to the MainApp folder and run the Verdaccio command. This will serve your npm packages locally, which is particularly useful for development.

```bash
cd MainApp/
verdaccio
```

### Step 2: Install npm packages defined in package.json

```bash
\MainApp> npm install
```

### Step 3: Create a build for production (not necessary if you only intend to run the application locally)

```bash
\MainApp> npm run build
```

### Step 4: Start aplication

```bash
\MainApp> npm run start
```

### Step 5: Start Api server

```bash
cd Api-server
\Api-server> node server.js
```

### Step 6: Switch to ReactMf and start it

```bash
cd ReactMf
\ReactMf> npm install
\ReactMf> npm run build   // only for production
\ReactMf> npm run start
```

### Step 7: Switch to AngularMf and start it

```bash
cd AngularMf
\AngularMf> npm install
\AngularMf> npm run build   // only for production
\AngularMf> npm run start
```

### Step 8: Switch to VueMf and start it

```bash
cd VueMf
\VueMf> npm install
\VueMf> npm run build   // only for production
\VueMf> npm run start
```

### Step 9: Switch to SvelteMf and start it

```bash
cd SvelteMf
\SvelteMf> npm install
\SvelteMf> npm run build   // only for production
\SvelteMf> npm run start
```

### Step 10: Switch to FooterVue and start it

```bash
cd FooterVue
\FooterVue> npm install
\FooterVue> npm run build   // only for production
\FooterVue> npm run start
```
