import { Container, Title, Menu, MenuList, MenuItem, MenuLink } from "./header.styles";

function Header() {
  const downloadEvents = () => {
    const savedEvents = localStorage.getItem("calendarEvents");

    const events = savedEvents ? JSON.parse(savedEvents) : [];

    const jsonString = JSON.stringify(events, null, 2);

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(new Blob([jsonString], { type: "application/json" }));
    downloadLink.download = "All Events - By Ahmad Alfarizki.json";

    downloadLink.click();

    URL.revokeObjectURL(downloadLink.href);
  };

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
          <MenuItem>
            <MenuLink onClick={downloadEvents}>Download Events</MenuLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
}

export default Header;
