import { makeStyles, Theme } from '@material-ui/core'
import React, { CSSProperties, HTMLAttributes } from 'react'

export interface GridItemProps {
    minWidth: string | number;
    width: string | number;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    gap?: CSSProperties["gap"];
    itemProps?: GridItemProps;
}

const gridTemplateColumns = ({minWidth, width}: GridItemProps) => {
    return `repeat(auto-fit, minmax(${minWidth}, ${width}))`
}

const useStyles = makeStyles<Theme, GridProps>(theme => ({
    root: ({gap, itemProps}) => ({
        display: "grid",
        gap: typeof gap === "number" ? theme.spacing(gap as number) : gap,
        gridTemplateColumns: itemProps ? gridTemplateColumns(itemProps) : undefined,
    })
}), { name: "Grid" });

const Grid = (props: GridProps) => {

    const { gap: _gap, className, itemProps, ...rest } = props;
    const classes = useStyles(props);

    return (
        <div {...rest} className={[classes.root, className].join(" ")} />
    )
}

export default Grid
