type ClassValue = string | number | null | undefined | false | Record<string, boolean>;

/**
 * Lightweight class name joiner. Avoids pulling in `clsx` + `tailwind-merge`
 * as a dependency for a single utility; safe for the class patterns used
 * throughout this project (no conflicting Tailwind utility collisions).
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
      continue;
    }

    for (const key in input) {
      if (input[key]) out.push(key);
    }
  }

  return out.join(" ");
}
