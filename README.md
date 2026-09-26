# just-a.site

Get your own free `name.just-a.site` subdomain.

Use your subdomain for a website, project, profile, API, documentation, or service.

## Example

```text
yourname.just-a.site
```

You choose the name and DNS record. We review the request and publish approved records.

## Submit a Subdomain

1. Fork this repository.
2. Create a JSON file inside `records/`.
3. Name the file after your requested subdomain.
4. Add your GitHub username and DNS record.
5. Open a pull request.

Example:

```json
{
  "name": "example",
  "owner": {
    "github": "ExampleUser"
  },
  "records": {
    "CNAME": "example.com"
  }
}
```

This creates:

```text
example.just-a.site
```

## Supported Records

We support:

- `A`
- `AAAA`
- `CNAME`
- `TXT`
- `MX`
- `SRV`

Some record types have extra restrictions.

## Rules

Your submission must:

- Use an available name.
- Use a valid DNS record.
- Follow our reserved name list.
- Point to a service you own or control.
- Follow GitHub and service rules.
- Avoid phishing, malware, spam, or impersonation.

We reserve names used by just-a.site and its services.

## Updates

To update your subdomain, edit your record file and open a new pull request.

To remove your subdomain, delete your record file through a pull request.

## Ownership

Your GitHub username identifies the owner of your record.

We use Git history to track submissions, updates, and ownership changes.

## DNS

Approved records deploy through our DNS system after review.

Changes might require time to reach DNS resolvers.

## Contributing

Read `CONTRIBUTING.md` before submitting changes.

## Security

Report security issues through the process listed in `SECURITY.md`.
