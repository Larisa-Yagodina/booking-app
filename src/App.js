import MenuWrapper from "./components/menu/MenuWrapper";
import "./App.css";
import HotelsWrapper from "./components/hotels/HotelsWrapper";
import {useState} from "react";

export default function App() {

    const menu = ['Home page', 'Hotels', 'Appartments', 'Villas']
    const allHotels = [
        {
            name: 'Hilton',
            address: 'New York 34th street 1234',
            price: '100',
            description: 'Good place to stay',
        },
        {
            name: 'Sheraton',
            address: 'Los Angeles Green blvd 123',
            price: '150',
            description: 'Best location',
        },
        {
            name: 'Marriott',
            address: 'Chicago Michigan Ave 321',
            price: '350',
            description: 'Lake view',
        },
        {
            name: 'Mandarin Orientals',
            address: 'San Francisco 17th str 1234',
            price: '400',
            description: 'Home away from home',
        }
    ]
    const [isAuth, setIsAuth] = useState(false)

    const login = () => setIsAuth(true)
    const logout = () => setIsAuth(false)

    if (!isAuth) {
        return (
            <div className="App">
                <h1>Please, log in</h1>
                <button onClick={login}>log in</button>
            </div>
        )
    }

    return (
        <div className="App">
            <button onClick={logout}>log out</button>
            <hr/>
            <h1>Booking</h1>
            <MenuWrapper menu={menu}/>
            <h2>Hotels</h2>
            <HotelsWrapper allHotels={allHotels}/>
        </div>
    );
}
