import Image from 'next/image';
import { HeaderLogo } from '../../styles/components/HeaderSite';

export default function HeaderSite() {
    return (
        <HeaderLogo>
            <Image src="/logo.png" alt="logo" height="30px" width="250px" />
        </HeaderLogo>
    )
}