import React from "react";

export interface AddressProps {}

const Address: React.FC<AddressProps> = (props) => {
  //
  return (
    <address>
      <a href="mailto:jim@example.com">jim@example.com</a>
      <br />
      <a href="tel:+14155550132">+1 (415) 555‑0132</a>
    </address>
  );
};

export default Address;
