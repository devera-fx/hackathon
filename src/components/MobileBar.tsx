import React from 'react'
import Expand from '@/components/Expand'
import { NavbarArray, NavbarItemsType } from "@/utills/NavebarArrayAndTypes"
const MobileBar = () => {
    return (
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                NavbarArray.map((item: NavbarItemsType, index: number) => {
                    return (
                        <Expand key={index} item={item} />
                    )
                })
            }
        </div>
    )
}

export default MobileBar