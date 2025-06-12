import { useEffect, useState } from 'react'
import { getBrands } from '../../api/api'
import { Brand } from '../../types/types'

export const HomeBuilder = () => {
    const [brands, setBrands] = useState<Brand[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await getBrands()
                setBrands(data)
            } catch (err) {
                setError('Erro ao buscar marcas')
                console.error(err)
            } finally {
                setLoading(false)
            }
        };

        fetchBrands()
    }, [])

    return {
        brands,
        loading,
        error
    }
}
