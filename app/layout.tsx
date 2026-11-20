import type { ReactNode } from 'react';
import './globals.css';
export const metadata={title:'CCNA SimuLab Academy',description:'Parcours personnel CCNA'};
export default function Layout({children}:{children:ReactNode}){return <html lang="fr"><body>{children}</body></html>}