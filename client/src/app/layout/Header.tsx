import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
  List,
  ListItem,
  Badge,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const NavStyles = {
  color: "inherit",
  typography: "h6",

  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component={NavLink} to="/" sx={NavStyles}>
          ReStore
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={NavStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <List sx={{ display: "flex" }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={NavStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent="4" color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
