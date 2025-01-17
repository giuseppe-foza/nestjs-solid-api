export interface IProduct {
  id: string;
  description: string;
  details: string;
  value: number;
  quantity: number;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateProduct {
  description: string;
  details: string;
  value: number;
  quantity: number;
  active: boolean;
}
