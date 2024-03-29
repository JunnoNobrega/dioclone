
import styled , {css} from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled> `


    background: #565656;
    border-radius: 22px;
    position: relative;


    color: #ffffff;
    padding: 8px 12px;
    min-width: 120px;
    width: 100%;
    
    cursor: pointer;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: :33px;

        background: #e4105d;

        &:hover{
            opacity:0.6;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -6px;
            right: -6px;
            bottom: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% +10px);
            border-radius: 22px;

        }
    `}
`