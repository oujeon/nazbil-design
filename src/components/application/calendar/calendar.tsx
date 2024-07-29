import React from "react";

export interface InputProps {}

const Calendar: React.FC<InputProps> = () => {
  return (
    <>
      <label htmlFor="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </>
  );
};

export default Calendar;
