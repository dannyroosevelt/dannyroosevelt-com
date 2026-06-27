import { ImageResponse } from "next/og";

export const alt = "Danny Roosevelt";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
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
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
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
    }
  );
}
