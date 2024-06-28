// components/CustomSelect.tsx
import React, { useEffect, useState } from 'react';
import styles from './CustomSelect.module.css';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange }) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await fetch('/token-list.json');
      const data: Option[] = await response.json();
      setOptions(data);
    };

    fetchOptions();
  }, []);

  return (
    <div className={styles.customSelect}>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
