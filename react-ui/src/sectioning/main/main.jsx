import { Switch } from 'react-router-dom';
import Routes from '../../routes/index'

const Main = () => {
    return (
        <main>
            <Switch>
                <Routes />
            </Switch>
        </main>
    )
}

export default Main;