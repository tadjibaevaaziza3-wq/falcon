
export type Language = 'ru' | 'uz';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // HTML content for modal
  iconName: 'Network' | 'FileCheck' | 'HardHat' | 'TowerControl' | 'Building';
  imageUrl: string; // Thumbnail for card
  detailImageUrl?: string; // Larger image for modal
}

export interface Project {
  id: string;
  category: 'EXPERTISE' | 'DESIGN';
  name: string; // Наименование работ
  client: string; // Заказчик (наименование, адрес, телефон)
  contract: string; // № и дата договора
  period: string; // Период исполнения
  note?: string; // Примечание
}

export interface LicensePageData {
  pageNumber: number;
  type: 'FRONT' | 'BACK' | 'SINGLE';
  content?: {
    title?: string;
    number?: string;
    registryNumber?: string;
    stir?: string;
    date?: string;
    issuer?: string;
    address?: string;
    activities?: string[];
    complexity?: string;
    qrCode?: string;
    validity?: string;
  };
}

export interface License {
  id: string;
  name: string;
  docType: 'GUVOHNOMA' | 'LICENSE' | 'ACCREDITATION';
  pages: LicensePageData[];
}

export interface Partner {
  name: string;
  logoUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
