const fs = require("fs");
const path = require("path");
const net = require("net");

const domainsDir = path.join(__dirname, "..", "domains");
const reservedPath = path.join(__dirname, "..", "reserved.json");

const reserved = JSON.parse(
  fs.readFileSync(reservedPath, "utf8")
).map((name) => name.toLowerCase());

const allowedRecords = [
  "A",
  "AAAA",
  "CNAME",
  "TXT",
  "MX",
  "SRV"
];

function fail(file, message) {
  console.error(`FAIL ${file}: ${message}`);
  process.exitCode = 1;
}

function validHostname(value) {
  return /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9-]{2,63}$/.test(value);
}

const files = fs
  .readdirSync(domainsDir)
  .filter((file) => file.endsWith(".json"));

for (const file of files) {
  const filePath = path.join(domainsDir, file);
  const name = path.basename(file, ".json");

  console.log(`Checking ${file}`);

  let data;

  try {
    data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    fail(file, "Invalid JSON.");
    continue;
  }

  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(name)) {
    fail(file, "Invalid subdomain name.");
    continue;
  }

  if (name.length > 63) {
    fail(file, "Subdomain is longer than 63 characters.");
    continue;
  }

  if (reserved.includes(name.toLowerCase())) {
    fail(file, "Subdomain is reserved.");
    continue;
  }

  if (
    !data.owner ||
    typeof data.owner.username !== "string" ||
    !data.owner.username.trim()
  ) {
    fail(file, "Missing owner.username.");
    continue;
  }

  if (
    !data.records ||
    typeof data.records !== "object" ||
    Array.isArray(data.records)
  ) {
    fail(file, "Missing records.");
    continue;
  }

  const recordTypes = Object.keys(data.records);

  if (recordTypes.length === 0) {
    fail(file, "At least one DNS record is required.");
    continue;
  }

  for (const type of recordTypes) {
    if (!allowedRecords.includes(type)) {
      fail(file, `Unsupported record type: ${type}`);
    }
  }

  if (
    data.records.CNAME &&
    (
      data.records.A ||
      data.records.AAAA ||
      data.records.MX ||
      data.records.SRV
    )
  ) {
    fail(file, "CNAME cannot be combined with A, AAAA, MX, or SRV.");
  }

  if (data.records.A) {
    const values = Array.isArray(data.records.A)
      ? data.records.A
      : [data.records.A];

    for (const value of values) {
      if (net.isIP(value) !== 4) {
        fail(file, `Invalid IPv4 address: ${value}`);
      }
    }
  }

  if (data.records.AAAA) {
    const values = Array.isArray(data.records.AAAA)
      ? data.records.AAAA
      : [data.records.AAAA];

    for (const value of values) {
      if (net.isIP(value) !== 6) {
        fail(file, `Invalid IPv6 address: ${value}`);
      }
    }
  }

  if (data.records.CNAME) {
    if (
      typeof data.records.CNAME !== "string" ||
      !validHostname(data.records.CNAME)
    ) {
      fail(file, "Invalid CNAME target.");
    }
  }

  if (data.records.TXT) {
    const values = Array.isArray(data.records.TXT)
      ? data.records.TXT
      : [data.records.TXT];

    for (const value of values) {
      if (typeof value !== "string") {
        fail(file, "TXT records must contain strings.");
      }
    }
  }

  if (!process.exitCode) {
    console.log(`PASS ${file}`);
  }
}

if (process.exitCode) {
  console.error("Validation failed.");
} else {
  console.log("All domain records passed.");
}
