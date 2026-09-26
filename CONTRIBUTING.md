# Contributing to just-a.site

Use this repository to request and manage your `name.just-a.site` subdomain.

## Submit a Subdomain

1. Fork this repository.
2. Open the `records` folder.
3. Create a JSON file using your requested subdomain name.
4. Add your GitHub username and DNS record.
5. Open a pull request.

Example filename:

```text
records/example.json
```

Example record:

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

Supported record types:

- `A`
- `AAAA`
- `CNAME`
- `TXT`
- `MX`
- `SRV`

Some record types have extra limits.

## File Rules

Your file must:

- Use valid JSON.
- Match your requested subdomain name.
- Use your GitHub username.
- Use supported DNS records.
- Follow the reserved name list.
- Contain only the records needed for your subdomain.

Do not edit another user's record.

## Name Rules

Subdomain names must:

- Use lowercase letters, numbers, and hyphens.
- Start with a letter or number.
- End with a letter or number.
- Avoid reserved names.
- Avoid impersonation.

Valid:

```text
ryan
my-site
project123
```

Invalid:

```text
-my-site
my-site-
my_site
admin
```

## Updating Your Record

Edit your existing file and open a pull request.

Keep the same filename and owner unless you are transferring ownership.

## Removing Your Record

Delete your record file and open a pull request.

## Ownership Transfers

For ownership transfers, include both GitHub usernames in the pull request description.

A maintainer will review the request before changing ownership.

## Pull Request Rules

Keep each pull request focused on one subdomain.

Your pull request should include:

- Requested subdomain
- Record type
- Record value
- GitHub username
- Reason for the change

## Abuse

Do not use just-a.site for:

- Phishing
- Malware
- Spam
- Impersonation
- Credential theft
- Illegal services
- Abuse of third party platforms

Maintainers reserve the right to remove records linked to abuse or security risks.
