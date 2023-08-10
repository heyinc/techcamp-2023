import { useState } from "react";

function CounterButton(props: { value: string, width?: number, height?: number, onClick: () => void}) {
    let height = (props.height ? props.height: 1) * 20;
    return (
        <button style={ { flex: props.width ? props.width : 1, height: `${height}px` } } onClick={ props.onClick }>
            { props.value }
        </button>
    );
}

export function Counter() {
    const [sum, setSum] = useState(0);
    const [displayValue, setDisplayValue] = useState("");
    function generateButton(value: string, width?: number) {
        return <CounterButton
            value={ value }
            width={ width }
            onClick={ () => { setDisplayValue(displayValue + value) }}
        />;
    }
    return (
        <div className="counter">
            <div className="counter-display" >{ displayValue }</div>
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
                        <CounterButton
                            value={ "C" }
                            onClick={ () => {
                                setSum(0);
                                setDisplayValue("");
                            }}
                        />
                    </div>
                    <div style={ { display: "flex" } }>
                        <CounterButton
                            value={ "+" }
                            onClick={ () => {
                                setSum(parseInt(displayValue, 10) + sum);
                                setDisplayValue("");
                            }}
                        />
                    </div>
                    <div style={ { display: "flex" } }>
                        <CounterButton
                            value={ "↵" }
                            onClick={ () => {
                                setDisplayValue(String(sum));
                            }}
                            height={ 2 }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
