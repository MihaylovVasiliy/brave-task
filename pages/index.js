import { Wrapper } from "./wrapper";
import Link from "next/link";

export default function Start({ operators }) {

    return(
        <Wrapper>
            <ul className='operators-list'>
                {operators.map(op => (
                    <li className='operators-list__item' key={op.name} data-info={JSON.stringify(op)}>
                        <img className='operators-list__item_img' src={op.logo} alt='Logo'/>
                        <span className='operators-list__item_name'>{op.name}</span>
                        <span className='operators-list__item_description'>{op.description}</span>
                        <Link href={`/payment/[id]`} as={`/payment/${op.id}`}>
                            <a className='operators-list__item_link'>Перейти к оплате</a>
                        </Link>
                    </li>
                ))
                }
            </ul>

        </Wrapper>
    );
}

Start.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:4200/operators')
    const json = await res.json()
    return {
        operators: json
    }
}

