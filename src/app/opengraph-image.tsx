import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Danny Roosevelt";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Read the bundled mono font at build time (no network dependency) so the
  // card renders in the same monospace aesthetic as the site.
  const jetBrainsMono = await readFile(
    join(process.cwd(), "src/app/fonts/JetBrainsMono-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#020617",
          padding: "80px",
          fontFamily: "JetBrains Mono",
        }}
      >
        <div
          style={{
            fontSize: 84,
            color: "#f8fafc",
            letterSpacing: "-0.02em",
          }}
        >
          Danny Roosevelt
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "#94a3b8",
          }}
        >
          Product — building Pipedream
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: jetBrainsMono,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
