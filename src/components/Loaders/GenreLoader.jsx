import {Skeleton} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Grid ,Item} from '@mui/material';
import { useEffect , useState } from 'react';

const GenreLoader = () =>{
    
    const loader = () =>{
        const limit =9;
        const cardsArr = [];
        for(var i=0;i<limit;i++){
            cardsArr.push(<div>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton variant="text" />
            </div>)
        }
        console.log(cardsArr.length)
        return cardsArr
    }


    return(
        <>
        <Grid container 
            spacing={2}
             columns={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            
        
        {loader().map((item,index)=>{
            return(
                <Grid item key={index}>
                   

                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Skeleton variant="rectangular" width={210} height={118} />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Skeleton variant="text" />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <Skeleton variant="text" />
                                        <Skeleton variant="text" />
                                    </Typography>
                                    </CardContent>
                        </CardActionArea>
                    </Card>
                    
                </Grid>    
            )
        })}
        </Grid>
        </>
    )
}
export default GenreLoader;