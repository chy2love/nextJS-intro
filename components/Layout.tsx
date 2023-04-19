import { ReactNode } from 'react';
import Navbar from './Navbar';
interface PropsType {
  children: ReactNode;
}
export default function Layout({ children }: PropsType) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
