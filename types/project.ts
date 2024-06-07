export interface Project {
  title: string;
  content: string;
  tags: string[];
  images: string[];
  skillType: SkillType
}

export enum SkillType {
  Web = 'Web',
  Mobile = 'Mobile',
  Desktop = 'Desktop',
  AI ='AI'
}
