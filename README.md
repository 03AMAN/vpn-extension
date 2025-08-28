🚀 VPN Extension (Demo)

A React + Vite project that simulates a VPN browser extension UI.
This app fetches the user’s current IP address and displays a list of proxy servers using a public API. Users can select a proxy and simulate connecting to it, with a new IP being displayed.

🔧 Tech Stack

React (Vite) – Frontend framework

Bootstrap / React-Bootstrap – UI styling

Framer Motion – Animations

API Integration –

ipify → Fetch current IP

proxyscrape → Fetch proxy server list

✨ Features

Display current IP address

Fetch and list proxies dynamically

Proxy selection with dropdown

Simulated connection to a proxy (updates IP)

Animated UI with smooth transitions

Responsive, modern design using Bootstrap

📸 Preview
<img width="1910" height="911" alt="image" src="https://github.com/user-attachments/assets/d0edc43e-f4e4-4d86-9dde-6aa933b0f4ee" />

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
