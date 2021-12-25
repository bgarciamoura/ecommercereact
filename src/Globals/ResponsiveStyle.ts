import { css } from 'styled-components';

interface IMobileProps {
    mobile?: string;
    style: ResponsiveStyle;
}

type ResponsiveStyle = {
    [key: string]: string;
};

const mobile = ({ mobile, style }: IMobileProps) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${style};
        }
    `;
};

const tablets = ({ mobile, style }: IMobileProps) => {
    return css`
        @media only screen and (max-width: 767px) {
            ${style};
        }
    `;
};

const desktops = ({ mobile, style }: IMobileProps) => {
    return css`
        @media only screen and (max-width: 991px) {
            ${style};
        }
    `;
};

const largerDesktops = ({ mobile, style }: IMobileProps) => {
    return css`
        @media only screen and (max-width: 1199px) {
            ${style};
        }
    `;
};

export { mobile, tablets, desktops, largerDesktops };
