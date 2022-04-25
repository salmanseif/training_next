import { useRouter } from 'next/router'

const Test = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Test: {pid}</p>
}

export default Test