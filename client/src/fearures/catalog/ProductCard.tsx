import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
import { LoadingButton } from "@mui/lab";
import { currencyFormat } from "../../app/util/util";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/api/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";
<<<<<<< HEAD
=======
=======
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
<<<<<<< HEAD
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

=======
<<<<<<< HEAD
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

=======
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          bgcolor: "primary.light",
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
<<<<<<< HEAD
          {currencyFormat(product.price)}
=======
<<<<<<< HEAD
          {currencyFormat(product.price)}
=======
          ${(product.price / 100).toFixed(2)}
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
        <LoadingButton
          loading={status === "pendingAddItem" + product.id}
          onClick={() =>
            dispatch(addBasketItemAsync({ productId: product.id }))
          }
          size="small"
        >
          Add to Cart
        </LoadingButton>
<<<<<<< HEAD
=======
=======
        <Button size="small">Add to Cart</Button>
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
