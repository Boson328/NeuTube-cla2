export function baseUrl(): string {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://neu.boson.jp";
}
