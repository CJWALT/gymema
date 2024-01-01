import { SelectedPage } from '@/shared/type';
import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage; 
    setSelectedPage: (value:SelectedPage) => void;
}

export default function Links({
    page,
    selectedPage, 
    setSelectedPage,
}: Props) {


    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px')
    
    
  return (
    <AnchorLink
        className={
                `${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
                transition duration-500 hover:text-primary-300
                `}
        href = {`#${lowerCasePage}`}
        onClick = { ()=> setSelectedPage(lowerCasePage)}>
        {
            page
        }
    </AnchorLink>
  )
}