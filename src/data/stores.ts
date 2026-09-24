import type { StoreLocation } from '../types';

export const STORES: StoreLocation[] = [
  {
    id: 'pelotas',
    name: 'Mat-Tek Pelotas',
    address: 'R. Gen. Argolo, 1322 - Centro',
    city: 'Pelotas',
    state: 'RS',
    cep: '96020-380',
    phone: '(53) 3228-5826',
    phoneRaw: '555332285826',
    whatsapp: '(53) 98448-9179',
    whatsappRaw: '5553984489179',
    googleMapsUrl: 'https://maps.google.com/?q=R.+Gen.+Argolo,+1322+-+Centro,+Pelotas+-+RS,+96020-380',
    schedule: [
      { days: 'Segunda-feira', hours: '08:30–12:00, 13:30–18:00' },
      { days: 'Terça-feira', hours: '08:30–12:00, 13:30–18:00' },
      { days: 'Quarta-feira', hours: '08:30–12:00, 13:30–18:00' },
      { days: 'Quinta-feira', hours: '08:30–12:00, 13:30–18:00' },
      { days: 'Sexta-feira', hours: '08:30–12:00, 13:30–18:00' },
      { days: 'Sábado', hours: 'Fechado' },
      { days: 'Domingo', hours: 'Fechado' },
    ],
    notes: 'Loja ampla no centro de Pelotas, showroom de máquinas e oficina técnica completa.',
  },
  {
    id: 'cangucu',
    name: 'Mat-Tek Canguçu',
    address: 'R. Gen. Câmara, 1556 - Centro',
    city: 'Canguçu',
    state: 'RS',
    cep: '96600-000',
    phone: '(53) 99905-9179',
    phoneRaw: '5553999059179',
    whatsapp: '(53) 98448-9179',
    whatsappRaw: '5553984489179',
    googleMapsUrl: 'https://maps.google.com/?q=R.+Gen.+C%C3%A2mara,+1556+-+Centro,+Cangu%C3%A7u+-+RS,+96600-000',
    schedule: [
      { days: 'Segunda a Sexta', hours: '08:30–12:00, 13:30–18:00' },
      { days: 'Sábado', hours: 'Fechado' },
      { days: 'Domingo', hours: 'Fechado' },
    ],
    notes: 'A matriz onde nossa história começou em 2017! Assistência técnica de motores e showroom completo.',
  },
];

export const COMPANY_INFO = {
  name: 'Mat-Tek',
  slogan: 'Máquinas • Motores • Ferramentas • Geradores',
  subSlogan: 'Venda • Manutenção • Assistência Técnica Autorizada',
  centralPhone: '(53) 3228-5826',
  centralPhoneRaw: '555332285826',
  centralWhatsapp: '+55 53 98448-9179',
  centralWhatsappRaw: '5553984489179',
  instagram: 'https://www.instagram.com/mattekpelotas/',
  instagramHandle: '@mattekpelotas',
  instagramCangucuHandle: '@mattekcangucu',
  foundationDate: '17 de Abril de 2017',
};

/**
 * Checks whether the store is open based on the current Brazilian time
 */
export function isStoreOpenNow(): { isOpen: boolean; message: string } {
  // RS timezone: America/Sao_Paulo (UTC-3)
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTotalMin = hours * 60 + minutes;

  // Saturday or Sunday = Closed
  if (day === 0 || day === 6) {
    return { isOpen: false, message: 'Fechado hoje (Fim de semana)' };
  }

  // Monday to Friday: 08:30 to 12:00 and 13:30 to 18:00
  const m1Start = 8 * 60 + 30;
  const m1End = 12 * 60;
  const m2Start = 13 * 60 + 30;
  const m2End = 18 * 60;

  if (currentTotalMin >= m1Start && currentTotalMin < m1End) {
    return { isOpen: true, message: 'Aberto agora (até 12:00)' };
  } else if (currentTotalMin >= m1End && currentTotalMin < m2Start) {
    return { isOpen: false, message: 'Intervalo de almoço (reabre às 13:30)' };
  } else if (currentTotalMin >= m2Start && currentTotalMin < m2End) {
    return { isOpen: true, message: 'Aberto agora (até 18:00)' };
  } else if (currentTotalMin < m1Start) {
    return { isOpen: false, message: 'Fechado no momento (abre hoje às 08:30)' };
  } else {
    return { isOpen: false, message: 'Fechado (reabre no próximo dia útil às 08:30)' };
  }
}
