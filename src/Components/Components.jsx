import './Components.css'
import Button from './fixComps/ButtonComponent'
import SideBar from './dynamicComps/SideBar'
import NavBar from './staticComps/NavBarComps'

function Components() {
    return (
        <>
        <NavBar />
        <Button />
        <SideBar />
        </>
    )
}


export default Components