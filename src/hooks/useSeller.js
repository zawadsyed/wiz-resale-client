import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsseller] = useState(false);
    const [isSellerLoading, setisSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://wiz-resale-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsseller(data.isSeller);
                    setisSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;