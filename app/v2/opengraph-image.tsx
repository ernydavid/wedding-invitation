import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Jean Carlos y Melissa — Nos casamos el 06 de noviembre de 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "app/icon.png"), "base64");
const logo = `data:image/png;base64,${logoData}`;

export default function WeddingShareImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#fbfaf6", color: "#5d432e", padding: 32 }}>
        <div style={{ display: "flex", position: "relative", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", border: "1px solid #ad895c", overflow: "hidden" }}>
          <div style={{ display: "flex", position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "#eaded6", left: -180, top: -170 }} />
          <div style={{ display: "flex", position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "#eaded6", right: -180, bottom: -170 }} />
          <img src={logo} width={156} height={156} alt="Monograma J&M" />
          <div style={{ display: "flex", marginTop: 12, color: "#8c6b43", fontSize: 19, letterSpacing: 6 }}>NOS CASAMOS</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 68, letterSpacing: -2, lineHeight: 1.15 }}>Jean Carlos &amp; Melissa</div>
          <div style={{ display: "flex", marginTop: 24, color: "#8c6b43", fontSize: 25, letterSpacing: 3 }}>06 · NOVIEMBRE · 2026</div>
          <div style={{ display: "flex", marginTop: 28, color: "#5b5f52", fontSize: 27 }}>Acompáñanos a celebrar nuestra boda</div>
        </div>
      </div>
    ),
    size,
  );
}
