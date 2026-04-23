---
name: full-scope-code-review-security
description: Perform an enterprise-grade full-scope code review and security audit with architecture, quality, exploit simulation, performance, dependency risk analysis, and concrete remediation examples.
---

# Full-Scope Code Review + Security Audit Skill

Use this skill when the user asks for deep code review, penetration-style security analysis, architecture critique, production hardening, or a complete engineering audit.

## Outcome

Produce a high-signal report that:
- finds concrete bugs, vulnerabilities, architecture risks, and performance bottlenecks
- explains realistic exploit paths and business impact
- provides prioritized, production-grade fixes
- includes before/after code examples for major findings
- separates confirmed findings from assumptions and unknowns

## Mandatory Inputs

Collect this context before final conclusions (ask only if missing):
- tech stack and major framework versions
- environment: dev, staging, production
- system type: SaaS, marketplace, internal tool, etc.
- trust boundaries: public endpoints, admin-only paths, external integrations
- data sensitivity: PII, payments, auth tokens, secrets

If some context is unavailable, continue with explicit assumptions and lower confidence labels.

## Review Protocol (Follow In Order)

### 1) Scope + Threat Model
- define assets, attacker profiles, and attack surfaces
- map trust boundaries and privilege boundaries
- list entry points: APIs, forms, uploads, webhooks, jobs, realtime channels

### 2) Architecture Review
- identify architecture style/patterns used (or absence)
- evaluate scalability: horizontal and vertical bottlenecks
- detect tight coupling and poor separation of concerns
- flag anti-patterns (god modules, hidden side effects, cross-layer leakage)

### 3) Code Quality Review
- readability, naming, cohesion, and module boundaries
- DRY/SOLID/KISS violations with concrete examples
- dead code, duplication, and risky abstractions
- maintainability risks (high cyclomatic complexity, brittle conditionals)

### 4) Security Audit (Attacker Mindset)

#### Input Handling
- SQL/NoSQL/command/template injection
- XSS (stored, reflected, DOM)
- unsafe parsing/deserialization/eval patterns
- missing validation, canonicalization, or output encoding

#### Authentication + Authorization
- broken auth flows and weak session/token handling
- missing authorization checks and BOLA/IDOR
- privilege escalation paths, tenant isolation failures

#### API Security
- unprotected endpoints and missing rate limiting
- mass assignment, over-posting, excessive data exposure
- replay risks, weak webhook verification, weak idempotency

#### Data Security
- sensitive data leakage in logs/responses/errors
- weak crypto usage (bad modes, static IVs, custom crypto)
- secrets in source, build artifacts, or client bundles

#### Infrastructure + Platform
- insecure CORS/CSP/headers/cookies/TLS assumptions
- environment variable misuse and secret sprawl
- dangerous defaults in reverse proxy/CDN/runtime config

### 5) Breaking Point + Edge-Case Analysis
Simulate and explain failure mode for:
- null/undefined and invalid type inputs
- boundary values (min/max, empty/huge payloads)
- concurrency and race conditions
- retry storms, partial failures, and timeout cascades

### 6) Performance Review
- CPU, memory, I/O hotspots
- blocking operations in hot paths
- N+1 queries and redundant fetches
- frontend render churn and unnecessary hydration/re-render
- cacheability gaps and inefficient serialization

### 7) Dependency + Supply Chain Risk
- stale libraries and high-risk transitive deps
- vulnerable package versions and unsafe install scripts
- unnecessary heavy dependencies with low value
- lockfile hygiene and provenance/signature gaps

### 8) Refactoring + Hardening Plan
Provide:
1. priority order (P0/P1/P2) by exploitability + impact
2. code-level remediations
3. architectural remediations
4. security hardening controls
5. tests required to prevent regression

### 9) Fix Examples (Required For Major Findings)
For each major issue include:
- BEFORE: vulnerable/problematic snippet
- AFTER: hardened/fixed snippet
- WHY IT WORKS: short mechanism-level explanation

## Reporting Format (Required)

Start with findings, highest severity first.

For each finding use this schema:
- ID: CR-###
- Severity: Critical | High | Medium | Low
- Confidence: High | Medium | Low
- Category: Security | Reliability | Performance | Architecture | Maintainability
- Location: file path + line
- Evidence: concrete code behavior or observed pattern
- Exploit / Failure Scenario: realistic attack or break path
- Impact: user/business/system impact
- Fix: exact remediation approach
- Verification: test or check to confirm fix
- Reference: OWASP/CWE/standard when applicable

Then add:
- Explicitly Safe Areas: what is safe and why
- Unknowns + Assumptions: what could not be verified
- Residual Risk: what remains after proposed fixes

## Prompt Template To Use

Use this improved prompt when the user requests a full audit:

"""
You are an enterprise senior software engineer, application security tester, and performance engineer.

Perform a FULL-SCOPE CODE REVIEW and SECURITY AUDIT of the provided codebase.

Operating mode:
- No generic advice.
- Be adversarial and evidence-driven.
- Simulate realistic attack paths and production failure modes.
- If a control is safe, explicitly confirm why.
- Distinguish confirmed findings from assumptions.

Context:
- Tech stack: [REQUIRED]
- Environment: [dev/staging/production]
- System type: [SaaS/marketplace/internal/etc]
- Threat profile: [public app, authenticated users, admins, third-party integrators]

Output structure (mandatory):
A) Architecture Review
B) Code Quality Review
C) Security Audit
   - Input Handling
   - Authentication & Authorization
   - API Security
   - Data Security
   - Infrastructure Risks
D) Edge Cases & Breaking Point Analysis
E) Performance Review
F) Dependency & Supply Chain Risk
G) Refactoring Plan (P0/P1/P2)
H) Fix Examples (BEFORE/AFTER/WHY)

Finding format (mandatory for each issue):
- ID, Severity, Confidence, Category
- Location (file + line)
- Evidence
- Exploit/failure scenario
- Impact
- Fix
- Verification steps
- CWE/OWASP mapping (if applicable)

Minimum quality bar:
- At least one realistic exploit chain for each Critical/High security finding.
- At least one regression test idea per major fix.
- Flag missing observability (logs/metrics/traces) where it blocks incident response.
- Include CI/CD security gates: SAST, dependency scan, secret scan, IaC/container scan where relevant.
"""

## Decision Rules

- If code access is partial: provide scoped findings only and list blind spots.
- If no runtime data: avoid false certainty; provide confidence labels.
- If finding is speculative: mark as hypothesis and describe what evidence would confirm it.

## Completion Checklist

A review is complete only when:
- all sections A-H are covered
- every major finding includes a fix and verification step
- priorities are ranked (P0/P1/P2)
- safe areas and unknowns are explicitly listed
- report is actionable for immediate implementation
