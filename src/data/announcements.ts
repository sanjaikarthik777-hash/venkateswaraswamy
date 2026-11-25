/**
 * Temple announcements list.
 * Temple administration can add, edit, or reorder announcements here.
 */
export interface TempleAnnouncement {
  id: string;
  title: string;
  badge: string;
  dateLabel: string;
  message: string;
  isUrgent?: boolean;
}

export const ANNOUNCEMENTS: TempleAnnouncement[] = [
  {
    id: 'official-timings-notice',
    title: 'Darshan & Seva Timings Verification',
    badge: 'Temple Notice',
    dateLabel: 'Status: Pending Confirmation',
    message:
      'Daily darshan hours, pooja timings, and seva details on this portal are currently awaiting official verification from the temple administration.',
    isUrgent: true
  },
  {
    id: 'festival-updates-notice',
    title: 'Festival Calendar & Special Occasions',
    badge: 'Calendar',
    dateLabel: 'Status: Editable',
    message:
      'Confirmed dates for Vaikunta Ekadasi, Purattasi Saturdays, and annual temple utsavams will be posted here following official panchangam approval.'
  },
  {
    id: 'official-photography-notice',
    title: 'Official Temple Photography',
    badge: 'Gallery',
    dateLabel: 'Illustrative Preview',
    message:
      'Artwork currently shown across the website is clearly marked as illustrative devotional art until high-resolution photographs of this temple are approved by management.'
  }
];
