# Node.js Sample App with GitHub Actions CI/CD

This is a simple Node.js Express app with GitHub Actions pipeline for:
- Running tests (CI)
- Building & pushing Docker image (CD)

## 🚀 Run locally

```bash
npm install
npm start
```

Visit: http://localhost:3000

## 🧪 Run tests
```bash
npm test
```

## 🐳 Build Docker image
```bash
docker build -t node-sample-app .
docker run -p 3000:3000 node-sample-app
```

## ⚙️ GitHub Secrets
Add these in your repository settings → Secrets → Actions:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
