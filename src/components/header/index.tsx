import './header.css';

export function Header({ fullpageRef, hideHeader }: { fullpageRef: React.MutableRefObject<any>; hideHeader: boolean }) {
  return (
    <header className={`header ${hideHeader ? 'header__hide' : ''}`}>
      <nav className='header__nav'>
        <ul className='header__nav__list'>
          <li>
            <a href='#first-section'>First Section</a>
          </li>
          <li>
            <a href='#second-section'>Second Section</a>
          </li>
          <li>
            <a href='#third-section'>Third Section</a>
          </li>
          <li>
            <a href='#fourth-section'>Fourth Section</a>
          </li>
          <li>
            <a href='#fifth-section'>Fifth Section</a>
          </li>
          <li>
            <a href='#sixth-section'>Sixth Section</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
