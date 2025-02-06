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
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    jsx: '<Home className="w-6 h-6" />',
    category: "Essential",
  },
  {
    id: "2",
    name: "Search",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    jsx: '<Search className="w-6 h-6" />',
    category: "Essential",
  },
];