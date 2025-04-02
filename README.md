# 101416330Labtest2Comp3133

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## 🚀 Project Overview
This is an Angular-based web application that fetches and displays SpaceX launch data using the SpaceX API. Users can view past launches, filter them by year, and see detailed launch information.

## 📌 Features
- Fetches launch data from [SpaceX API](https://api.spacexdata.com/v3/launches)
- Displays mission details, including mission name, year, and rocket used
- Provides filtering options to find launches by year
- Implements Angular routing for detailed views
- Deployed using **Vercel**

## 🛠 Development Setup

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any source files.

## 📂 Code Scaffolding
To generate a new component, use:

```bash
ng generate component component-name
```

For a full list of schematics (`components`, `directives`, `pipes`, etc.), run:

```bash
ng generate --help
```

## 🔧 API Integration
This project uses the [SpaceX API](https://api.spacexdata.com/v3/launches) to fetch data. The `spacex.service.ts` file handles HTTP requests:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

## 🏗 Building the Project
To compile the project, run:

```bash
ng build
```

This will generate optimized build artifacts in the `dist/` directory.

## ✅ Running Tests
To execute unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

For end-to-end (e2e) testing:

```bash
ng e2e
```

## 🚀 Deployment (Vercel)
To deploy this project using Vercel:

1. Build the project for production:
   ```bash
   ng build --configuration=production
   ```
2. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
3. Deploy the project:
   ```bash
   vercel
   ```

## 📷 Screenshots
![Project Screenshot 1](https://github.com/user-attachments/assets/a0876592-a40d-467b-a91c-76380f5cc09b)
![Project Screenshot 2](https://github.com/user-attachments/assets/1f5944b9-d200-4973-9f2b-d2967edf8f23)
![Project Screenshot 3](https://github.com/user-attachments/assets/fdf4d808-c261-433a-a452-7583c421ee58)

## 📎 Additional Resources
For more information on Angular CLI commands, visit the [Angular CLI Documentation](https://angular.dev/tools/cli).
