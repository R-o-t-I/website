type ProjectTypes = "Веб-игра" | "Сайт" | "Бот";
type ProjectCategory = "games" | "sites" | "bots";

interface Screenshots {
  android?: string[];
  ios?: string[];
  desktop?: string[];
}

interface IProject {
  id: number;
  link: string;
  type: ProjectTypes;
  cover: string;
  logo: string;
  title: string;
  description: string;
  category: ProjectCategory;
  screenshots: Screenshots;
}

export default IProject;
