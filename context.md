# Multi-Tenant SaaS Project – AI Agent Context File

## Core Objective

Build a production-grade multi-tenant SaaS application demonstrating expertise in:

* React.js (web dashboard)
* Next.js (landing + SSR)
* React Native (mobile app)
* Node.js (backend)
* PostgreSQL (relational data)
* MongoDB (flexible data)

The system must follow clean architecture principles, proper separation of concerns, and real-world scalable design.

---

## Global Rules (STRICT)

1. Entire project must use TypeScript.
2. Do not include any comments inside code.
3. Follow clean architecture strictly.
4. Do not skip layers or merge responsibilities.
5. Every feature must support multi-tenancy using tenantId.
6. Do not proceed to the next step until the current step is reviewed and approved.
7. Code must be production-grade, not demo-level.
8. Maintain consistent folder structure.
9. Use DTO validation where required.
10. No business logic inside controllers.

---

## Architecture Overview

Monorepo structure:

root/

* client/

  * landing (Next.js)
  * web (React)
  * mobile (React Native)
* server/
* packages/
* infra/

Backend follows layered clean architecture:

* domain → entities and repository interfaces
* application → use cases and services
* infrastructure → database implementations
* interfaces → controllers and routes

---

## Multi-Tenancy Rules

* Every data record must include tenantId
* Tenant isolation must be enforced via middleware
* tenantId must be extracted from JWT
* No cross-tenant data access allowed

---

## Database Responsibilities

PostgreSQL:

* users
* tenants
* roles
* authentication data

MongoDB:

* projects
* tasks
* activity logs
* analytics

---

## Development Workflow (MANDATORY SDLC)

Follow this sequence strictly. Do not skip or reorder steps.

---

### STEP 1: Backend Project Setup

* Initialize Node.js with TypeScript
* Setup folder structure based on clean architecture
* Configure ESLint, Prettier
* Setup environment configuration module
* Setup Express server bootstrap

Deliverable:

* Running server with clean structure

STOP after completion and wait for review.

---

### STEP 2: Database Setup

* Setup PostgreSQL connection
* Setup MongoDB connection
* Create connection modules
* Ensure environment-based configs

Deliverable:

* Both databases connected successfully

STOP after completion and wait for review.

---

### STEP 3: Core Infrastructure

* Global error handling system
* Logging system
* Base response structure
* Middleware setup structure

Deliverable:

* Error + middleware pipeline working

STOP after completion and wait for review.

---

### STEP 4: Authentication System

* User registration
* User login
* Password hashing
* JWT generation
* Token validation middleware

JWT must include:

* userId
* tenantId
* role

Deliverable:

* Auth APIs working with JWT

STOP after completion and wait for review.

---

### STEP 5: Tenant System

* Create tenant (organization)
* Associate users with tenant
* Tenant-aware queries

Deliverable:

* Tenant creation and linkage working

STOP after completion and wait for review.

---

### STEP 6: Tenant Middleware

* Extract tenantId from JWT
* Attach tenantId to request object
* Enforce tenant isolation in all APIs

Deliverable:

* All requests scoped to tenant

STOP after completion and wait for review.

---

### STEP 7: Role-Based Access Control (RBAC)

* Define roles (admin, manager, user)
* Middleware for role validation
* Restrict routes based on roles

Deliverable:

* Protected routes based on roles

STOP after completion and wait for review.

---

### STEP 8: Project Module (MongoDB)

* Create project
* Get projects (tenant scoped)
* Update project
* Delete project

Deliverable:

* Full CRUD with tenant filtering

STOP after completion and wait for review.

---

### STEP 9: Task Module (MongoDB)

* Create tasks
* Assign users
* Update status
* Fetch tasks per project

Deliverable:

* Task system working with relations

STOP after completion and wait for review.

---

### STEP 10: Activity Logging

* Track user actions
* Store logs in MongoDB
* Include tenantId in logs

Deliverable:

* Activity tracking system

STOP after completion and wait for review.

---

### STEP 11: API Documentation

* Setup Swagger or equivalent
* Document all endpoints

Deliverable:

* Fully documented API

STOP after completion and wait for review.

---

### STEP 12: Frontend – Landing (Next.js)

* Build landing page
* Add authentication pages
* Setup API integration layer

Deliverable:

* Public site with auth pages

STOP after completion and wait for review.

---

### STEP 13: Frontend – Web Dashboard (React)

* Setup dashboard layout
* Implement auth flow
* Build project and task UI
* Integrate APIs

Deliverable:

* Functional dashboard

STOP after completion and wait for review.

---

### STEP 14: Mobile App (React Native)

* Setup navigation
* Implement login
* Display projects and tasks
* API integration

Deliverable:

* Basic mobile app working

STOP after completion and wait for review.

---

### STEP 15: Shared Packages

* Create shared types
* Create shared constants
* Sync across client and server

Deliverable:

* Reusable shared modules

STOP after completion and wait for review.

---

### STEP 16: DevOps Setup

* Dockerize backend
* Setup docker-compose (Node + PostgreSQL + MongoDB)
* Environment configs

Deliverable:

* Local full-stack running via Docker

STOP after completion and wait for review.

---

### STEP 17: Advanced Enhancements

* Subdomain-based tenancy
* Redis caching 
* Background jobs

Deliverable:

* Enhanced scalability features

STOP after completion and wait for review.

---

## Final Notes

* Prioritize correctness over speed
* Maintain clean and readable code structure
* Ensure strict adherence to architecture
* Each step must be independently functional before moving forward

End of Context
