import React from "react";
import Pages from "../layouts/Pages";

const NotFound = () => {
    return (
        <Pages>
            <section className="not-found">
                <div className="not-found__wrapper">
                    <h1 className="not-found__title">
                        Ошибка
                    </h1>
                    <p className="not-found__text">При загрузке данных произошла ошибка</p>
                    <p className="not-found__text">
                        Не ожидали увидеть данное сообщение? Мы тоже, но к сожалению, такое иногда случается.
                    </p>
                    <p className="not-found__text">
                        Если у вас есть, что нам сообщить или прокомментировать свои действия,
                        а также задать вопрос - напишите в службу поддержки по адресу: &nbsp;
                        <a href="mailto:it@dengisrazy.ru">it@dengisrazy.ru</a> .
                    </p>
                </div>
            </section>
        </Pages>
    )
}
export default NotFound;

