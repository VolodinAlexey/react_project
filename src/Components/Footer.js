import React from 'react';


const Footer = () => {

    return (
        <>
            <div className="main-footer" /* id="basic-navbar-nav" bg="dark" variant="dark" */>
                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <h4>Инструкция</h4>
                            <ul className="list-unstyled">
                                <li>Подача</li>
                                <li>Проверка</li>
                                <li>Статус</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Справочная информация</h4>
                            <ul className="list-unstyled">
                                <li>Понятия</li>
                                <li>Правовая форма</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4><a href="/" className='text-secondary'> О проекте</a></h4>
                            <ul className="list-unstyled">
                                <li>Возможности</li>
                                <li>Документы</li>
                                <li>Цены</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm">
                               &copy; {new Date().getFullYear()} - Регистрация бизнеса - Все права защищены
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )

}

export default Footer;



