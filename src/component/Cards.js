import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Cards = ({ props }) => {
    return (

        <Card
            sx={{ maxWidth: 300 }}
            raised={true}
        >
            <Box>

                <img src={props.image_url} alt={props.name} width='100' />
            </Box>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Cards