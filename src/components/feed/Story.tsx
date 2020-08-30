import React from "react";
import {Avatar} from "@material-ui/core";

interface Props {
    image?: any
    profileSrc?: any
    title?: string
}

export const Story = ({ image, profileSrc, title }: Props) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}
