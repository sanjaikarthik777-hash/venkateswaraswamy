/**
 * Festivals and Events configuration.
 * Keep event dates editable here. Only publish specific dates and times after official temple confirmation.
 */
export interface FestivalEvent {
  id: string;
  name: string;
  dateText: string;
  timeText: string;
  confirmed: boolean;
  description: string;
  imageKey: 'festival-lamps' | 'alankaram-flowers' | 'gopuram-exterior';
  announcementNote: string;
}

export const FESTIVALS_CONFIG = {
  notice:
    'Festival dates and special darshan schedules are published only after official confirmation by the temple administration.',
  events: [
    {
      id: 'vaikunta-ekadasi',
      name: 'Vaikunta Ekadasi',
      dateText: 'Date to be confirmed upon annual panchangam notice',
      timeText: 'Special darshan timings to be announced',
      confirmed: false,
      description:
        'An auspicious Vaishnava observance dedicated to Lord Venkateswara Swamy. Confirmed darshan and Vaikunta Dwara details will be updated once announced by the temple.',
      imageKey: 'festival-lamps',
      announcementNote: 'Awaiting official schedule'
    },
    {
      id: 'purattasi-saturdays',
      name: 'Purattasi Saturdays (Purattasi Sani)',
      dateText: 'Seasonal Saturdays — dates to be confirmed',
      timeText: 'Special alankaram and darshan hours to be announced',
      confirmed: false,
      description:
        'Traditionally observed with special floral alankaram and devotional prayers to Lord Venkateswara Swamy during the Tamil month of Purattasi, where observed by the temple.',
      imageKey: 'alankaram-flowers',
      announcementNote: 'Subject to temple confirmation'
    },
    {
      id: 'annual-utsavam',
      name: 'Annual Temple Utsavam & Special Poojas',
      dateText: 'Annual dates to be confirmed',
      timeText: 'Schedule to be published upon approval',
      confirmed: false,
      description:
        'Information regarding annual temple celebrations, special homams, and community devotional gatherings will appear here once finalized by the temple management.',
      imageKey: 'gopuram-exterior',
      announcementNote: 'Editable placeholder'
    }
  ] satisfies FestivalEvent[]
};
