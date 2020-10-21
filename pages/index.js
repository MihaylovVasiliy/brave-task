import { Wrapper } from "../components/wrapper";
import Link from "next/link";
import StyledLink from "../components/styledLink";

export default function Start({ operators }) {

    return(
        <Wrapper>
            <ul className='operators-list'>
                {operators.map(op => (
                    <li className='operators-list__item' key={op.id} data-info={JSON.stringify(op)}>
                        <img className='operators-list__item_img' src={op.logo} alt='Logo'/>
                        <span className='operators-list__item_name'>{op.name}</span>
                        <span className='operators-list__item_description'>{op.description}</span>
                        <Link href={`/payment/[id]`} as={`/payment/${op.id}`}>
                            <StyledLink>Перейти к оплате</StyledLink>
                        </Link>
                    </li>
                ))
                }
            </ul>
        </Wrapper>
    );
}

Start.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.API_URL}/api/requestDatabase`)
    const json = await res.json()
    return {
        operators: json.operators
    }
}

