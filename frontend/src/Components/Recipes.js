import salad from '../imgs/salad.jpg'
import chopsuey from '../imgs/chopsuey.jpg'
import burger from '../imgs/burger.jpg'
import pizza from '../imgs/pizza.jpg'
import sushi from '../imgs/sushi.jpg'
import brownies from '../imgs/brownies.jpg'
import mocktail from '../imgs/mocktail.jpg'
import butterChicken from '../imgs/butterchicken.jpg'
import rice from '../imgs/rice.jpg'
import soup from '../imgs/soup.jpg'
import curry from '../imgs/curry.jpg'
import cookies from '../imgs/cookies.jpg'
import './cards.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Recipes = () => {
    const arrayChunk = (arr, n) => {
        console.log("array: ", arr)
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        return chunks;
    };
    const recipes = [
        { name: "Chopsuey", image: chopsuey, code: "chinese  chop suey" },
        { name: "Grilled Burger", image: burger, code: "awesome stuffed grilled burgers   easy" },
        { name: "Brownies", image: brownies, code: "fabulous  brownies" },
        { name: "Salmon Sushi", image: sushi, code: "salmon sushi" },
        { name: "Mocktail", image: mocktail, code: "cranberry cream mocktail" },
        { name: "Pizza", image: pizza, code: "amazing thin crust pizza" },
        { name: "Chicken Salad", image: salad },
        { name: "Butter Chicken", image: butterChicken, code: "authentic butter chicken" },
        { name: "Chocolate Chip Cookies", image: cookies, code: "best ever chocolate chip cookies" },
        { name: "Thai Curry", image: curry, code: "awesome thai chicken coconut curry" },
        { name: "Chinese Fried Rice", image: rice, code: "anytime easy egg fried rice" },
        { name: "Vegetable Soup", image: soup, code: "a to z vegetable soup" }];
    return (
        <div>
            <div style={{ margin: "50px auto", flexDirection: "column", overflow: "hidden" }} >
                <Typography variant="h3" component="h5" style={{ textAlign: "center" }}>
                    Which dish do you like?
                </Typography>
                <Typography variant="h6" component="h6" style={{ textAlign: "center", color: "black", margin: "3px 310px" }}>
                    Choose a recipe and we will give 10 recipe recommendations based on your choice.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {arrayChunk(...Array(recipes), 12).map((row, i) => (
                        <div key={i} className="row mx-auto" style={{ justifyContent: "center" }}>
                            {
                                row.map((col, i) => (
                                    <Card key={i} sx={{ width: "25%", maxHeight: 225 }} style={{ float: "left", margin: "20px 4%", fontSize: "12px" }} >
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={recipes[i].image}
                                            alt={recipes[i].name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" style={{ textAlign: "center", fontSize: "14px" }}>
                                                {recipes[i].name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Recipes;