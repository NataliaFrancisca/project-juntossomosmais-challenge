import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MemberStyle } from "./MemberStyle";

const Member = () => {
    const {id} = useParams();
    const [memberData, setMemberData] = useState()

    useEffect(() => {
        fetch(`http://localhost:9999/members/${id}`)
        .then(res => res.json())
        .then(data => setMemberData(data))
        .catch(error => console.error(error))
    },[id])

    const formatDate = (date) => {
        const formatedDate = new Date(date);
        const [day, month, year] = [formatedDate.getDate(), formatedDate.getMonth(), formatedDate.getFullYear()];
        return `${day} de ${getMonthName(month)} de ${year}`
    }

    const getMonthName = (monthNumber) => {
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        return months[monthNumber];
    }

    return(
        <MemberStyle>
                <header>
                    <img src={memberData?.picture.large} alt="Foto de perfil"/>
                    <div className="details-header">
                        <h1>{memberData?.name.first} {memberData?.name.last}</h1>
                        <a href={`malito:${memberData?.email}?subject=Assunto`}>{memberData?.email}</a>
                    </div>
                </header>

                <hr />

                <main>
                    <label>Endereço:</label>
                    <span className="address">{memberData?.location.city} - {memberData?.location.state} - CEP: {memberData?.location.postcode}</span>
                
                    <label>Contato:</label>
                    <ul>
                        <li>{memberData?.phone}</li>
                        <li>{memberData?.cell}</li>
                    </ul>

                    <label>Informações Pessoais:</label>
                    <ul>
                        <li>
                            <label>Data de Nascimento:</label>
                            <span className="lowercase-label">{formatDate(memberData?.dob.date)}</span>
                        </li>

                        <li>
                            <label>Idade:</label>
                            <span className="lowercase-label">{memberData?.dob.age}</span>
                        </li>

                        <li>
                            <label>Data de registro na empresa:</label>
                            <span className="lowercase-label">{formatDate(memberData?.registered.date)}</span>
                        </li>

                        <li>
                            <label>Tempo de empresa:</label>
                            <span className="lowercase-label">{memberData?.registered.age}</span>
                        </li>
                    </ul>
                </main>

        </MemberStyle>
    )
}

export default Member;