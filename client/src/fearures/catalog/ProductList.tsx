import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
import { useAppSelector } from "../../app/api/store/configureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          {!productsLoaded ? (
            <ProductCardSkeleton></ProductCardSkeleton>
          ) : (
            <ProductCard product={product} />
          )}
        </Grid>
      ))}
    </Grid>
  );
}
<<<<<<< HEAD
=======
=======

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
