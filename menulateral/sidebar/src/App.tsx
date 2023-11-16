import './App.css';
import { SidebarMenu } from './components/SidebarMenu.';
import { SidebarMenuCard, SidebarMenuItem } from './types/types';
import {FcAdvertising} from 'react-icons/fc'

function App() {
  const items:SidebarMenuItem[] = [
    {id:'1',
    label:'Hola',
    icon: FcAdvertising,
    url:'/'}
  ]

  const card:SidebarMenuCard = {
    id:'card01',
    displayName:'Marcos Rivas',
    title:'youtuber',
    photoUrl:'',
    url: '/', 
  }
  return (
    <div>
      <SidebarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
