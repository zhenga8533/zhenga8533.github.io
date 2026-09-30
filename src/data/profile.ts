import type { IconName } from '../components/icons';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export const profile = {
  name: 'Allen Zheng',
  role: 'Full Stack Software Engineer',
  tagline:
    'I build products end to end, from responsive front ends to the APIs, data, and automation behind them.',
  about: "Outside of work, I'm into anime, manga, and games, which is where most of my side projects begin.",
  email: 'zhenga8533@gmail.com',
  resumeUrl: undefined as string | undefined,
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/zhenga8533', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zhenga8533/', icon: 'linkedin' },
  { label: 'Discord', href: 'https://discord.com/users/166928679467745282', icon: 'discord' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];
