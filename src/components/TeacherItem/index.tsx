import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/20425031?s=460&u=e37931a8707380c165a1713d923d35ca5ca3d6ce&v=4" alt="Mateus Paixão"/>
            <div>
                <strong>Mateus Paixão</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/><br/>
            Maxime tenetur minima officia tempora facere tempore voluptate, corrupti quibusdam beatae fuga dignissimos? Fuga neque nulla dolorem et dolores atque deleniti id.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
  )
}

export default TeacherItem;