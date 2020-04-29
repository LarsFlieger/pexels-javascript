export default function createClient(apiKey: string) {
  if (!apiKey || typeof apiKey !== "string") {
    throw new TypeError(
      `An ApiKey must be provided when initiating the Pexel's client.`
    );
  }
}