import React from "react";
import styled from "styled-components";
import { AvatarCompSize, AvatarImgSize } from "../../constants";

export interface ImgProps {
    imgSrc?: string;
    align?: "left" | "right";
};

const ImgContainer = styled.div<ImgProps>`
max-height:${AvatarCompSize.max_height};
max-width:${AvatarCompSize.max_width};
border-radius:50%;
display:flex;
align-item:center;
order:${props=>props.align === "left"?1:2};
`;

const Img = styled.img`
height:${AvatarImgSize.height};
width:${AvatarImgSize.width};
margin:'auto';
`;


export const Avatar: React.FC<ImgProps> = (
    props: ImgProps
) => {
    const { imgSrc,align } = props;
    return (
        <ImgContainer align={align} data-testid="Avatar_image-wrapper"><Img src={imgSrc} data-testid="Avatar_image-icon"/></ImgContainer>
    );
};

export default Avatar;