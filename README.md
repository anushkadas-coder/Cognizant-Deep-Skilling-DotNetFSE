# Cognizant Deep-Skilling - .NET FSE (Week 1 Submission)

This repository contains the mandatory assignments implemented in C# (.NET 8.0) for Week 1 training.

## 🛠️ Design Patterns Implemented (11 Exercises)

### Creational Patterns
* **Exercise 1: Singleton Pattern** - Thread-safe centralized logging utility class.
* **Exercise 2: Factory Method Pattern** - Decoupled document management system supporting Word, PDF, and Excel creation.
* **Exercise 3: Builder Pattern** - Step-by-step construction of complex Computer setups with optional parts.

### Structural Patterns
* **Exercise 4: Adapter Pattern** - Dynamic integration interface unifying disparate payment gateways (PayPal, Stripe).
* **Exercise 5: Decorator Pattern** - Dynamic runtime channel addition (SMS, Slack) over a baseline Email notifier core.
* **Exercise 6: Proxy Pattern** - Smart structural proxy for localized memory buffering, asset lazy-loading, and image caching.

### Behavioral & Architectural Patterns
* **Exercise 7: Observer Pattern** - Event-driven real-time multi-client messaging platform tracking stock market tickers.
* **Exercise 8: Strategy Pattern** - Dynamic runtime polymorphic checkout mechanism shifting billing strategies interchangeably.
* **Exercise 9: Command Pattern** - Loose-coupled home automation system routing remote execution objects safely to hardware receivers.
* **Exercise 10: MVC Pattern** - Decoupled separation of concerns engine handling student profile datasets via strict Controller routes.
* **Exercise 11: Dependency Injection** - Constructor injection architectural pipeline isolating service logic from data providers.

## 🚀 Environment Specifications
* **Language:** C#
* **Runtime:** .NET 8.0 (Long-Term Support)
* **IDE:** Visual Studio 2022

  ---

## 🌐 Week 2: Enterprise Full-Stack Integration & Secure Portal

Now, the repository has been scaled into a fully production-grade multi-tier architecture, combining the robust .NET backend with a highly reactive modern frontend dashboard.

### 🏗️ Extended Architecture & Subsystems

1. **`WebApiHandson` (The Backend Core Engine)**
   * Built using **ASP.NET Core 8.0 Web API**.
   * Implemented custom controllers to expose production-ready REST endpoints (`GET`, `POST`, `PUT`, `DELETE`).
   * Configured global **CORS (Cross-Origin Resource Sharing)** management policies to securely whitelist and pipe stream queries exclusively to the frontend client.

2. **`ReactHandson` (The Premium UI Layer)**
   * Engineered with **React.js (Vite environment)** using a clean, modern aesthetic.
   * Utilized **Axios** asynchronous wrappers to lifecycle-hook backend state payloads directly into the UI component tree.
   * Features real-time state reductions computing active inventory values and SKU parameters automatically.

3. **Client-Side Authorization & Router Guard**
   * Integrated **React Router Dom** to migrate the SPA framework into a secure multi-page web portal.
   * Developed a pristine **Gatekeeper Login Interface** enforcing strict context validation.
   * Implemented encapsulating **Protected Route Wrappers** preventing unauthorized URL hijacking attempts.

### 🛠️ Local Launch Sequence

To test the entire full-stack pipeline locally:

1. **Boot the API Server:**
   ```bash
   cd WebApiHandson
   dotnet run
