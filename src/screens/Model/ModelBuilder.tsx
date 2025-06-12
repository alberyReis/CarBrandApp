import { useEffect, useState } from 'react'
import { getModels } from '../../api/api'
import { UserModel } from '../../types/types'

export const ModelBuilder = (brandCode: string) => {
  const [models, setModels] = useState<UserModel[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        const data = await getModels(brandCode)
        setModels(data);
      } catch (err) {
        setError('Erro ao buscar os modelos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchModels();
  }, [brandCode]);

  return {
    models,
    loading,
    error
  }
}