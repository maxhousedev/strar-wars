export default function generateRandomString() {
  const radix = 36;
  const indexA = 2;
  const indexB = 15;
  return Math.random().toString(radix).substring(indexA, indexB);
}
