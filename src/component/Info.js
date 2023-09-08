import { Stack } from '@mui/material'
import React from 'react'
import Cards from './Cards'

const Info = ({ props }) => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 3 }}
            mt={2}
            flexWrap="wrap"
            justifyContent="space-evenly"
        >
            {props.map((beer) => (<Cards props={beer} />
            ))}
        </Stack>
    )
}

export default Info