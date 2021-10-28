interface UserProps {
    name: string;
    age: number;
    hobby: string;
}

export default function Cards({name, age, hobby}: UserProps) {
    return (
        <div>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Hobby: {hobby}</p>
        </div>
    )
}
