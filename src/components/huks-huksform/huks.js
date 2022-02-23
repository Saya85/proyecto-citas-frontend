
const HuksMascotas =() =>{
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        axos('http://3000')
        .then(response => {
            setItems(response.data);
            setIsLoaded(true)

        })
    })


}