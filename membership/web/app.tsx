import { createRoot } from "react-dom/client";
import { Membership } from "./Membership";


const container = document.getElementById("app");
const root = createRoot(container)
root.render(<Membership />);
