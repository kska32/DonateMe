import React, {useState, useCallback} from "react";
import styled from "styled-components";
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import IconButton from '@mui/material/IconButton';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';


const $CopiesButton = styled.div`
    position: relative;
    width: 45px;
    height: 45px;
    min-width: 45px;
    min-height: 45px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    ${p=>p.nobg && `
        background:none !important;
        *{
            background:none !important;
            &:hover{
                background:none !important;
            }
        }
    `}

    ${
        p=>p.minisize && `
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
            margin-right: 5px;

            >button.MuiIconButton-root.spbutton{
                svg{
                    font-size: 18px;
                }
            }
        `
    }

    >button.MuiIconButton-root.spbutton{
        position:relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
     
        svg{
            color: ${p=>p.color || 'black'};
            
            transition: all 0.18s;
            /* font-size: 10px; */

            &:nth-of-type(1){
                opacity: 1;
                transform: scale(1) rotateZ(90deg);
            }
            &:nth-of-type(2){
                position: absolute;
                opacity: 0;
                transform: scale(1);
            }

            ${p=>p.copied && `
                &:nth-of-type(1){
                    opacity: 0;
                    transform: scale(1) rotateZ(90deg);
                }
                &:nth-of-type(2){
                    position: absolute;
                    opacity: 1;
                    transform: scale(1);
                }
            `}
        }
    }
`;

export const CopiesButton = React.memo(({text='hello,world', color, nobg, minisize, ...props})=>{
    //copy to clipboard 
    const [copied, setCopied] = useState(false);
    const [tid, setTid] = useState(0);

    const copyToClipboard = useCallback(()=>{
        navigator.clipboard.writeText(text).then(()=>{
            setCopied(true);
            const c = () => setCopied(false);
            clearTimeout(tid);
            setTid(setTimeout(c, 2000));
        });
    }, [text,tid])


    return <$CopiesButton copied={copied} onClick={copyToClipboard} 
                style={props.style} color={color} nobg={nobg} minisize={minisize}
            >
            <IconButton className='spbutton'>
                <FilterNoneIcon />
                <DoneOutlineOutlinedIcon />
            </IconButton>
    </$CopiesButton>
});
