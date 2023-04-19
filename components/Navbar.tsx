import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <LinkTag active={router.pathname === '/' ? true : false} href="/">
          Home
        </LinkTag>
        <LinkTag
          active={router.pathname === '/about' ? true : false}
          href="/about">
          About
        </LinkTag>
      </div>
      <style jsx>
        {`
          nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          img {
            max-width: 100px;
            margin-bottom: 5px;
          }
          nav div {
            display: flex;
            gap: 10px;
          }
        `}
      </style>
    </nav>
  );
}
const LinkTag = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => (props.active === true ? 'tomato' : '')};
`;
