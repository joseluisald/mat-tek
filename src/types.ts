export type SectionId = 'inicio' | 'parceiros' | 'historia' | 'unidades' | 'contato';

export interface Brand {
  id: string;
  name: string;
  country: string;
  specialty: string;
  description: string;
  popularItems: string[];
  authorizedService: boolean;
  logoUrl?: string;
  brandColor?: string;
}

export interface StoreLocation {
  id: 'pelotas' | 'cangucu';
  name: string;
  address: string;
  city: string;
  state: string;
  cep: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  googleMapsUrl: string;
  schedule: {
    days: string;
    hours: string;
  }[];
  manager?: string;
  notes?: string;
}
