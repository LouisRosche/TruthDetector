# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Truth Hunters seriously. If you discover a security vulnerability, please follow these steps:

### Where to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via:
- **Email**: Open an issue with the title "Security Concern - Need Contact Info" and we'll provide a secure reporting channel
- For critical vulnerabilities, you can create a [GitHub Security Advisory](https://github.com/LouisRosche/Truth-Hunters/security/advisories/new)

### What to Include

Please include the following information:
- Type of vulnerability (XSS, SQL injection, authentication bypass, etc.)
- Full paths of affected source files
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### Response Timeline

- **Initial Response**: Within 48 hours, we'll acknowledge your report
- **Status Update**: Within 7 days, we'll provide a detailed response with next steps
- **Fix Timeline**: Critical vulnerabilities will be patched within 30 days
- **Disclosure**: We'll coordinate disclosure timing with you once a fix is available

## Security Considerations for Deployment

### Educational Context
Truth Hunters is designed for use with middle school students (ages 11-14). Consider these security and privacy factors:

### Firebase Security
If using Firebase for class-wide leaderboards:
- Review and customize Firestore security rules in `firestore.rules`
- Use Firebase Authentication if collecting student data
- Comply with COPPA, FERPA, and local privacy regulations
- Never store personally identifiable information (PII) without proper consent

### Content Moderation
- The built-in content moderation system (`src/utils/moderation.js`) filters inappropriate team names
- Review and customize the word list for your educational context
- Monitor student-submitted claims through the Teacher Dashboard

### Deployment Security
Production deployments should include:
- Security headers (pre-configured in `netlify.toml` and `vercel.json`)
- HTTPS/TLS encryption (required for Firebase)
- Content Security Policy (CSP) headers
- Regular dependency updates via Dependabot

### Client-Side Security
All game logic runs client-side. This means:
- Scores can be manipulated via browser developer tools
- This is intentional - the game is for learning, not assessment
- Do NOT use scores for grading or high-stakes evaluation
- Treat the game as formative learning, not summative assessment

## Known Security Considerations

### Not Security Vulnerabilities
The following are intentional design decisions, not security flaws:

1. **Client-side score calculation**: Scores are calculated in the browser and can be modified. This is acceptable for an educational game focused on learning, not assessment.

2. **Local storage of game state**: Game progress is saved in browser localStorage. This is appropriate for the use case and avoids requiring authentication.

3. **Firebase optional**: The app works without Firebase, storing data locally. This reduces privacy concerns but limits collaborative features.

4. **No authentication for basic gameplay**: Students can play without accounts. This is intentional to reduce barriers to use in educational settings.

## Security Best Practices for Teachers

### Data Privacy
- Avoid collecting student names if possible (use team names like "Team Awesome")
- If using Firebase, review your school's data privacy policies
- Don't store grades or assessment data in the game
- Clear browser localStorage periodically to remove old game data

### Classroom Management
- Monitor student-submitted claims before approval
- Use the content moderation features
- Set clear expectations about appropriate team names
- Review the Teacher Dashboard regularly

## Dependencies

We use Dependabot to monitor dependencies for known vulnerabilities. Security updates are applied promptly.

Current security-critical dependencies:
- **Firebase SDK**: For optional cloud features
- **DOMPurify**: For XSS prevention in user input
- **React**: UI framework

## Thank You

We appreciate the security research community's efforts to help keep Truth Hunters safe for students and educators.
