import React from "react";
import styled from "styled-components";
import { AvatarCompSize, AvatarImgSize } from "../../constants";

export interface ImgProps {
    imgsrc?: string;
    order: number
};

const ImgComp = styled.div<ImgProps>`
height:${AvatarCompSize.max_height}px;
width:${AvatarCompSize.max_width}px;
border-radius:50%;
display:flex;
align-item:center;
order:${props=>props.order};
`;


export const Avatar: React.FC<ImgProps> = (
    props: ImgProps
) => {
    const { imgsrc,order } = props;
    return (
        <ImgComp order={order} data-testid="AvatarComponent"><img style={{ height: AvatarImgSize.height, width: AvatarImgSize.width, display: "block", margin: "auto" }} src={imgsrc} alt="bot" data-testid="AvatarImage"/></ImgComp>
    );
};

export default Avatar;