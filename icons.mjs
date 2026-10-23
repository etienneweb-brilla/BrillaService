// Shared line icons keep service and contact actions recognizable at every size.
const shapes = {
  spray: '<path d="M9 9h6l2 4v8H7v-8l2-4Z"/><path d="M10 9V5h5V3H9v2M15 5h3l2 2M10 16h4M21 3h1M21 10h1"/>',
  broom: '<path d="m17 2-6 10M8 11l7 4-3 7H2l6-11Z"/><path d="m8 16-3 6m6-5-2 5M6 14l8 4"/>',
  office: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h2m4 0h2M8 10h2m4 0h2M8 14h2m4 0h2M10 22v-4h4v4"/>',
  building: '<path d="M3 22V7l9-5 9 5v15M1 22h22M9 22v-6h6v6M7 8h2m6 0h2M7 12h2m6 0h2"/>',
  bed: '<path d="M3 18v3m18-3v3M2 18h20v-6H2v6Zm2-6V5h16v7"/><path d="M7 12V8h4v4m2 0V8h4v4"/>',
  hotel: '<rect x="3" y="3" width="18" height="19" rx="2"/><path d="M8 3V1m8 2V1M7 7h2m6 0h2M7 11h2m6 0h2M9 22v-7h6v7"/>',
  sofa: '<path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M5 19v2m14-2v2"/><path d="M5 14v-3a2 2 0 0 0-4 0v6a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-6a2 2 0 0 0-4 0v3H5Z"/>',
  laundry: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 7h16M7 4.5h1m3 0h1"/><circle cx="12" cy="14" r="4.5"/><path d="M8 14c2-3 5 3 8 0"/>',
  window: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18M3 12h18M6 8l2-2m8 12 2-2"/>',
  clipboard: '<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6M9 19h3"/>',
  chat: '<path d="M21 11a9 9 0 0 1-9 9 10 10 0 0 1-4-1l-5 2 1-5a9 9 0 1 1 17-5Z"/><path d="M8 10h8M8 14h5"/>',
  phone: '<path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-1 3-8-1-12-5S0 4 3 3l4-1Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
  calendar: '<rect x="3" y="5" width="18" height="17" rx="2"/><path d="M7 2v6m10-6v6M3 11h18m-13 5 3 3 5-5"/>',
  sparkle: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4"/>',
  people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 4a3 3 0 0 1 0 6m2 11v-3a6 6 0 0 0-2-4"/>',
  pin: '<path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  facebook: '<path d="M15 22v-9h3l1-4h-4V7c0-1 .5-2 2-2h2V1h-3c-4 0-6 2-6 6v2H7v4h3v9"/>'
};
export const serviceIcons = {'office-cleaning':'office','common-area-cleaning':'broom','short-let-cleaning':'bed','hospitality-cleaning':'hotel','deep-cleaning':'spray','upholstery-cleaning':'sofa','laundry-services':'laundry','window-cleaning':'window'};
export const industryIcons = {'condominium-managers':'building','property-managers':'bed','hotels-hospitality':'hotel','offices-commercial':'office'};
export function icon(name,cls=''){return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[name]||shapes.sparkle}</svg>`;}
export function linkIcon(href=''){
 if(href.startsWith('tel:'))return 'phone';
 if(href.startsWith('mailto:'))return 'mail';
 if(href.includes('wa.me'))return 'chat';
 if(href.includes('facebook.com'))return 'facebook';
 if(href.startsWith('/quote'))return 'clipboard';
 if(href.startsWith('/about'))return 'people';
 if(href.startsWith('/services/'))return serviceIcons[href.split('/')[2]]||'spray';
 return 'building';
}
