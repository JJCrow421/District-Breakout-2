
export enum Page {
  Home = 'Home',
  OurTeam = 'OurTeam',
  Careers = 'Careers',
  Appeals = 'Appeals',
  Guidelines = 'Guidelines'
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface JobPosition {
  title: string;
  type: string;
  location: string;
  description: string;
}
