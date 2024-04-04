import { Card, CardMedia, CardActions, CardContent, Typography, Button, ListItem, ListItemAvatar, Avatar, ListItemText, CardHeader } from "@mui/material";
import { Product } from "../../product";

interface Props {
    product: Product;
}

export const ProductCard = ({product}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader 
            avatar={
                <Avatar sx={{bgcolor: 'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
                sx: {fontWeight: 'bold', color: 'primary.main'}
            }}
        />
        <CardMedia
            sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.main' }}
            image={product.pictureUrl}
            title={product.name}
        />
        <CardContent>
            <Typography gutterBottom color='secondary' variant="h5">
                ${(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.brand} / {product.type}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
  )
}
