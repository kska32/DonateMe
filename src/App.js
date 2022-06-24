import React from "react";
import styled from "styled-components";
import {QRCodeSVG} from 'qrcode.react';
import {CryptoAddrsData} from "./crypto.address";
import {Cryptocon} from 'cryptocons';
import {CopiesButton} from './copy-button';


const Wrapper = styled.div`
    position: relative;
    padding: 50px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    >h1{
        color: white;
        margin-top: 0px;
        margin-bottom: 80px;
        font-size: 64px;
        text-shadow: 0px 0px 8px rgba(255,255,255,0.5);
    }
`;


const ListItemStyled = styled.div`
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 80px;
      background-color: #fff;
      background-image: repeating-linear-gradient(30deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06) 1px, transparent 1px, transparent 12px),
                        repeating-linear-gradient(-15deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06) 1px, transparent 1px, transparent 12px),
                        repeating-linear-gradient(-60deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06) 1px, transparent 1px, transparent 12px),
                        repeating-linear-gradient(-105deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .06) 1px, transparent 1px, transparent 12px);
      height: 216px;
      width: 900px;
      border-radius: 0px;
      box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.18), 20px 20px rgba(255,255,255,0.6);
      overflow: hidden;

      transition: all 0.12s ease;


      >div{
          position: relative;
          box-sizing: border-box;
          padding: 30px;
          overflow: hidden;

          &:nth-of-type(1){
              /* qrcode */
              background-color: transparent;
              border-right: 0px;

              >svg{
                  &:nth-of-type(1){
                      /* qrcode-svg */
                  }
                  &:nth-of-type(2){
                      /* crypto-logo */
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%) ;
                      background-color: transparent;
                  }
              }
          }

          &:nth-of-type(2){
              /* info-data */
              flex: 1;

              display: flex;
              flex-flow: column nowrap;
              justify-content: space-between;
              padding-left: 0px;
              
              >div{
                  padding: 3px 12px;
                  box-sizing: border-box;
                  border-radius: 3px;

                  &.name{
                    font-size: 24px;
                    font-weight: bold;
                    text-transform: uppercase;
                    width: 100%;
                    background-color: rgba(255,255,255,0.86);
                    border: thin solid #ddd;
                  }
                  &.exinfo{
                    font-size: 16px;
                    padding-left: 15px;
                    font-weight: 400;
                  }
                  &.address{
                      padding: 20px 12px;
                      font-weight: 500;
                      word-break: break-all;
                      color: rgba(0,0,0,0.8);
                      background-color: rgba(255,255,255,0.86);
                      border: thin solid #ddd;

                      display: inline-flex;
                      flex-flow: row nowrap;
                      align-items: center;
                      justify-content: space-between;
                      border-radius: 3px;

                      >span{
                        font-size: 18px;
                      }
                      >div{
                        margin-left: 10px;
                        margin-right: -3px;
                      }
                  }
              }
          }
      }
`;


const ListItem = ({name, tag, exInfo, address, ...props}) => {

    return <ListItemStyled>
        <div className='qrcode'>
          <QRCodeSVG value={address} size={156} level={"Q"} bgColor={'transparent'} />
          <Cryptocon width={36} height={36} icon={name+'Badge'} />
        </div>
        <div className='infos'>
            <div className='name'>{name} - {tag}</div>
            <div className='exinfo'>{exInfo}</div>
            <div className='address'><span>{address}</span><CopiesButton text={address} /></div>
        </div>
    </ListItemStyled>
}



function App() {
  return (
    <div className="App">
        <Wrapper>
            <h1>Cryptocurrency Donation</h1>
            { CryptoAddrsData.map((v,i)=><ListItem key={i} {...v} />) }
        </Wrapper>
    </div>
  );
}

export default App;
