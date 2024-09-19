import { Tour } from "./tour";

export const TOURS: Tour[] = [
  new Tour(
    1, // id
    true, // schengen_required
    new Date("2024-06-15"), // end_date
    new Date("2024-06-01"), // start_date
    "Fransa", // country
    "Paris Şehir Turu", // name
    new Date(), // updated_at (opsiyonel)
    "admin", // updated_by (opsiyonel)
    "Jean Dupont", // guide (opsiyonel)
    "Paris", // city (opsiyonel)
    new Date(), // created_at (opsiyonel)
    2000, // price (opsiyonel)
    "admin", // created_by (opsiyonel)
    "Turizm" // work_area (opsiyonel)
  ),
  new Tour(
    2, // id
    false, // schengen_required
    new Date("2024-08-20"), // end_date
    new Date("2024-08-10"), // start_date
    "Türkiye", // country
    "İstanbul Tarihi Turu", // name
    new Date(), // updated_at (opsiyonel)
    "admin", // updated_by (opsiyonel)
    "Ahmet Yılmaz", // guide (opsiyonel)
    "İstanbul", // city (opsiyonel)
    new Date(), // created_at (opsiyonel)
    1500, // price (opsiyonel)
    "admin", // created_by (opsiyonel)
    "Tarih" // work_area (opsiyonel)
  ),
  new Tour(
    3, // id
    true, // schengen_required
    new Date("2024-07-30"), // end_date
    new Date("2024-07-20"), // start_date
    "İtalya", // country
    "Roma Kültür Turu", // name
    new Date(), // updated_at (opsiyonel)
    "admin", // updated_by (opsiyonel)
    "Maria Rossi", // guide (opsiyonel)
    "Roma", // city (opsiyonel)
    new Date(), // created_at (opsiyonel)
    1800, // price (opsiyonel)
    "admin", // created_by (opsiyonel)
    "Kültür" // work_area (opsiyonel)
  ),
  new Tour(
    4, // id
    false, // schengen_required
    new Date("2024-05-10"), // end_date
    new Date("2024-05-01"), // start_date
    "Amerika Birleşik Devletleri", // country
    "New York Şehir Turu", // name
    new Date(), // updated_at (opsiyonel)
    "admin", // updated_by (opsiyonel)
    "Michael Johnson", // guide (opsiyonel)
    "New York", // city (opsiyonel)
    new Date(), // created_at (opsiyonel)
    2500, // price (opsiyonel)
    "admin", // created_by (opsiyonel)
    "Turizm" // work_area (opsiyonel)
  ),
  new Tour(
    5, // id
    false, // schengen_required
    new Date("2024-09-15"), // end_date
    new Date("2024-09-05"), // start_date
    "Japonya", // country
    "Tokyo Keşif Turu", // name
    new Date(), // updated_at (opsiyonel)
    "admin", // updated_by (opsiyonel)
    "Sakura Tanaka", // guide (opsiyonel)
    "Tokyo", // city (opsiyonel)
    new Date(), // created_at (opsiyonel)
    2200, // price (opsiyonel)
    "admin", // created_by (opsiyonel)
    "Macera" // work_area (opsiyonel)
  ),
];
