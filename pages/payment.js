import {Wrapper} from "./wrapper";
import Link from "next/link";

export default function Payment() {
    return(
        <Wrapper>
            <h2> Cтраница оплаты </h2>
            <form>
                <img alt='Лого оператора'/>
                <p> Название оператора </p>
            </form>

            <form>
                <p> Номер телефона </p>
                <input placeholder='Введите номер без 8'/>
            </form>

            <form>
                <p> Сумма пополения </p>
                <input placeholder='Введите сумму от 1р до 1000р'/>
            </form>

            <div>
                <Link href="/"><a> Свершить оплату </a></Link>
                <Link href="start"><a> Вернуться к выбору оператора </a></Link>
            </div>
        </Wrapper>
    );
}