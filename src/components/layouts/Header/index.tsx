import { Container, Title, Menu, MenuList, MenuItem, MenuLink } from "./header.styles";

function Header() {
  return (
    <Container>
      <Title>My Personal Calendar</Title>
      <Menu>
        <MenuList>
          <MenuItem>
            <MenuLink href="https://madfariz.my.id" target="_blank">
              About Me
            </MenuLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
}

export default Header;
