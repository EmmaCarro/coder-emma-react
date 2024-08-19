export const ItemListContainer = ({greeting}) => {
    const ItemListContainerStyle = {
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };
    return (
        <div style={ItemListContainerStyle}>
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer;