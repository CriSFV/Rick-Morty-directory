import { Link } from 'react-router-dom';
import '../styles/Card.scss';
import DoesNotExist from './DoesNotExist';

const CardDetail = (props) => {
  const isAlive = () => {
    if (props.data.status === 'Dead') {
      return "I'm dead";
    } else {
      return "I'm alive";
    }
  }; // poner foto muerto/vivo

  if (props.data === undefined) {
    return <DoesNotExist />;
  }
  return (
    <>
      <div className='div'>
        <section className='card'>
          <img
            className='list__character__img'
            src={props.data.photo}
            alt={props.data.name}
          ></img>
          <article className='card__article'>
            <h3 className='card__title'>{props.data.name}</h3>
            <ul className='card__detail'>
              <li className='card__detail__status'>Estado: {isAlive()}</li>
              <li className='card__detail__origin'>
                Origen: {props.data.origin}
              </li>
              <li className='card__detail__episodes'>
                Episodios: {props.data.episodes}{' '}
              </li>
              <li className='CardClose'>
                <Link to='/' className='CardClose__link'>
                  Volver
                </Link>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
};
export default CardDetail;
