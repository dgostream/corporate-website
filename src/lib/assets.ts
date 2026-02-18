const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION ?? "2026-02-17-1";

export function withAssetVersion(path: string): string {
  const delimiter = path.includes("?") ? "&" : "?";
  return `${path}${delimiter}v=${ASSET_VERSION}`;
}
