import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/flip">Flip</Link>
          </li>
          <li>
            {/* https://stackblitz.com/edit/nextjs-13cw4u?file=components%2FHeader.js */}
            <Link href="/layers">Layers Section</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Header };
