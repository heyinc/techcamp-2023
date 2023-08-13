import { useState } from "react";

function CounterButton(props: { value: string, width?: number, height?: number, onClick: () => void}) {
    let height = (props.height ? props.height: 1) * 20;
    return (
        <button style={ { flex: props.width ? props.width : 1, height: `${height}px` } } onClick={ props.onClick }>
            { props.value }
        </button>
    );
}

class Api {
    ENDPOINT = "/api";

    async post(path: string, body: any) {
        let res = await fetch(`${this.ENDPOINT}${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res.json();
    }
}

export function Counter() {
    const [prices, setItems] = useState([]);
    const [displayValue, setDisplayValue] = useState("");

    const api = new Api();

    function inputClear() {
        console.log("Clear");
        setItems([]);
        setDisplayValue("");
    }
    function inputAdd() {
        let value = parseInt(displayValue, 10);
        console.log(`Add: ${ value }`);
        setItems([...prices, value]);
        setDisplayValue("");
    }
    async function inputEnter() {
        let sum = prices.reduce((a, b) => a + b, 0);
        console.log(`Sum: ${ sum }`);
        setDisplayValue(String(sum));
        let items = prices.map((price) => ({ price: price }));
        let result = await api.post("/orders", { items: items });
        console.log(result);
    }

    function generateButton(value: string, width?: number) {
        return <CounterButton
            value={ value }
            width={ width }
            onClick={ () => { setDisplayValue(displayValue + value) } }
        />;
    }
    return (
        <div className="counter">
            <input
                className="counter-display"
                value={ displayValue }
                onKeyDown={
                    (e) => {
                        switch (e.key) {
                        case "C":
                            inputClear();
                            e.preventDefault();
                            break;
                        case "+":
                            inputAdd();
                            e.preventDefault();
                            break;
                        case "Enter":
                            inputEnter();
                            e.preventDefault();
                            break;
                        }
                    }
                }
                onChange={
                    (e) => {
                        setDisplayValue(e.target.value);
                    }
                }
            />
            <div style={ { display: "flex" } }>
                <div style={ { flex: "10" } }>
                    <div style={ { display: "flex" } }>
                        { generateButton("1") }
                        { generateButton("2") }
                        { generateButton("3") }
                    </div>
                    <div style={ { display: "flex" } }>
                        { generateButton("3") }
                        { generateButton("4") }
                        { generateButton("5") }
                    </div>
                    <div style={ { display: "flex" } }>
                        { generateButton("6") }
                        { generateButton("7") }
                        { generateButton("8") }
                    </div>
                    <div style={ { display: "flex" } }>
                        { generateButton("0", 2) }
                        { generateButton("00") }
                    </div>
                </div>
                <div style={ { flex: "1" } }></div>
                <div style={ { flex: "2" } }>
                    <div style={ { display: "flex" } }>
                        <CounterButton value={ "C" } onClick={ inputClear } />
                    </div>
                    <div style={ { display: "flex" } }>
                        <CounterButton value={ "+" } onClick={ inputAdd } />
                    </div>
                    <div style={ { display: "flex" } }>
                        <CounterButton value={ "↵" } onClick={ inputEnter } height={ 2 }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
