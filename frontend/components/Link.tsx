import React from 'react'
import { LinkProps as MuiLinkProps, Link as MuiLink } from "@material-ui/core";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps & MuiLinkProps;

const Link = (props: LinkProps) => {

    const { href, children } = props;

    return (
        <NextLink href={href}>
            <MuiLink >
                {children}
            </MuiLink>
        </NextLink>
    )
}

export default Link
