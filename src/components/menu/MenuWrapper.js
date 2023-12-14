import MenuItem from "./MenuItem";

export default function MenuWrapper(props) {

    return (
        <div>
            {props.menu.map((menuItem, index) =>
                <MenuItem
                    key={index}
                    menuItem={menuItem}
                    orderNumber={index + 1}
                />
            )}

        </div>
    );
}