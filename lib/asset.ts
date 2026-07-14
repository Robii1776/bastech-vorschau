/**
 * Präfixt statische Assets mit dem Base-Path, wenn die Seite in einem
 * Unterverzeichnis läuft (z.B. GitHub-Pages-Vorschau). Auf der echten
 * Domain ist NEXT_PUBLIC_BASE_PATH leer und die Pfade bleiben unverändert.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
