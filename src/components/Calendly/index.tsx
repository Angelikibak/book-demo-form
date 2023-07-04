import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = ({ formFilled }: { formFilled: boolean }) => {

  return (
    <div>
      {formFilled &&
        <InlineWidget
          url="https://calendly.com/agelikibakogianni"
          styles={{ height: '600px' }}
        />
      }
    </div>
  );
};

export default Calendly;

