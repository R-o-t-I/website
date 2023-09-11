type ProjectTypes = "Игра" | "Сайт" | "Бот";
type ProjectCategory = "games" | "sites" | "bots";

interface IProject {
  id: number;
  link: string;
  type: ProjectTypes;
  cover: string;
  logo: string;
  title: string;
  description: string;
  category: ProjectCategory;
}

export default IProject;
