export type RouterStackItem = {
  component: React.ComponentType<any>;
  props: any;
};

export type LinkProps = {
  id?: string;
  component: React.ComponentType<any>;
  children?: React.ReactNode;
  props?: any;
  href?: string;
  className?: string;
  tag?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export type RouterProps = {
  children: React.ReactNode;
};
