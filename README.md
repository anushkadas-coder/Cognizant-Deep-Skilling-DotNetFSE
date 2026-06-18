# 🚀 Cognizant Digital Nurture 5.0 | .NET FSE Deep-Skilling Portfolio

Welcome to my production-grade submission repository for the **Cognizant Digital Nurture 5.0 .NET Full Stack Engineer (FSE) Deep Skilling Program**. This repository serves as a centralized portfolio showcasing complete implementation, rigorous unit testing, and architectural design compliance across the entire enterprise software development lifecycle.

---

## 🏛️ Repository Architecture & Module Roadmap

| Skill Module | Directory Folder | Technical Scope & Covered Key-Concepts | Status |
| :--- | :--- | :--- | :--- |
| **01. C# & Data Structures** | `Week_1_DSA/` | Collections, Time/Space complexities ($O(n)$, $O(\log n)$), searching/sorting infrastructure. | ✅ Completed |
| **02. Advanced SQL Server** | `Advanced_SQL/` | Complex subqueries, indexing optimization, stored procedures, execution triggers, and relational constraints. | ✅ Completed |
| **03. Unit Testing & Mocking** | `UnitTestingHandson/` | Robust QA isolation engines utilizing **NUnit 4.x** and **Moq** setup verification testing behaviors. | ✅ Completed |
| **04. ORM Engine (EF Core 8.0)** | `EFCoreHandson/` | Retail Inventory System Labs 1-15 covering Fluent API, migrations, Eager/Explicit loading, and `RowVersion` concurrency tokens. | ✅ Completed |
| **05. Enterprise Web APIs** | `WebApiHandson/` | ASP.NET Core RESTful APIs, global exception interceptors, structured content negotiations, and custom routing. | ✅ Completed |
| **06. Decentralized Architectures** | `Microservices_HandsOn/` | Secure ASP.NET Core Web API microservices implementing **JWT Token Bearer Authentication**, dynamic claims validation, and `Admin` role checks. | ✅ Completed |
| **07. Source Control Management** | `Git_HandsOn/` | Advanced local versioning pipelines tracking branch topologies, `.gitignore` matrix filters, and 3-way merge conflict resolution logs. | ✅ Completed |
| **08. Frontend React SPAs** | `ReactHandson/` | Component life cycles, state isolation hooks, asynchronous context consumers, and state synchronization. | ✅ Completed |
| **09. Frontend Angular Framework** | `Angular_HandsOn/` | Corporate SPAs, Standalone Component configurations, Reactive forms validation matrices, and RxJS async event pipes. | ✅ Completed |

---

## 🛠️ Detailed Technical Highlights

### 🔒 Secure Microservices Architecture (`Microservices_HandsOn`)
* **Cryptographic Tokens:** Implemented standard JSON Web Token (JWT) emission pipelines signed using 256-bit symmetric security key hashing algorithms (`HmacSha256`).
* **Granular RBAC:** Configured restrictive route intercepts using declarative attributes (`[Authorize(Roles = "Admin")]`) to safeguard microservice boundaries.
* **Middleware Lifecycle Hooks:** Wired custom asynchronous events inside the JwtBearer pipeline (`OnAuthenticationFailed`) to intercept token expiration states seamlessly and inject security metrics into response headers.

### 🗄️ Relational Mapping & Concurrency Control (`EFCoreHandson`)
* **Optimization Strategies:** Integrated `.AsNoTracking()` projections within data extraction layers to bypass EF memory cache allocation cycles for fast read-only query reporting.
* **Relationship Matrix:** Explicitly engineered strict structural database bounds managing One-to-One (`ProductDetail`), Many-to-One (`Category`), and automated Many-to-Many navigational boundaries.
* **Data Conflict Integrity:** Configured active state tracking utilizing byte-array timestamp concurrency tokens (`[Timestamp] RowVersion`) to catch and gracefully intercept multi-threaded race conditions during bulk execution sequences.

### 🧪 Professional Quality Assurance Suite (`UnitTestingHandson`)
* **Dependency Mocking:** Bypassed real-world infrastructure dependencies (such as active SMTP mail servers and physical file storage IO blocks) through precise behaviors mimicking (`_mockMailSender.Setup(...).Returns(true)`).
* **Boundary Validation Matrix:** Configured automated matrix parameter mappings via custom attributes (`[TestCaseSource]`, `[TestCase]`) to assert proper boundary execution, exception bubbling, and clean structural outputs.

---

## 🚀 Environment Verification & Local Execution

To verify or test any functional module runtime logic locally, initialize your development shell environment and navigate to the desired specific directory:

### Running the Microservices Security Engine
```bash
cd Microservices_HandsOn/MicroservicesAuthAPI
dotnet restore
dotnet build
dotnet run
