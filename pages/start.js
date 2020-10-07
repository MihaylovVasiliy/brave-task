import Link from "next/link";
import { Wrapper } from "./wrapper";

export default function Start() {
    return(
        <Wrapper>
            <input placeholder='название оператора'></input>
            <ul>
                <li> Op1 </li>
                <li> Op2 </li>
                <li> Op3 </li>
            </ul>
            <h2> Или введите номер телефона </h2>
            <input placeholder='номер телефона, без 8'></input>
            <Link href="payment"><a> Перейти к странице оплаты </a></Link>
        </Wrapper>
    );
}