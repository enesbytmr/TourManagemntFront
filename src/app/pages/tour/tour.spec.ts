import { Tour } from "./tour";

describe("Tour Class Tests", () => {
  let tour: Tour;

  beforeEach(() => {
    tour = new Tour(
      1, // id
      true, // schengen_required
      new Date("2024-12-31"), // end_date
      new Date("2024-01-01"), // start_date
      "Türkiye", // country
      "İstanbul Turu", // name
      new Date(), // updated_at (opsiyonel)
      "güncelleyici", // updated_by (opsiyonel)
      "Rehber Adı", // guide (opsiyonel)
      "İstanbul", // city (opsiyonel)
      new Date(), // created_at (opsiyonel)
      1500, // price (opsiyonel)
      "oluşturan", // created_by (opsiyonel)
      "Turizm" // work_area (opsiyonel)
    );
  });

  it("should create an instance of Tour", () => {
    expect(tour).toBeTruthy();
  });

  it("should have the correct id", () => {
    expect(tour.id).toBe(1);
  });

  it("should correctly assign mandatory properties", () => {
    expect(tour.schengen_required).toBeTrue();
    expect(tour.end_date).toEqual(new Date("2024-12-31"));
    expect(tour.start_date).toEqual(new Date("2024-01-01"));
    expect(tour.country).toBe("Türkiye");
    expect(tour.name).toBe("İstanbul Turu");
  });

  it("should correctly assign optional properties", () => {
    expect(tour.updated_at).toBeInstanceOf(Date);
    expect(tour.updated_by).toBe("güncelleyici");
    expect(tour.guide).toBe("Rehber Adı");
    expect(tour.city).toBe("İstanbul");
    expect(tour.created_at).toBeInstanceOf(Date);
    expect(tour.price).toBe(1500);
    expect(tour.created_by).toBe("oluşturan");
    expect(tour.work_area).toBe("Turizm");
  });

  it("should have start_date earlier than end_date", () => {
    expect(tour.start_date.getTime()).toBeLessThan(tour.end_date.getTime());
  });
});
