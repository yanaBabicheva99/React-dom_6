import { useLocation, useRoutes } from 'react-router-dom';

import routes from './routes';

function App() {
    const { pathname } = useLocation();

    const elements = useRoutes(routes(pathname));

    return (
        <div className="App">
            <h1>
                App Layout
                {elements}
            </h1>
        </div>
    );
}

export default App;
