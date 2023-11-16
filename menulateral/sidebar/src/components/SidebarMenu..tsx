import { useState } from "react";
import { SidebarMenuCard, SidebarMenuItem } from "../types/types";
import {classNames} from "../util/classes";
import { VscMenu } from "react-icons/vsc";

interface SidebarMenuProps{
    items:SidebarMenuItem[];
    card:SidebarMenuCard;

}
export function SidebarMenu({items,card}: SidebarMenuProps){
    const [isOpen,setIsOpen] = useState<boolean>(true); 

    return <div className={classNames("SideBarMenu", isOpen? "expanded":"collapsed")}>
            <div className="menuButton">
                <button>
                    <VscMenu />
                </button>
            </div>
        </div>;
}