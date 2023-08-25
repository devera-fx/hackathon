export interface NavbarItemsType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: any;
}

export const NavbarArray: Array<NavbarItemsType> = [
  {
    label: "Female",
    href: "/category/female",
    isDropDown: false,
  },
  {
    label: "Male",
    href: "/category/male",
    isDropDown: false,
  },
  {
    label: "Kids",
    href: "/category/kids",
    isDropDown: false,
  },
  {
    label: "All Products",
    href: "/products",
    isDropDown: false,
  },
];
