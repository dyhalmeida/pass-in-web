import { faker } from "@/lib/faker";

export interface IAttendee {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  checkedInAt: Date;
}

export const attendees: IAttendee[] = Array.from({ length: 200 }).map(() => ({
  id: faker.number.int({ min: 1000, max: 2000 }),
  name: faker.name.fullName(),
  email: faker.internet.email().toLocaleLowerCase(),
  createdAt: faker.date.recent({ days: 30 }),
  checkedInAt: faker.date.recent({ days: 7 }),
}));
