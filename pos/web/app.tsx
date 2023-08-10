import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<Counter />);
