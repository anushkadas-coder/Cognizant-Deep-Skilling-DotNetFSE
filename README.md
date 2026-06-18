# 🚀 Cognizant Digital Nurture 5.0 | .NET FSE Deep-Skilling Portfolio

Welcome to my production-grade submission repository for the **Cognizant Digital Nurture 5.0 .NET Full Stack Engineer (FSE) Deep Skilling Program**. This repository serves as a centralized portfolio showcasing complete implementation, rigorous unit testing, and architectural design compliance across the entire enterprise software development lifecycle.

The codebase is organized intentionally according to Cognizant’s four major engineering constructs, aligning with the 7-week curriculum requirements and the mandatory hands-on verification sheet.

---

## 🏛️ Program Architecture & Module Roadmap

| Cognizant Construct Pillar | Mapped Competency | Target Directory Folder | Mandatory Hands-On Covered | Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Engineering Concepts** | Design Patterns & Principles | `Engineering_Concepts/` | Exercise 1: Singleton Pattern (Logging Engine)<br>Exercise 2: Factory Method Pattern (Document Generation) | ✅ Complete |
| **1. Engineering Concepts** | Data Structures & Algorithms | `Engineering_Concepts/` | Exercise 2: E-commerce Platform Search (Binary vs Linear)<br>Exercise 7: Financial Forecasting (Recursive Optimization) | ✅ Complete |
| **2. Programming Languages** | Advanced SQL (SQL Server) | `Advanced_SQL/` | Exercise 1: Window Functions (`OVER`, `PARTITION BY`) & Ranking<br>Exercise 5: Stored Procedures & User-Defined Scalar Functions | ✅ Complete |
| **2. Programming Languages** | Unit Testing & Mocking | `UnitTestingHandson/` | Lab 1-9: Custom Attributes, Constraint Assertions, and Framework Isolation Engines utilizing **NUnit 4.x** and **Moq** | ✅ Complete |
| **3. Products & Frameworks** | ORM (Entity Framework Core) | `EFCoreHandson/` | Labs 1-15: Database Migrations, Fluent API Mapping, Eager/Explicit data loading, and `RowVersion` Concurrency Control | ✅ Complete |
| **3. Products & Frameworks** | Enterprise Web API | `WebApiHandson/` | Lab 1-6: RESTful routing, action verbs, global exception filter interceptors, and structured JSON formatting | ✅ Complete |
| **3. Products & Frameworks** | Microservices Architecture | `Microservices_HandsOn/` | Question 1: ASP.NET Core Microservices secure middleware, **JWT Token Bearer Authentication**, and `Admin` role checks | ✅ Complete |
| **3. Products & Frameworks** | Front-end JS Frameworks | `ReactHandson/` | Lab 1-17: Component lifecycle management, async hooks parsing, state isolation hooks, and automated state synchronization | ✅ Complete |
| **3. Products & Frameworks** | Front-end JS Frameworks | `Angular_HandsOn/` | Corporate SPAs, Standalone Component configurations, Reactive forms validation matrices, and RxJS async event pipes | ✅ Complete |
| **4. Platforms** | Version Control (GIT) | `Git_HandsOn/` | HOL 1-5: Machine configuration setup, `.gitignore` matrix rules, feature branching workflows, and 3-way merge conflict logging | ✅ Complete |

---

## 🛠️ Detailed Technical Highlights

### 🏛️ Foundational Engineering & Patterns (`Engineering_Concepts`)
* **Creational Integrity:** Implemented a thread-safe, lazy-initialized **Singleton Pattern** for central application logging utilities. Leveraged the **Factory Method Pattern** to dynamically instantiate loose-coupled document types (`Pdf`, `Word`, `Excel`), decoupling client instantiation logic.
* **Algorithmic Benchmarking:** Structured optimized lookup patterns using `Dictionary<K,V>` mechanics yielding $O(1)$ runtime speed thresholds. Implemented **Binary Search** routines over pre-sorted matrices providing $O(\log n)$ scalability profiles compared to baseline $O(n)$ linear loops.
* **Mathematical Recursion:** Developed an architectural forecasting tool utilizing safe tail-recursive convergence checks to calculate geometric multi-year investment valuations without stacking buffer flags.

### 🔒 Secure Microservices Architecture (`Microservices_HandsOn`)
* **Cryptographic Authorization:** Configured JSON Web Token (JWT) emission pipelines signed using 256-bit symmetric cryptographic security key hashing algorithms (`HmacSha256`).
* **Granular Role Checks:** Protected sensitive platform boundaries against privilege escalation flaws by enforcing active identity role constraints (`[Authorize(Roles = "Admin")]`).
* **Graceful Token Trapping:** Intercepted invalid or expired authentication payloads inside the asynchronous JwtBearer pipeline lifecycle (`OnAuthenticationFailed`) to cleanly communicate validation faults via custom response headers.

### 🗄️ Database Mapping & Concurrency Tuning (`EFCoreHandson`)
* **Query Performance Tuning:** Leveraged `.AsNoTracking()` projection mechanics within analytics query blocks to bypass Entity Framework track-cache loops, dropping memory overhead during report fetching.
* **Relational Normalization:** Mapped composite database constraints using Fluent API parameters inside `OnModelCreating` to strictly handle One-to-One (`ProductDetail`), Many-to-One (`Category`), and automated Many-to-Many entity navigation graphs.
* **Race Condition Avoidance:** Defended relational integrity pipelines against concurrent overwrites via byte-array row markers (`[Timestamp] RowVersion`), trapping conflict exceptions systematically.

---

## 🚀 Platforms, DevOps & Emerging Technologies

While the core functionality is hosted within the code compilation modules above, the final **Knowledge-Based Assessment (KBA)** preparation leverages standard DevOps, cloud containerization, and artificial intelligence patterns highlighted in the program:
* **CI/CD & Virtualization (Docker):** Modeled structural blueprints using multi-stage `Dockerfiles` to minimize package image footprints, segregating testing caches from final binary artifacts.
* **Agile Alignment:** Modeled product backlogs following standard INVEST guidelines, partitioning tasks using functional estimation templates (Planning Poker, Story Points).
* **Generative AI Integration:** Leveraged prompt engineering design patterns (Zero-shot, Few-shot, Chain-of-Thought) inside **GitHub Copilot** environments to optimize code coverage refactoring and clear structural boilerplate loops.

---

## 💻 Local Testing & Project Compilation

To verify any functional execution flow locally, open your terminal context and navigate directly into the target framework folder path:

### Compiling Core Architectural Concepts
```bash
cd Engineering_Concepts
dotnet restore
dotnet run
