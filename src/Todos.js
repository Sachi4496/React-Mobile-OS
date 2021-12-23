import './App.css';
function Todos({ title, name }) {
    return <div style={{
        width: '500px',
        margin: "auto",
    }}>
        <h1>{title}</h1>
        <div style={{
        width: '200px',
        margin: "auto",
    }}>
            <ul>
                {name.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
        </div>
    </div>
}

export default Todos;