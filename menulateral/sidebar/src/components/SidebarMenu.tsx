import { useState } from "react";
import { SidebarMenuCard, SidebarMenuItem } from "../types/types";
import {classNames} from "../util/classes";
import { VscMenu } from "react-icons/vsc";
import "./SideBarMenu.scss";

import { SideBarMenuCardView } from "./SideBarMenuCardView";
import { SideBarMenuItemView } from "./SideBarMenuItemView";

interface SidebarMenuProps{
    items:SidebarMenuItem[];
    card:SidebarMenuCard;

}
export function SidebarMenu({items,card}: SidebarMenuProps){
    const [isOpen,setIsOpen] = useState<boolean>(true); 

    function handleCLick(){
        setIsOpen(!isOpen);
    }

    return <div className={classNames("SideBarMenu", isOpen? "expanded":"collapsed")}>
            <div className="menuButton">
                <button className="hamburguerButton"  onClick={handleCLick}>
                    <VscMenu />
                </button>
            </div>
            <SideBarMenuCardView card={card} isOpen={isOpen} />
            {
                items.map((item)=>(
                    <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
                ))
            }
        </div>;
}