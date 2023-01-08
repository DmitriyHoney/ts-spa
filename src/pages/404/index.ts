import Page from '../../core/templates/page'

class NotFoundPage extends Page {
    static TextObject = {
        MainTitle: '404 Not Found',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(NotFoundPage.TextObject.MainTitle);
        this.container.appendChild(title);
        return this.container;
    }
}

export default NotFoundPage;