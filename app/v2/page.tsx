import type { Metadata } from "next";
import { WeddingInvitationV2 } from "@/components/invitation-v2/wedding-invitation-v2";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jean Carlos & Melissa | Nuestra boda",
  description: "Acompáñanos a celebrar nuestra boda.",
  openGraph: {
    title: "Jean Carlos & Melissa | Nuestra boda",
    description: "Nos casamos el 06 de noviembre de 2026. Acompáñanos a celebrar nuestra boda.",
    type: "website",
    locale: "es_CO",
    siteName: "Boda de Jean Carlos y Melissa",
    url: "/v2",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Carlos & Melissa | Nuestra boda",
    description: "06 de noviembre de 2026 · Acompáñanos a celebrar nuestra boda.",
  },
};

export default function WeddingInvitationV2Page() {
  return <WeddingInvitationV2 />;
}
