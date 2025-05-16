interface ProdutoDados{
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export default async function Produto(){

    const resposta = await fetch('https://fakestoreapi.com/products');
    const dados: ProdutoDados[] = await resposta.json();

    return(
        <div>
        <h1>PRODUTO</h1>

        {dados.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
            </div>
        ))}
        </div>
    )
}