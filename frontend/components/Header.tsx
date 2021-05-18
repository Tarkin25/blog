import React, { Fragment } from 'react'
import Head from "next/head";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const title = "Blog";

const Header = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="og:title" content={title} />
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h2">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header
