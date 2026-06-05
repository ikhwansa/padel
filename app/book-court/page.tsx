import type { Metadata } from "next";
import BookCourtClient from "./BookCourtClient";

export const metadata: Metadata = {
  title: "The Kinetic Court | Book Your Match",
};

export default function BookCourtPage() {
  return <BookCourtClient />;
}
