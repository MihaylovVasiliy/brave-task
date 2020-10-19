import {Wrapper} from "../../components/wrapper";
import Link from "next/link";
import MaskInput from 'react-maskinput'


export default function Payment( {responsePayment} ) {

const [onChange, setOnChange] = React.useState('');
const [onValueChange, setOnValueChange] = React.useState('');


    return(
        <Wrapper>
            <div className='payment__payment_main-block'>
            <form className='payment__payment_form'>
                <img className='payment__payment_form__img' src={responsePayment.logo} alt='Logo'/>
                <p className='payment__payment_form__paragraph-name'>Оператор {responsePayment.name}</p>
            </form>

            <form className='payment__payment_form'>
                <p className='payment__payment_form__paragraph'> Номер телефона </p>
                <MaskInput
                  mask={'+7 (000) 000 - 0000'}
                  size={20}
                  showMask
                  maskChar="_"
                  placeholder="Введите ваш номер без +7"
                  className="payment__payment_form-input"
                />
            </form>

            <form className='payment__payment_form'>
                <p className='payment__payment_form__paragraph'> Сумма пополения </p>
                  <MaskInput
                    onChange={e => {setOnChange(e.target.value)}}
                    onValueChange={e => {(e.value <= 1000) ? setOnChange(e.value) : setOnChange(1000)}}
                    mask={'0000'}
                    value={onChange}
                    size={20}
                    placeholder="Введите сумму от 1 до 1000р."
                    className="payment__payment_form-input"
                  />
            </form>

            <div className='payment__button-block'>
                <Link href="/payment/sendRequest"><a className='payment__button-block__link'>Оплатить</a></Link>
                <Link href="/"><a className='payment__button-block__link'> Вернуться к выбору оператора </a></Link>
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