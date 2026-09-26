# Security Policy

Security reports for just-a.site should stay private until we review the issue.

## Report a Security Issue

Do not open a public GitHub issue for security problems.

Send reports through our private security contact or GitHub Security Advisory system.

Include:

- A short description
- Affected subdomain or service
- Steps to reproduce
- Expected result
- Actual result
- Screenshots or logs, if needed
- Your GitHub username

## Scope

Security reports should relate to:

- DNS deployment
- Record validation
- Submission checks
- GitHub workflows
- Repository permissions
- Authentication
- Admin tools
- API endpoints
- DNS takeover risks
- Record ownership
- Reserved name bypasses
- Injection issues
- Secret exposure

## Out of Scope

Do not report:

- Missing features
- General bugs with no security impact
- DNS propagation delays
- Third party service outages
- Issues caused by unsupported DNS records
- Social engineering attempts
- Spam reports with no security impact

## Subdomain Abuse

Report subdomains used for:

- Phishing
- Malware
- Credential theft
- Impersonation
- Spam
- Fraud
- Redirect abuse

Include the full subdomain and proof of the issue.

Example:

```text
example.just-a.site
```

## Testing Rules

Do not:

- Access data you do not own
- Delete or change user data
- Disrupt DNS service
- Flood our systems
- Run denial of service tests
- Test against other users' subdomains
- Publish private data
- Publish an issue before review

Use your own test record when possible.

## Supported Versions

We only support the current production version of just-a.site and its deployment tools.

Older commits, forks, and archived versions do not receive security fixes.

## Response Process

We review security reports and confirm valid issues.

Serious issues might lead to:

- Record suspension
- Workflow shutdown
- Credential rotation
- DNS changes
- Repository permission changes
- Code fixes
- Rule changes

## Disclosure

Give us time to review and fix the issue before public disclosure.

Do not publish secrets, credentials, private records, or exploit details before a fix exists.

## Secrets

Never submit:

- API tokens
- Passwords
- Private keys
- Cloudflare tokens
- GitHub tokens
- Database credentials

If you expose a secret, rotate it at once.

## Contact

Use the security contact listed by just-a.site or open a private GitHub Security Advisory in the repository.
