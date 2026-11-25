/**
 * Central temple identity and contact configuration.
 * Update verified contact details here once approved by the temple administration.
 */
export interface TempleInfo {
  name: string;
  alternateName: string;
  devotionalGreeting: string;
  shortTagline: string;
  address: {
    plusCode: string;
    locality: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  googleMapsUrl: string;
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    phoneVerified: boolean;
    phoneVerificationNote: string;
    whatsappApproved: boolean;
    whatsappNumber: string | null;
    email: string | null;
  };
  socialLinks: Array<{ label: string; url: string }>;
}

export const TEMPLE_INFO: TempleInfo = {
  name: 'Sri Venkateswara Swamy Temple',
  alternateName: 'Kovai Tirupati',
  devotionalGreeting: 'Om Namo Narayanaya',
  shortTagline: 'A serene South Indian Vaishnava shrine in Peelamedu, Coimbatore.',
  address: {
    plusCode: '22QF+996',
    locality: 'Peelamedu',
    area: 'B.R. Puram Industrial Estate',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    postalCode: '641004',
    country: 'India',
    full: '22QF+996, Peelamedu, B.R. Puram Industrial Estate, Coimbatore, Tamil Nadu 641004, India'
  },
  googleMapsUrl: 'https://maps.google.com/maps?ftid=0x3ba857778f285347:0xb044aa35ac6c1d9f',
  contact: {
    phoneDisplay: '+91 96777 47282',
    phoneHref: 'tel:+919677747282',
    phoneVerified: false,
    phoneVerificationNote: 'Contact number pending final verification with temple administration before publishing.',
    whatsappApproved: false,
    whatsappNumber: null,
    email: null
  },
  socialLinks: []
};
