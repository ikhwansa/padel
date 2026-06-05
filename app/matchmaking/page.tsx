import type { Metadata } from "next";
import MatchmakingClient from "./MatchmakingClient";

export const metadata: Metadata = {
  title: "Matchmaking | Vantage Point Padel",
};

export default function MatchmakingPage() {
  return <MatchmakingClient />;
}
