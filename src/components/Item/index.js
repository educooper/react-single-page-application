const Item = ({children}) =>{
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {children}

      </a>
    )
}

export default Item;

//props.children faria gerar tag com abertura e fechamento completa        
// <Item>
//  Item 1
//</Item>

//
// const Item = ({children})
//
// desestruturando propriedade
//
//const Item = (props) =>{
//    return(
//        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
//        {props.texto}
//
//      </a>
//    )
//}