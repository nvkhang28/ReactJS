import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../api/store/configureStore";
import SignedInMenu from "./SignedlnMenu";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navLinkStyles = {
  color: "inherit",
  textDecoration: "none",
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

export default function Header({ handleThemeChange, darkMode }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
<<<<<<< HEAD
    <AppBar position="static">
=======
<<<<<<< HEAD
    <AppBar position="static">
=======
    <AppBar position="static" sx={{ mb: 4 }}>
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={navLinkStyles}
          >
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

<<<<<<< HEAD
=======
=======
          <Typography variant="h6" component={NavLink} to="/" sx={NavStyles}>
            ReStore
          </Typography>
        </Box>

        <Switch checked={darkMode} onChange={handleThemeChange}></Switch>

>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navLinkStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
<<<<<<< HEAD
          {user && user.roles?.includes("User") && (
=======
<<<<<<< HEAD
          {user && user.roles?.includes("Admin") && (
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
            <ListItem component={NavLink} to={"/inventory"} sx={navLinkStyles}>
              INVENTORY
            </ListItem>
          )}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navLinkStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          )}
<<<<<<< HEAD
=======
=======
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={NavStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
        </Box>
      </Toolbar>
    </AppBar>
  );
}
