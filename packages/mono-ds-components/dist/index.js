import React from 'react';

const Palette = {
    primary: "#0d47a1",
    secondary: "#311b92",
    text: "#263238",
    white: "#FFFFFF"
};
const Spacing = {
    small: 8,
    medium: 16,
    large: 24
};

const Button = (props) => {
    const { children } = props;
    const buttonStyle = {
        color: Palette.white,
        backgroundColor: Palette.primary,
        padding: Spacing.small
    };
    return React.createElement("button", { style: buttonStyle }, children);
};

export { Button };
