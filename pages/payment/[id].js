import {Wrapper} from "../../components/wrapper";
import Link from "next/link";
import StyledLink from "../../components/styledLink";
import ErrorSpan from "../../components/errorSpan";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

export default function Payment( {responsePayment} ) {

const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = data => {
    console.log(data);
    router.push({
        pathname: '/payment/sendRequest',
        query: data
    });
};
const router = useRouter();


console.log(watch("amount"));

    return(
        <Wrapper>
            <div className='payment__payment_main-block'>
            <form className='payment__payment_form' onSubmit={handleSubmit(onSubmit)}>
                <img className='payment__payment_form__img' src={responsePayment.logo} alt='Logo'/>
                <p className='payment__payment_form__paragraph-name'>Оператор {responsePayment.name}</p>

                <p className='payment__payment_form__paragraph'> Номер телефона </p>
                <input name="tel"
                    type="number"
                    placeholder="Введите номер телефона"
                    className="payment__payment_form-input"
                    ref={register({ required: true, pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/})}
                    />
                {errors.tel && <ErrorSpan>Введите телефон целиком</ErrorSpan>}

                <p className='payment__payment_form__paragraph'> Сумма пополения </p>
                    <input name="amount"
                    type="number"
                    placeholder="Введите сумму от 1 до 1000р."
                    className="payment__payment_form-input"
                    ref={register({ required: true, min: 1, max: 1000 })}
                    />
                    {errors.amount && errors.amount.type ==='required' && <ErrorSpan> Введите сумму пополнения </ErrorSpan>}
                    {errors.amount && errors.amount.type ==='min' && <ErrorSpan> Минимальная сумма ввода = 1₽ </ErrorSpan>}
                    {errors.amount && errors.amount.type ==='max' && <ErrorSpan> Максимальная сумма ввода = 1000₽ </ErrorSpan>}
                <StyledLink payment><input type="submit" value="Оплатить"/></StyledLink>
            </form>

            <div className='payment__button-block'>
                <Link href="/"><StyledLink payment> Вернуться к выбору оператора </StyledLink></Link>
            </div>
            </div>
        </Wrapper>
    );
}

Payment.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.API_URL}/api/requestDatabase`)
    const json = await res.json();
    return {
        responsePayment: json.operators[ctx.query.id]
    }
}