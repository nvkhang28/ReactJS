import {Button,CardActions,Card,CardContent,CardMedia,Typography, CardHeader, Avatar} from "@mui/material";
import { Product } from "../../app/models/product";

interface props{
    product:Product;
}
export default function productCard({product}:props){
    return(
        <Card>
            <CardHeader>
                avatar={
                    <Avatar sx={{bgcolor:'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx:{fontWeight:'bold' ,color:'primary.main'}
                }}
            </CardHeader>

        <CardMedia
          sx={{ height: 140 , backgroundSize:"contain",bgcolor:'primary.light'}}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color="secondary" variant="h5">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    )
}