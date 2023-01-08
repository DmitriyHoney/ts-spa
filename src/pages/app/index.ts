import Page from '../../core/templates/page';
import MainPage from '../main';
import SettingsPage from '../settings';
import StatisticPage from '../statistics';
import NotFoundPage from '../404';
import Header from '../../core/components/header';

export const enum PageIds {
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatisticPage = 'statistics-page',
    NotFoundPage = '404',
}

class App {
    private static container: HTMLElement;
    private initialPage: MainPage;
    private static header: Header;

    static router = {
        [PageIds.MainPage]: new MainPage('main-page'),
        [PageIds.SettingsPage]: new SettingsPage('settings-page'),
        [PageIds.StatisticPage]: new StatisticPage('statistics-page'),
        [PageIds.NotFoundPage]: new NotFoundPage('404'),
    }

    static renderNewPage(idPage: string) {
        App.container.innerHTML = '';
        // @ts-ignore
        const page: Page = App.router[idPage] || App.router[PageIds.NotFoundPage];
        
        page.clearHTML();
        App.container.append(App.header.render());
        App.container.append(page.render());
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        App.header = new Header();
        App.container = document.body;
        this.initialPage = new MainPage('main-page');
    }

    run() {
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
}

export default App;