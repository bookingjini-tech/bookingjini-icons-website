export interface Icon {
  id: string;
  name: string;
  svg: string;
  jsx: string;
  category: string;
}

export const icons: Icon[] = [
  {
    id: "1",
    name: "Home",
    svg: `<i class="icon-home"></i>`,
    jsx: '<i className="icon-home"></i>',
    category: "Essential",
  },
  {
    id: "2",
    name: "Search",
    svg: `<i class="icon-search"></i>`,
    jsx: '<i className="icon-search"></i>',
    category: "Essential",
  },
];