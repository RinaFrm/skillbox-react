import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MenuList } from '../../Layout/Content/CardsList/Card/Menu/MenuList';
import styles from './dropdown.css';

interface  IDropdown {
  onClose?: () => void;
  children?: React.ReactNode;
  button?: React.ReactNode;
  coorsTop?: number;
  coorsLeft?: number;
  width?: number;
}

export function Dropdown({onClose, coorsTop, coorsLeft}: IDropdown) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#comment_root');

  if(!node) return null;

  return ReactDOM.createPortal((
    <div style={{top: coorsTop, left: coorsLeft}} className={styles.container} ref={ref}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          < MenuList postId="123" />
          <button className={styles.listButton} >
            Закрыть
          </button>
        </ul>
      </div>
    </div>
  ), node);
}

// interface IDropdownProps {
//   button: React.ReactNode;
//   children: React.ReactNode;
//   isOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// const NOOP = () => {};

// export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
//   //React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
//   React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

//   const handleOpen = () => {
//     if (isOpen == undefined) {
//       setIsDropdownOpen(!isDropdownOpen)
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//         { button }
//       </div>
//       {isDropdownOpen && (
//         <div className={styles.listContainer}>
//           <ul className={styles.list}>
//             { children }
//             <button className={styles.listButton} onClick={() => setIsDropdownOpen(false)}>
//               Закрыть
//             </button>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


