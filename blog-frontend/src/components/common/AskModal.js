import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const Fullscreen = styled.div``;

const AskModalBlock = styled.div``;

const StyledButton = styled(Button)``

const AskModal = ({
  visible,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton cyan onClick={onConfirm}>{confirmText}</StyledButton>
        </div>
      </AskModalBlock>
    </Fullscreen>)
}


export default AskModal