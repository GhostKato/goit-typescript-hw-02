import { useState } from 'react';

type UseToggleReturn = [boolean, () => void];

const useToggle = (initialState: boolean = false): UseToggleReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, toggle];
};

export default useToggle;
