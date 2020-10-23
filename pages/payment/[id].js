import {Wrapper} from "../../components/wrapper";
import Link from "next/link";
import StyledLink from "../../components/styledLink";
import ErrorSpan from "../../components/errorSpan";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';


export default function Payment( {responsePayment} ) {

const { register, handleSubmit, control, watch, errors } = useForm();

const onSubmit = data => {
    console.log(data);
    router.push({
        pathname: '/payment/sendRequest',
        query: data
    });
};

const router = useRouter();
console.log(watch("tel", false))

    return(
        <Wrapper>
            <div className='payment__payment_main-block'>
            <form className='payment__payment_form' onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <img className='payment__payment_form__img' src={responsePayment.logo} alt='Logo'/>
                <p className='payment__payment_form__paragraph-name'>Оператор {responsePayment.name}</p>

                <p className='payment__payment_form__paragraph'> Номер телефона </p>

                          <Controller
                                  name="tel"
                                  control={control}
                                  defaultValue={false}
                                  rules={{ required: true, maxLength: 16, minLength: 16, pattern: /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/ }}
                                  render={props =>
                                    <InputMask
                                      name="tel"
                                      type="phone"
                                      mask={'+7(999)999-99-99'}
                                      placeholder="Введите ваш номер телефона"
                                      className="payment__payment_form-input tel-input"
                                      onChange={e => {
                                      console.log(e);
                                      props.onChange(e.target.value)
                                      }}
                                      checked={props.value}
                                      ref={register({ required: true})}/>
                                  } // props contains: onChange, onBlur and value
                                />

                    {errors.tel && errors.tel.type ==='required' && <ErrorSpan> Ввод номера обязателен </ErrorSpan>}
                    {errors.tel && errors.tel.type ==='pattern' && <ErrorSpan> Введите корректный номер телефона </ErrorSpan>}

                <p className='payment__payment_form__paragraph'> Сумма пополения </p>
                    <input name="amount"
                    type="number"
                    placeholder="Введите сумму от 1₽ до 1000₽"
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
        responsePayment: json.operators[ctx.query.id - 1]
    }
}