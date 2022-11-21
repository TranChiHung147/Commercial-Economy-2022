import React from 'react'
import '../css/detail.css';
import styled from 'styled-components';
import closeSearch from '../icon-font/close-icon.svg';

const CompareForm = styled.div`
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px #ccc;
    border-radius: 20px;
    padding-bottom: 10px;
    height: 100%;
    width: 50%;   
    
    padding: 16px 16px 0px 16px;
    gap: 16px;
`;

const InputForm = styled.div`
    padding: 0px;
    gap: 9.7px;
    max-width: 100%;
    display: inline;
    flex-direction: column;
    align-items: flex-end;
    input {
        box-sizing: border-box;
        align-items: flex-start;
        width: 100%;
        height: 50px;
        border: 1px solid rgba(36, 89, 173, 1);
        border-radius: 10px;
        &:focus {
            outline: 2px solid rgba(36, 89, 173, 1);
        }
    }
`
const LabelLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 4.85px;
    height: 24px;
    margin-bottom: 10px;
`;

const LabelSearch = styled.label`
    
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0px;
`;

function Compare({open, onClose}) {
    
    if(!open) return null
    return (
        <CompareForm>
            <InputForm shouldCloseOnOverlayClick={false}>
                <LabelLine>
                    <LabelSearch>Nhập tên sản phẩm</LabelSearch>
                    <img onClick={onClose} src={closeSearch} className="close-outline-btn" alt=""/>
                </LabelLine>
                <input type="text" id="name-product" name="name-product" placeholder="robot hút bụi"/>
            </InputForm>
        </CompareForm>
    )
}

export default Compare