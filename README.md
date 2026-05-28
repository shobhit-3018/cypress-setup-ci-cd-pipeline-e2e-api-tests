# Cypress Automation Framework

Scalable Cypress automation framework supporting E2E and API testing with CI/CD integration using GitHub Actions and GitLab pipelines.

---

## Tech Stack

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| Cypress        | Test automation framework |
| JavaScript     | Programming language      |
| GitHub Actions | CI/CD pipeline            |
| GitLab CI/CD   | CI/CD pipeline            |
| REST APIs      | API testing               |
| ESLint         | Code quality & linting    |
| Node.js        | Application server        |

---

## Features

- E2E UI automation with reusable selectors
- API automation (real + mock data tests)
- Reusable commands and page selectors
- Fixtures for mock data management
- CI/CD execution on push & pull requests
- ESLint validation in pipeline
- Screenshots & videos on test failure
- Parallel-ready test structure (API & E2E separated)
- Branch protection with required reviews and status checks

---

## Project Structure

```
├── .github/workflows/ci.yml    # GitHub Actions pipeline
├── .gitlab-ci.yml              # GitLab CI/CD pipeline
├── cypress/
│   ├── api/                    # API test specs
│   │   ├── api_spec.js
│   │   └── api_mock_spec.js
│   ├── e2e/                    # E2E UI test specs
│   │   ├── health-check_spec.js
│   │   └── overview-page_spec.js
│   ├── fixtures/               # Mock data
│   │   └── products.json
│   └── support/                # Reusable selectors
│       └── selectors.js
├── cypress.config.js           # Cypress configuration
├── eslint.config.js            # ESLint configuration
├── index.js                    # Application server
├── package.json
└── .gitignore
```

---

## How To Run

### Prerequisites

- Node.js v16+
- npm

### Installation

```bash
npm install
```

### Run Tests (Interactive)

```bash
npx cypress open
```

### Run Tests (Headless)

```bash
npm test
```

### Run Specific Test Suites

```bash
# API tests only
npm run test:api

# UI tests only
npm run test:ui
```

### Start Application Server

```bash
npm start
```

Server runs at `http://127.0.0.1:8000`

---

## CI/CD Pipeline

Pipeline runs automatically on:

- Push to `main`
- Pull requests to `main`

### Pipeline Stages

```
Install → Lint → Test (API + UI in parallel)
```

| Job      | Description                  |
| -------- | ---------------------------- |
| install  | Install dependencies & cache |
| lint     | Run ESLint checks            |
| test_api | Start server → Run API tests |
| test_ui  | Start server → Run E2E tests |

### GitHub Actions

![GitHub Actions Pipeline](docs/github-actions-pipeline.png)

### GitLab CI/CD

![GitLab Pipeline](docs/gitlab-pipeline.png)

---

## Branch Protection

- Direct push to `main` is blocked
- Pull request required with minimum 1 approval
- CI status checks must pass before merge
- Force pushes blocked

---

## Screenshots

> Add your CI/CD pipeline screenshots in the `docs/` folder:
>
> - `docs/github-actions-pipeline.png`
> - `docs/gitlab-pipeline.png`

---

## Author

Shobhit
