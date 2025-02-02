import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {OKRObjectivesProvider} from "./provider/OKRObjectivesProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <OKRObjectivesProvider>
            <App/>
        </OKRObjectivesProvider>
    </StrictMode>,
)
