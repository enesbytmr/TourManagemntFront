export class Tour {
  id: number;
  price?: number; // Opsiyonel
  schengen_required: boolean;
  created_at?: Date;
  end_date: Date;
  start_date: Date;
  updated_at?: Date;
  city?: string;
  country: string;
  created_by?: string; // Opsiyonel
  guide?: string;
  name: string;
  updated_by?: string;
  work_area?: string; // Opsiyonel

  constructor(
    id: number,
    schengen_required: boolean,
    end_date: Date,
    start_date: Date,
    country: string,
    name: string,
    updated_at?: Date,
    updated_by?: string,
    guide?: string,
    city?: string,
    created_at?: Date,
    price?: number, // Opsiyonel
    created_by?: string, // Opsiyonel
    work_area?: string // Opsiyonel
  ) {
    this.id = id;
    this.price = price;
    this.schengen_required = schengen_required;
    this.created_at = created_at;
    this.end_date = end_date;
    this.start_date = start_date;
    this.updated_at = updated_at;
    this.city = city;
    this.country = country;
    this.created_by = created_by;
    this.guide = guide;
    this.name = name;
    this.updated_by = updated_by;
    this.work_area = work_area;
  }
}
