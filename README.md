<h2>Install steps:</h2>

<h3>on /backend:</h3>
- <code>npm install</code>
- <code>npm run start</code>
- while development <code>npm run dev</code>

<h3>on /frontend:</h3>
- <code>npm install</code>
- <code>npm start</code>

<h2>History:</h2>

How we created backend (nodejs):
- <code>npm init -y</code>
- <code>npm install express cors dotenv axios</code>
- <code>npm install --save-dev nodemon</code>
- created a server.js file and added some basic code
- updated package.json with the following scripts:
<code>
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
</code>

How we created frontend (React):
- <code>npm init react-app frontend</code>

How we setup locally an LLM
- we followed the steps described here: https://dev.to/koolkamalkishor/running-and-creating-your-own-llms-locally-with-nodejs-api-using-ollama-97f

- <code>ollama create doctor -f ./modelfile</code>