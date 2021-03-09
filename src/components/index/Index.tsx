import React, {useEffect} from "react";
import Pages from "../../layouts/Pages";
import {NextPage} from "next";
import {useRouter} from "next/router";
import LocalMap from "../LocalMap";

interface Props {
    getLead: (path) => void,
    index: {
        lead: {
            data: {}
        },
    },
}

const Index: NextPage<Props> = (
    {getLead, index: {lead}}
    ) => {
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        getLead(id);
    }, [])

    const mockLead = {
        birth_date: "25.04.1996",
        comment: "Ростов-на-Дону Ростовская | Повторный клиент | Должник | Персональные данные 1С: Тарасюк Арсен Александрович Должен по договору NФК-026/1900361 24 860 (Контрагент найден по ФИО и ДР)",
        desired_amount: 25000,
        desired_days: 14,
        fio: "Тест Тест Тест",
        mobile_phone: "+7 (988) 588-65-04",
        passport: "6016 985166",
        passport_issue_date: "22.07.2016",
        type: 0,
    }

    const renderLead = () => {

        const data: any = lead !== undefined ? lead.data : mockLead;
        return (
            <ul className="data__list">
                <li className="data__item">
                    <p>Тип</p><p>{data.type === "0" ? "Новый": "Повторный"}</p>
                </li>
                <li className="data__item">
                    <p><strong>ФИО</strong></p><p><strong> {data.fio}</strong></p>
                </li>
                <li className="data__item">
                    <p>Мобильный телефон </p><p>{data.mobile_phone}</p>
                </li>
                <li className="data__item">
                    <p>Сумма </p><p>{data.desired_amount}</p>
                </li>
                <li className="data__item">
                    <p>Срок </p><p>{data.desired_days} дней</p>
                </li>
                <li className="data__item">
                    <p>Серия и номер пасспорта </p><p>{data.passport}</p>
                </li>
                <li className="data__item">
                    <p>Дата выдачи пасспорта </p><p>{data.passport_issue_date}</p>
                </li>
                <li className="data__item">
                    <p>Дата рождения </p><p>{data.birth_date}</p>
                </li>
                <li className="data__item">
                    <p>Комметарий </p><p>{data.comment}</p>
                </li>
            </ul>
        )
    }
    return (
        <Pages>
            <div className="lead">
                {renderLead()}
            </div>
            {LocalMap()}
        </Pages>
    )
}

export default Index;
