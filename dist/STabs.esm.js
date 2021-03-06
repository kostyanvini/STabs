class STabs {
    /**
     * @class STabs
     * @param {object} params 
     * @param {string | Node | NodeList} params.head элементы переключения табов
     * @param {string | Node | NodeList} params.content контент табов
     * @param {string} [params.activeClass='selected'] класс активного таба
     * @param {Object} [params.on] Объект с функциями
     * @param {Function} [params.on.beforeChangeTab=null] Событие, которое сработает перед изменения активного таба
     * @param {Function} [params.on.afterChangeTab=null] Событие, которое сработает после изменения активного таба
     */
    constructor(params) {
        const defaultParams = {
            head: null,
            content: null,
            activeClass: 'selected',
            on: {
                beforeChangeTab: null,
                afterChangeTab: null,
            }
        };
        this.params = { ...defaultParams, ...params };
        this.head = this.getSelector(this.params.head);
        this.content = this.getSelector(this.params.content);
        this.activeClass = this.params.activeClass;
        this.init();
    }
    init() {
        if (!this.head || !this.content || !this.head.length || !this.content.length) {
            return;
        }
        let _this = this;
        this.head.forEach(t => {
            t.addEventListener('click', function (e) {
                if (_this.params.on.beforeChangeTab) {
                    _this.params.on.beforeChangeTab.call(_this);
                }

                let tab = this.dataset.tab;
                _this.content.forEach(content => {
                    content.dataset.tab === tab ? content.classList.add(_this.activeClass) : content.classList.remove(_this.activeClass);
                });

                _this.head.forEach(tabHead => tabHead.classList.remove(_this.activeClass));
                this.classList.add(_this.activeClass);

                if (_this.params.on.afterChangeTab) {
                    _this.params.on.afterChangeTab.call(_this);
                }
            }.bind(t));
        });
    }
    getSelector(s) {
        if (!s) {
            throw new Error('selector is not defined');
        }
        if (s instanceof HTMLElement) {
            return s;
        }
        const sel = document.querySelectorAll(s);
        if (sel && sel !== null && sel !== undefined) {
            return sel;
        }
    }
    /**
     * 
     * @param {String} eventName Наименование события
     * @param {Function} callback Функция, которая будет выполнена при отрабатывании события
     * @returns {Object} instance STabs
     */
    on(eventName, callback) {
        this.params.on[eventName] = callback;
        return this;
    }

    /**
     * @param {Object} opts Параметры для инициализации табов 
     * @returns 
     */
    static create(opts) {
        return new STabs(opts);
    }
}

export { STabs as default };
