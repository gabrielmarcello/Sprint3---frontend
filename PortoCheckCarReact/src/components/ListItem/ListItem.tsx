import './ListItem.css'
const ListItem = ({title, linkTo, img}: {title: string, linkTo: string, img: string}) => {
    return (
        <>
        <li className='as'>
            <img src={img} alt="" />
             <a className='Perguntas' href={linkTo}>{title}</a>
         </li>
        </>
    )
}

export default ListItem