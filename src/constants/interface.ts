import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
export interface OptionType {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<SubNavItem>;
  icon?: ReactNode;
}

export interface ListItem {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}

// export interface ListItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<SubListItem>;
//   icon?: ReactNode;
// }

// export interface SubListItem {
//   label?: string;
//   children?: SubItem[];
// }

// export interface SubListItem {
//   label?: string;
//   children?: ReactNode;
// }

export interface SubNavItem {
  label?: string;
  children?: SubItem[];
}

export interface SubItem {
  icon?: ReactNode;
  label?: string;
  value?: string;
  href?: string;
}

export interface ButtonsType {
  value: string;
  label?: ReactNode;
}

export interface TagsType {
  name: string;
  label: string;
}

export interface ButtonsType {
  value: string;
  label?: ReactNode;
}

export interface FlexItemProps extends FlexProps {
  children?: ReactNode;
}

export interface GlossaryType {
  id: string;
  children: GlossaryChildrenType[];
}
export interface GlossaryChildrenType {
  title: string;
  description: string;
}
