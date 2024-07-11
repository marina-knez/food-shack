import { ButtonHTMLAttributes, FC } from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton, BaseButtonScroll, InvertedButtonBack } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
    scroll = 'scroll',
    back = 'back',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.scroll]: BaseButtonScroll,
        [BUTTON_TYPE_CLASSES.back]: InvertedButtonBack,
    }
    [buttonType]
);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
};

export default Button;