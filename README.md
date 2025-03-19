## 🏗 Folder Structure
```
/tests/Web          - Contains test cases
/pages             - Page Object Model (POM) implementation
/utils/Web         - Utility functions
/env-vars         - Environment variables
.github/workflows  - GitHub workflow configurations
```

## 🛠 Setup & Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npx playwright test
   ```

## 🎯 Running Tests
- Run all tests:
  ```bash
  npx playwright test
  ```
- Run tests in headed mode:
  ```bash
  npx playwright test --headed
  ```
- Run a specific test:
  ```bash
  npx playwright test tests/Web/<test-file>.spec.ts
  ```

## 📊 Test Reporting
- The framework supports **JSON and HTML reports**.
- After execution, reports can be found in the `playwright-report/` directory.
- To view the HTML report:
  ```bash
  npx playwright show-report
  ```

## 🔗 CI/CD Integration
- GitHub Actions and Azure DevOps pipelines are configured to trigger automated tests on PRs and merges.
- `.github/workflows/` contains the GitHub Action workflows.
- `azure-devope-pipeline.yml` contains the Azure DevOps pipeline setup.