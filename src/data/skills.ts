import type { IconName } from '../components/icons';

export type Skill = { name: string } & ({ icon: string } | { glyph: IconName });

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'Python', icon: devicon('python') },
      { name: 'Java', icon: devicon('java') },
      { name: 'SQL', glyph: 'database' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: devicon('react') },
      { name: 'HTML', icon: devicon('html5') },
      { name: 'CSS', icon: devicon('css3') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss') },
    ],
  },
  {
    label: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', icon: devicon('nodejs') },
      // The standard AWS icon has dark lettering that disappears on dark backgrounds
      { name: 'AWS', icon: devicon('amazonwebservices', 'plain-wordmark') },
      { name: 'Cloudflare', icon: devicon('cloudflare') },
      { name: 'Linux', glyph: 'terminal' },
    ],
  },
];
