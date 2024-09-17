<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/api/store/configureStore";
import { setPageNumber, setProductParams } from "./catalogSlice";
import { Grid, Paper } from "@mui/material";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/api/components/RadioButton";
import CheckboxButtons from "../../app/api/components/CheckBoxButtons";
import AppPagination from "../../app/api/components/AppPagination";
import useProducts from "../../app/hooks/useProduct";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "price", label: "Price - Low to high" },
];
<<<<<<< HEAD
=======
=======
import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import agent from "../../app/api/agent";
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330

export default function Catalog() {
  const { products, filtersLoaded, brands, types, metaData } = useProducts();
  const { productParams } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
  if (!filtersLoaded) return <LoadingComponent message="Loading products..." />;

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <RadioButtonGroup
            selectedValue={productParams.orderBy}
            options={sortOptions}
            onChange={(e) =>
              dispatch(setProductParams({ orderBy: e.target.value }))
            }
          />
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <CheckboxButtons
            items={brands}
            checked={productParams.brands}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ brands: items }))
            }
          />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <CheckboxButtons
            items={types}
            checked={productParams.types}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ types: items }))
            }
          />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={9} sx={{ mb: 2 }}>
        {metaData && (
          <AppPagination
            metaData={metaData}
            onPageChange={(page: number) =>
              dispatch(setPageNumber({ pageNumber: page }))
            }
          />
        )}
      </Grid>
    </Grid>
<<<<<<< HEAD
=======
=======
  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
  );
}
