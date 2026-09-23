"use client";

import { useRef } from "react";
import { InvitationHeader } from "@/components/invitation/header";
import { useWeddingAnimations } from "@/components/invitation/use-wedding-animations";
import { CelebrationSection } from "@/components/invitation/sections/celebration-section";
import { DateSection } from "@/components/invitation/sections/date-section";
import { GiftsSection } from "@/components/invitation/sections/gifts-section";
import { HeroSection } from "@/components/invitation/sections/hero-section";
import { InvitationSection } from "@/components/invitation/sections/invitation-section";
import { LocationSection } from "@/components/invitation/sections/location-section";

export function WeddingInvitation() {
  const invitationRef = useRef<HTMLElement>(null);
  useWeddingAnimations(invitationRef);

  return (
    <main ref={invitationRef} className="min-h-screen overflow-x-hidden bg-black">
      <InvitationHeader />
      <HeroSection />
      <DateSection />
      <LocationSection />
      <InvitationSection />
      <CelebrationSection />
      <GiftsSection />
    </main>
  );
}
