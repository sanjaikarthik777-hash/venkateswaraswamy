/**
 * Pooja, Seva, and devotee facility records.
 * Only list services, fees, and booking procedures explicitly confirmed by the temple administration.
 */
export interface SevaEntry {
  id: string;
  title: string;
  category: 'Pooja & Archana' | 'Offerings & Prasadam' | 'Devotee Facilities';
  statusLabel: string;
  confirmed: boolean;
  summary: string;
  feeInfo: string;
  bookingProcedure: string;
}

export const SEVA_CONFIG = {
  onlineBookingEnabled: false,
  verificationNotice:
    'No online booking or payment is active on this website. All pooja schedules, seva availability, prasadam offerings, and any applicable charges are to be confirmed directly with the temple office.',
  items: [
    {
      id: 'daily-pooja-archana',
      title: 'Daily Poojas & Archana Sevas',
      category: 'Pooja & Archana',
      statusLabel: 'Awaiting Confirmation',
      confirmed: false,
      summary:
        'Information on daily archanas, special abhishekams, and sankalpam services will be listed once officially approved by the temple administration.',
      feeInfo: 'Fee details to be confirmed with temple office',
      bookingProcedure: 'Enquire in person at the temple counter or verify via official temple contact.'
    },
    {
      id: 'offerings-prasadam',
      title: 'Offerings & Prasadam',
      category: 'Offerings & Prasadam',
      statusLabel: 'Awaiting Confirmation',
      confirmed: false,
      summary:
        'Approved guidelines for traditional offerings and temple prasadam distribution will be published after confirmation from temple management.',
      feeInfo: 'Details to be confirmed with temple office',
      bookingProcedure: 'Confirmed directly at the temple premises.'
    },
    {
      id: 'tonsuring-facility',
      title: 'Tonsuring (Mudi) Facility',
      category: 'Devotee Facilities',
      statusLabel: 'To Be Verified',
      confirmed: false,
      summary:
        'Availability, timings, and traditional arrangements for tonsuring offerings are awaiting verification from the temple administration.',
      feeInfo: 'To be confirmed if applicable',
      bookingProcedure: 'Please check availability with the temple office prior to your visit.'
    },
    {
      id: 'thulabaram-facility',
      title: 'Thulabaram Facility',
      category: 'Devotee Facilities',
      statusLabel: 'To Be Verified',
      confirmed: false,
      summary:
        'Availability of Thulabaram weighing scales, permitted offering items, and scheduling will be updated once confirmed by temple management.',
      feeInfo: 'To be confirmed if applicable',
      bookingProcedure: 'Please confirm arrangements at the temple office.'
    }
  ] satisfies SevaEntry[]
};
