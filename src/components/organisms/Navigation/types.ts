export type NavigationElement = {
  id: number;
  title: string;
  category?: string;
};

export type Props = {
  list?: NavigationElement[]
}