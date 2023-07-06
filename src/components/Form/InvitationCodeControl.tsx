import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, CheckboxLabel } from './index';

const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const RadioButton = styled.input`
  margin-right: 8px;
`


const InvitationCodeControl = () => {
  const [showInvitationCodeInput, setShowInvitationCodeInput] = useState(false);
  const [invitationCode, setInvitationCode] = useState('');

  const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowInvitationCodeInput(event.target.checked);
    setInvitationCode('');
  };

  const handleInvitationCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvitationCode(event.target.value);
  };

  return (
    <ControlContainer>
      <CheckboxLabel>
        <RadioButton
          type="checkbox"
          checked={showInvitationCodeInput}
          onChange={handleRadioButtonChange}
        />
        I have an invitation code
      </CheckboxLabel>
      {showInvitationCodeInput && (
        <Input
          value={invitationCode}
          onChange={handleInvitationCodeChange}
          placeholder="Enter invitation code"
        />
      )}
    </ControlContainer>
  );
};

export default InvitationCodeControl;
