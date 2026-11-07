# Task 1: Automate Code Deployment Using CI/CD Pipeline

## Project Overview

This project demonstrates the implementation of an automated CI/CD pipeline using GitHub Actions. The pipeline automatically tests a Node.js application, builds a Docker image, and pushes the image to Docker Hub whenever code is pushed to the `main` branch.

## Objective

To automate the application build and deployment preparation process using GitHub Actions and Docker.

## Technologies Used

- Node.js
- Express.js
- Docker
- Docker Hub
- Git & GitHub
- GitHub Actions
- YAML

## Project Structure

```text
devops-task-1/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── Test/
│   └── app.test.js
│
├── .dockerignore
├── .gitignore
├── dockerfile
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## CI/CD Pipeline Workflow

The pipeline consists of the following stages:

1. **Checkout Code:** Retrieves the source code from GitHub.
2. **Setup Node.js:** Configures the Node.js environment.
3. **Install Dependencies:** Installs project dependencies using npm.
4. **Run Tests:** Executes automated application tests.
5. **Docker Login:** Authenticates with Docker Hub using GitHub Secrets.
6. **Build Docker Image:** Builds the application Docker image.
7. **Push Docker Image:** Publishes the image to Docker Hub.

## Pipeline Architecture

```text
Developer
    |
    v
Push Code to GitHub
    |
    v
GitHub Actions Trigger
    |
    v
Checkout Source Code
    |
    v
Setup Node.js
    |
    v
Install Dependencies
    |
    v
Run Automated Tests
    |
    v
Docker Login
    |
    v
Build Docker Image
    |
    v
Push Image to Docker Hub
```

## GitHub Actions Configuration

Workflow file:

`.github/workflows/main.yml`

The workflow automatically triggers when code is pushed to the `main` branch.

## Docker Hub Integration

Docker Hub is used to store and distribute the generated Docker image.

**Docker Hub Username:** vishalbarnwal

**Docker Repository:** employee-api

**Docker Image:**

```bash
docker pull vishalbarnwal/employee-api:latest
```

## Run Application Locally

Clone the repository:

```bash
git clone https://github.com/byteops-dotcom/devops1-cicd.git
```

Navigate to the project directory:

```bash
cd devops1-cicd
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Build Docker image:

```bash
docker build -f dockerfile -t employee-api .
```

Run Docker container:

```bash
```

Open in browser:

```text
http://localhost:3000
```

## Security

GitHub Actions Secrets are used to securely store Docker Hub credentials.

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN

Sensitive credentials are not stored directly in the source code.

## Expected Outcome

- Automated testing through GitHub Actions.
- Automated Docker image building.
- Successful Docker Hub image publishing.
- Reduced manual deployment preparation.
- Improved understanding of CI/CD automation.

## Conclusion

This project demonstrates how GitHub Actions can automate testing, Docker image building, and image publishing. It provides practical experience with CI/CD pipelines and containerization.

## Repository

GitHub: https://github.com/byteops-dotcom/devops1-cicd

Docker Hub: https://hub.docker.com/r/vishalbarnwal/employee-api
