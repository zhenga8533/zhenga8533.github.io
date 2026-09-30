export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Full Stack Software Engineer',
    organization: 'Able',
    period: '2024 – Present',
    description:
      'Build and support secure, performant platforms with Node.js, React, and RESTful APIs, running on AWS services including Lambda, IoT Core, S3, and EC2.',
  },
];

export const education: ExperienceEntry[] = [
  {
    title: 'B.S. Computer Science and Engineering',
    organization: 'The Ohio State University',
    period: '2021 – 2025',
    description: 'Coursework in software design, systems, networking, artificial intelligence, and data mining.',
  },
];
