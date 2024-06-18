import { SkillType } from "~/types/skillType"

interface Extension {
  extension: string;
  iconLink: string;
}

const extensions = new Map<SkillType, Extension>()
extensions.set(SkillType.Web, { extension: '.vue', iconLink: 'vue.png'})
extensions.set(SkillType.Mobile, { extension: '.xaml', iconLink: 'xamarin.png'})
extensions.set(SkillType.Desktop, { extension: '.cpp', iconLink: 'cpp.png'})
extensions.set(SkillType.AI , { extension: '.py', iconLink: 'python.png'})
extensions.set(SkillType.VisualStudioExtension , { extension: '.ext', iconLink: 'windows.png'})
extensions.set(SkillType.VisualStudio , { extension: '.sln', iconLink: 'visualstudio.png'})

export const SkillMapping = extensions
