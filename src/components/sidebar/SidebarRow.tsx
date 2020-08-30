import React from "react";
import {Avatar} from "@material-ui/core";

export interface Props {
    src?: any
    Icon?: any
    title: string
}

export const SidebarRow = ({ src, Icon, title }: Props) => {
    return (
        <div className="sidebarRow">
            { src && <Avatar src={src}/> }
            { Icon && <Icon /> }
            <h4> { title } </h4>
        </div>
    )
}
