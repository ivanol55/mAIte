interface Props {
    id: string
    name: string
    placeholder: string
}

export default function Card(
        props: Props
    ) {
    return (
        <input type="text" id={props.id} name={props.name} placeholder={props.placeholder}/>
    )
}