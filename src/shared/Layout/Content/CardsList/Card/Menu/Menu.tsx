import React, { useEffect, useRef, useState } from 'react';
import { MenuIcon } from '../../../../../../../icons';
import { Dropdown } from '../../../../../helpers/Dropdown';
import styles from './menu.css';


export function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [coors, setCoors] = useState({left: 0, top: 0, width: 0});
  const setPosition = () => {
    if(btnRef.current) {
      const coordinates = btnRef.current.getBoundingClientRect();

      setCoors({
        left: coordinates.left,
        top: coordinates.top + coordinates.width,
        width: coordinates.width,
      });     
    }
  };

  useEffect(() => {
    if(isDropdownOpen) {
      setPosition();
    
      document.addEventListener('scroll', setPosition);

      return () => {
        document.removeEventListener('scroll', setPosition)
      } 
    }
  }, [])

  React.useEffect(() => {
    if(isDropdownOpen) {
      setPosition();
    }
  }, [isDropdownOpen])

  
  return (
    <div className={styles.menu}>
      <button ref={btnRef} className={styles.menuButton} onClick={() => {setIsDropdownOpen(true)}}>
        < MenuIcon />
      </button>

      {isDropdownOpen && (
        <Dropdown coorsTop={coors.top} coorsLeft={coors.left} onClose={() => {setIsDropdownOpen(false)}}/>
      )}
    </div>
  );
}
