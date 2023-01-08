import Component from '../../templates/components';
import { PageIds } from '../../../pages/app';

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Main Page',
    },
    {
        id: PageIds.SettingsPage,
        text: 'Settings Page',
    },
    {
        id: PageIds.StatisticPage,
        text: 'Statistic Page',
    },
];

class Header extends Component {
    constructor() {
        super('header', 'header');
    }

    renderPageButtons() {
        this.container.innerHTML = '';
        const pageBtns = document.createElement('div');
        Buttons.forEach(({ id, text }) => {
            const btn = document.createElement('a');
            btn.textContent = text;
            btn.href = `#${id}`;
            pageBtns.append(btn);
        });
        this.container.append(pageBtns);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;