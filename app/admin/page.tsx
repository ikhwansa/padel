import type { Metadata } from 'next';
import AdminClient from './AdminClient';

export const metadata: Metadata = {
  title: 'Admin Command Center | Kinetic Padel',
  description: 'Manage operational assets, bookings, players, and matchmaking.',
};

export default function AdminPage() {
  return <AdminClient />;
}
