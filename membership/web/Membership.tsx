import { useState } from "react";

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

function Signin(props: { onSignin: (email: string) => void }) {
    return <div>
        <form
            onSubmit={ (e) => {
                e.preventDefault();
                let email = (document.getElementById("email") as HTMLInputElement).value;
                props.onSignin(email);
            }
            }>
            <div>
                <label>Email</label>
                <input id="email" type="email" />
            </div>
            <div>
                <button type="submit">Signin</button>
            </div>
        </form>
    </div>;
}

function MembershipCard(props: { session: { id?: number, email?: string }, onSignout: () => void }) {
    return <div className="membership_card">
        <h1>Membership</h1>
        <p>ID: { props.session.id }</p>
        <p>Email: { props.session.email }</p>
        <button onClick={ props.onSignout }>Signout</button>
    </div>;
}

export function Membership() {
    let savedSessionItem = localStorage.getItem("session");
    let savedSession : { id?: number, email?: string } = savedSessionItem ? JSON.parse(savedSessionItem) : {};
    const [session, setSession] = useState(savedSession);

    const api = new Api();

    function clearSession() {
        setSession({});
        localStorage.removeItem("session");
    }
    async function saveSession(email: string) {
        let response = await api.post("/sessions", { email: email })
        let newSession = { id: response.id, email: response.email };
        setSession(newSession);
        localStorage.setItem("session", JSON.stringify(newSession));
    }
    return session["email"]
        ? <MembershipCard session={ session } onSignout={ clearSession }/>
        : <Signin onSignin={ (email: string) => saveSession(email) } />;
}
