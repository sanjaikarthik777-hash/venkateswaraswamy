/**
 * Darshan timings configuration.
 * Never publish estimated timings as confirmed fact.
 * Replace `timing` strings and set `confirmed: true` once verified by the temple office.
 */
export interface DarshanSession {
  id: string;
  session: string;
  timing: string;
  confirmed: boolean;
  notes: string;
}

export const DARSHAN_CONFIG = {
  allTimingsConfirmed: false,
  verificationNotice:
    'Official daily opening and darshan timings are awaiting confirmation from the temple administration. Please verify by phone or at the temple office before planning your visit.',
  festivalNotice:
    'Darshan and pooja timings may change on festival days, Vaikunta Ekadasi, Purattasi Saturdays, and special occasions.',
  sessions: [
    {
      id: 'morning-darshan',
      session: 'Morning Darshan',
      timing: 'To be confirmed by temple administration',
      confirmed: false,
      notes: 'Morning Suprabhatham, Nithya Pooja, and public darshan hours will be updated once confirmed.'
    },
    {
      id: 'evening-darshan',
      session: 'Evening Darshan',
      timing: 'To be confirmed by temple administration',
      confirmed: false,
      notes: 'Evening Deeparadhana, Archana, and closing hours will be updated once confirmed.'
    },
    {
      id: 'special-days',
      session: 'Weekends & Auspicious Days',
      timing: 'To be confirmed by temple administration',
      confirmed: false,
      notes: 'Extended darshan schedules on Saturdays, Ekadasi, and annual festivals are announced by the temple office.'
    }
  ] satisfies DarshanSession[]
};
