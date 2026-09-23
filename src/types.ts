export type PageId = 'home' | 'products' | 'services' | 'about' | 'stores' | 'quote';

export type ProductCategory = 
  | 'all'
  | 'chainsaws_garden'
  | 'engines'
  | 'generators'
  | 'pressure_washers'
  | 'tools'
  | 'parts';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  brand: string;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  image: string;
  priceRef?: string;
  inStock: boolean;
  featured?: boolean;
  storesAvailable: ('pelotas' | 'cangucu')[];
  warrantyMonths: number;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  specialty: string;
  description: string;
  popularItems: string[];
  authorizedService: boolean;
  logoUrl?: string; // Local dedicado para adicionar a URL ou arquivo do logo
  brandColor?: string; // Cor institucional para realce do logotipo
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

export interface QuoteItem {
  product: Product;
  quantity: number;
}

export interface CustomServiceQuote {
  equipmentType: string;
  brand: string;
  problemDesc: string;
  urgency: 'normal' | 'alta';
}

export interface QuoteState {
  items: QuoteItem[];
  customServices: CustomServiceQuote[];
  preferredStore: 'pelotas' | 'cangucu';
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerCity: string;
  notes: string;
}
