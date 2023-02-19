import React from "react";

import { ButtonBack, ButtonFront } from "./index";

interface props {
    alt?: string;
    form?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Button = (props: props) => (
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
        <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </ButtonFront>
    </ButtonBack>
)

export default Button;