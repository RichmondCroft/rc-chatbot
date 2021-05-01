import React from "react";
import styled from "styled-components";
import { AvatarCompSize, AvatarImgSize } from "../../constants";

export interface ImgProps {
    imgsrc?: string;
    order?: number
};

const ImgComp = styled.div<ImgProps>`
height:${AvatarCompSize.max_height};
width:${AvatarCompSize.max_width};
border-radius:50%;
display:flex;
align-item:center;
order:${props=>props.order?props.order:1};
`;

const Img = styled.img<ImgProps>`
height:${AvatarImgSize.height};
width:${AvatarImgSize.width};
display:'block';
src:${props=>props.imgsrc};
margin:'auto';
`;


export const Avatar: React.FC<ImgProps> = (
    props: ImgProps
) => {
    const { imgsrc,order } = props;
    return (
        <ImgComp order={order} data-testid="AvatarComponent"><Img src={imgsrc} data-testid="AvatarImage"/></ImgComp>
    );
};

export default Avatar;