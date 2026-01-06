const crypto = require("crypto");

const verifyUropaySignature = (payload, signature, environment) => {
  const secret = process.env.UROPAY_SECRET;

  // STEP 1: sha512 hash the secret
  const hashedSecret = crypto
    .createHash("sha512")
    .update(secret)
    .digest("hex");

  // STEP 2: sort payload keys
  const sortedPayload = Object.fromEntries(
    Object.entries(payload).sort(([a], [b]) => a.localeCompare(b))
  );

  // STEP 3: attach environment
  const finalPayload = {
    ...sortedPayload,
    environment,
  };

  const computedSignature = crypto
    .createHmac("sha256", hashedSecret)
    .update(JSON.stringify(finalPayload))
    .digest("hex");

  return computedSignature === signature;
};

module.exports = verifyUropaySignature;
