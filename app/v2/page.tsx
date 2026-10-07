import type { Metadata } from "next";
import { WeddingInvitationV2 } from "@/components/invitation-v2/wedding-invitation-v2";

export const metadata: Metadata = {
  title: "Jean Carlos González & Melissa Escobar | Nuestra boda",
  description: "Acompáñanos a celebrar nuestra boda."
};

export default function WeddingInvitationV2Page() {
  return <WeddingInvitationV2 />;
}
