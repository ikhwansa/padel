import type { Metadata } from "next";
import BookingsClient from "./BookingsClient";

export const metadata: Metadata = {
  title: "My Bookings | The Kinetic Court",
};

export default function BookingsPage() {
  return <BookingsClient />;
}
